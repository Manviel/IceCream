import { Component, For, Show, createSignal, onMount } from 'solid-js';

import Loader from '../../../components/Loader';
import { loadGachaState, saveGachaState, clearGachaState } from '../../../services/gacha-db';
import { secureRandom } from '../../../services/utils';

import MiyabiPrize from '../../../assets/prizes/miyabi.webp';
import VelinaPrize from '../../../assets/prizes/velina.webp';
import JanePrize from '../../../assets/prizes/jane.webp';
import EvelynPrize from '../../../assets/prizes/evelyn.webp';
import SunnaPrize from '../../../assets/prizes/sunna.webp';

import './Gacha.css';

enum PullResult {
  Win = 'win',
  Loss = 'loss'
}

interface Prize {
  id: string;
  name: string;
  image: string;
}

const PRIZES: Prize[] = [
  { id: 'miyabi', name: 'Miyabi', image: MiyabiPrize },
  { id: 'velina', name: 'Velina', image: VelinaPrize },
  { id: 'jane', name: 'Jane', image: JanePrize },
  { id: 'evelyn', name: 'Evelyn', image: EvelynPrize },
  { id: 'sunna', name: 'Sunna', image: SunnaPrize }
];

const WIN_CHANCE = 0.006; // 0.6%
const MAX_PULLS = 90;

const secureRandomInt = (max: number): number => {
  const range = 256 - (256 % max);
  const buf = new Uint8Array(1);
  let byte: number;
  do {
    crypto.getRandomValues(buf);
    byte = buf[0];
  } while (byte >= range);
  return byte % max;
};

const Gacha: Component = () => {
  const [pullsRemaining, setPullsRemaining] = createSignal(MAX_PULLS);
  const [unlockedIds, setUnlockedIds] = createSignal<string[]>([]);
  const [lastResult, setLastResult] = createSignal<PullResult | null>(null);
  const [totalPulls, setTotalPulls] = createSignal(0);
  const [isLoaded, setIsLoaded] = createSignal(false);

  const consumedPulls = () => MAX_PULLS - pullsRemaining();
  const progressPercent = () => (consumedPulls() / MAX_PULLS) * 100;

  const resetProgress = async () => {
    setPullsRemaining(MAX_PULLS);
    setUnlockedIds([]);
    setLastResult(null);
    setTotalPulls(0);
    await clearGachaState();
  };

  const unlockRandomPrize = (): Prize | null => {
    const locked = PRIZES.filter(p => !unlockedIds().includes(p.id));
    if (locked.length === 0) return null;

    const prize = locked[secureRandomInt(locked.length)];
    setUnlockedIds(prev => [...prev, prize.id]);
    return prize;
  };

  const performPull = async (count: number) => {
    let won = false;

    for (let i = 0; i < count; i++) {
      if (pullsRemaining() - i <= 0) break;

      const roll = secureRandom();
      if (roll < WIN_CHANCE) {
        won = true;
        unlockRandomPrize();
      }
    }

    const consumed = Math.min(count, pullsRemaining());
    const nextPullsRemaining = Math.max(0, pullsRemaining() - consumed);
    const nextTotalPulls = totalPulls() + consumed;

    setPullsRemaining(nextPullsRemaining);
    setTotalPulls(nextTotalPulls);
    setLastResult(won ? PullResult.Win : PullResult.Loss);

    await saveGachaState({
      pullsRemaining: nextPullsRemaining,
      unlockedIds: unlockedIds(),
      totalPulls: nextTotalPulls
    });

    if (nextTotalPulls >= MAX_PULLS) {
      await resetProgress();
    }
  };

  const unlockedPrizes = () => PRIZES.filter(p => unlockedIds().includes(p.id));

  onMount(async () => {
    const saved = await loadGachaState();

    if (saved) {
      setPullsRemaining(saved.pullsRemaining ?? MAX_PULLS);
      setUnlockedIds(saved.unlockedIds ?? []);
      setTotalPulls(saved.totalPulls ?? 0);
    }

    setIsLoaded(true);
  });

  return (
    <article class="box rounded flex gacha screen">
      <Show when={isLoaded()} fallback={<Loader />}>
        <section class="flex col items-center view proximity side">
          <header class="flex col items-center content-full gacha-header">
            <h4 class="gacha-label gacha-sub">Prize Banner</h4>

            <div class="flex col items-center gacha-counter">
              <span class="gacha-count">{consumedPulls()}</span>
              <span class="gacha-sub grey-dark">/ {MAX_PULLS} pulls used</span>
            </div>

            <div class="content-full gacha-track">
              <div
                class="gacha-fill content-tall"
                role="progressbar"
                aria-valuenow={consumedPulls()}
                aria-valuemin={0}
                aria-valuemax={MAX_PULLS}
                aria-label="Pulls consumed"
                style={{ width: `${progressPercent()}%` }}
              />
            </div>

            <Show when={lastResult() === null}>
              <p class="gacha-chance grey-dark">{WIN_CHANCE * 100}% win chance per pull</p>
            </Show>

            <Show when={lastResult() === PullResult.Win}>
              <p class="gacha-win ghost grey-light" role="status">
                Prize unlocked!
              </p>
            </Show>

            <Show when={lastResult() === PullResult.Loss}>
              <p class="gacha-loss alias red" role="status">
                No luck this time
              </p>
            </Show>
          </header>

          <div class="flex items-center justify-between gap content-full gacha-action view">
            <button
              type="button"
              class="btn legible concise contained"
              onClick={() => performPull(1)}
              disabled={pullsRemaining() <= 0}
            >
              Use 1 Pull
            </button>

            <button
              type="button"
              class="btn legible concise contained"
              onClick={() => performPull(10)}
              disabled={pullsRemaining() <= 0}
            >
              Use 10 Pulls
            </button>
          </div>
        </section>

        <section class="flex col items-center justify-between view gacha-header side">
          <h4 class="flex items-center grey-dark gacha-label gacha-header gacha-sub">
            Unlocked Prizes
            <span class="gacha-badge chip">
              {unlockedPrizes().length} / {PRIZES.length}
            </span>
          </h4>

          <ul class="flex gacha-list gap content-full">
            <Show when={unlockedPrizes().length === 0}>
              <li class="flex col items-center gacha-prize">
                <div class="flex items-center justify-center grey-dark gacha-placeholder content-full">
                  ?
                </div>
                <span class="grey-dark info">No prizes yet</span>
              </li>
            </Show>

            <For each={unlockedPrizes()}>
              {prize => (
                <li class="flex col items-center gacha-prize">
                  <img
                    src={prize.image}
                    alt={prize.name}
                    class="gacha-image content-full"
                    loading="lazy"
                  />
                  <span class="grey-dark info">{prize.name}</span>
                </li>
              )}
            </For>
          </ul>
        </section>
      </Show>
    </article>
  );
};

export default Gacha;
