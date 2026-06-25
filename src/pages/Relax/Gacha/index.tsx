import { Component, For, createSignal } from 'solid-js';

import './Gacha.css';

import MiyabiPrize from '../../../assets/prizes/miyabi.webp';
import VelinaPrize from '../../../assets/prizes/velina.webp';

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
  const [lastResult, setLastResult] = createSignal<'win' | 'loss' | null>(null);
  const [totalPulls, setTotalPulls] = createSignal(0);

  const resetProgress = () => {
    setPullsRemaining(MAX_PULLS);
    setUnlockedIds([]);
    setLastResult(null);
    setTotalPulls(0);
  };

  const unlockRandomPrize = (): Prize | null => {
    const locked = PRIZES.filter(p => !unlockedIds().includes(p.id));
    if (locked.length === 0) return null;

    const prize = locked[Math.floor(Math.random() * locked.length)];
    setUnlockedIds(prev => [...prev, prize.id]);
    return prize;
  };

  const performPull = (count: number) => {
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
    setPullsRemaining(prev => prev - consumed);
    setTotalPulls(prev => prev + consumed);
    setLastResult(won ? 'win' : 'loss');

    // Reset after reaching 90 total pulls consumed
    if (totalPulls() + consumed >= MAX_PULLS) {
      resetProgress();
    }
  };

  const unlockedPrizes = () => PRIZES.filter(p => unlockedIds().includes(p.id));

  return (
    <article class="box view rounded flex col items-center gacha">
      <h2 class="subtitle card-header">Prize Banner</h2>

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

        {lastResult() === 'win' && (
          <p class="gacha-win" role="status">Prize unlocked!</p>
        )}

        {lastResult() === 'loss' && (
          <p class="gacha-loss" role="status">No luck this time</p>
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

        {unlockedPrizes().length === 0 && (
          <p class="grey-dark info">No prizes unlocked yet</p>
        )}
      </div>
    </article>
  );
};

export default Gacha;
