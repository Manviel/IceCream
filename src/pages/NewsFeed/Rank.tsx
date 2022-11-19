import type { Component } from 'solid-js';

import { ChartColors } from '../../models';

type RankType = {
  place: number;
};

const getRankColor = (place: number) => {
  if (place < 7) return ChartColors.Neon;

  if (place > 27) return ChartColors.Red;

  return undefined;
};

const Rank: Component<RankType> = ({ place }) => (
  <h2
    class='box shape rank flex items-center justify-center'
    style={{ color: getRankColor(place) }}
  >
    {place + 1}
  </h2>
);

export default Rank;
