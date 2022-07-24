import { ParentComponent, createEffect } from 'solid-js';

import { useObserver } from '../../services/utils';

const PageDecorator: ParentComponent = ({ children }) => {
  createEffect(() => {
    useObserver('.on-scroll');
  });

  return <div class='view content-full flex col'>{children}</div>;
};

export default PageDecorator;
