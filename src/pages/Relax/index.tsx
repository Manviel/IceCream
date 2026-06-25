import { Component } from 'solid-js';

import Flow from '../../components/PageDecorator/Flow';

import Breathe from './Breathe';
import FaceTime from './FaceTime';
import Gacha from './Gacha';

const Relax: Component = () => (
  <Flow headline="View" subtitle="My account">
    <h3 class="subtitle screen">Leave a message</h3>

    <section class="grid items-start provision proximity">
      <FaceTime />

      <div class="flex col col-span-2 content-tall justify-between gap">
        <Breathe />

        <aside class="flex col layer view rounded">
          <h4 class="card-sub">Lean</h4>
          <p class="term grey-light">
            Any component of a business enterprise that fails to directly benefit a final product is
            superfluous.
          </p>
        </aside>
      </div>
    </section>

    <Gacha />
  </Flow>
);

export default Relax;
