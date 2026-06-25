import { Component, For, Show, createSignal, onMount } from 'solid-js';

import './Gacha.css';

import MiyabiPrize from '../../../assets/prizes/miyabi.webp';
import VelinaPrize from '../../../assets/prizes/velina.webp';

import { loadGachaState, saveGachaState, clearGachaState } from '../../../services/gacha-db';

enum PullResult {
  Win = 'win',
  Loss = 'loss',
}

interface Prize {
  id: string;
  name: string;
  image: string;
}

const PRIZES: Prize[] = [
  { id: 'miyabi', name: 'Miyabi', image: MiyabiPrize },
  { id: 'velina', name: 'Velina', image: VelinaPrize }
];

const WIN_CHANCE = 0.006; // 0.6%
const MAX_PULLS = 90;

const Gacha: Component = () => {
  const [pullsRemaining, setPullsRemaining] = createSignal(MAX_PULLS);
  const [unlockedIds, setUnlockedIds] = createSignal<string[]>([]);
  const [lastResult, setLastResult] = createSignal<PullResult | null>(null);
  const [totalPulls, setTotalPulls] = createSignal(0);
  const [isLoaded, setIsLoaded] = createSignal(false);

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

    const prize = locked[Math.floor(Math.random() * locked.length)];
    setUnlockedIds(prev => [...prev, prize.id]);
    return prize;
  };

  const performPull = async (count: number) => {
    let won = false;

    for (let i = 0; i < count; i++) {
      if (pullsRemaining() - i <= 0) break;

      const roll = Math.random();
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

    // Save state after each pull
    await saveGachaState({
      pullsRemaining: nextPullsRemaining,
      unlockedIds: unlockedIds(),
      totalPulls: nextTotalPulls,
    });

    // Reset after reaching 90 total pulls consumed
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
    <article class="box view rounded flex col items-center gacha screen">
      <h2 class="subtitle card-header">Prize Banner</h2>

      <Show when={isLoaded()} fallback={<p class="grey-dark info">Loading...</p>}>
        <div class="flex col items-center gap gacha-stats">
          <p class="grey-dark info">
            Pulls remaining: <span class="concise">{pullsRemaining()}</span> / {MAX_PULLS}
          </p>

          <div class="flex gap gacha-buttons">
            <button
              type="button"
              class="btn legible concise contained"
              onClick={() => performPull(1)}
              disabled={pullsRemaining() <= 0}
              aria-label="Use 1 pull"
            >
              Use 1 Pull
            </button>

            <button
              type="button"
              class="btn legible concise contained"
              onClick={() => performPull(10)}
              disabled={pullsRemaining() <= 0}
              aria-label="Use 10 pulls"
            >
              Use 10 Pulls
            </button>
          </div>

          {lastResult() === PullResult.Win && (
            <p class="gacha-win" role="status">
              Prize unlocked!
            </p>
          )}

          {lastResult() === PullResult.Loss && (
            <p class="gacha-loss" role="status">
              No luck this time
            </p>
          )}
        </div>

        <div class="gacha-prizes">
          <h3 class="grey-dark info">Unlocked Prizes</h3>

          <ul class="flex gap gacha-list">
            <For each={unlockedPrizes()}>
              {prize => (
                <li class="flex col items-center gacha-prize">
                  <img src={prize.image} alt={prize.name} class="gacha-image" loading="lazy" />
                  <span class="grey-dark info">{prize.name}</span>
                </li>
              )}
            </For>
          </ul>

          {unlockedPrizes().length === 0 && <p class="grey-dark info">No prizes unlocked yet</p>}
        </div>
      </Show>
    </article>
  );
};

export default Gacha;
