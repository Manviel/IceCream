import { ParentComponent, createEffect } from 'solid-js';
import { useIsRouting } from '@solidjs/router';

import Header from '../Header';
import BackwardNavigation, {
  BackwardNavigationType,
} from '../Header/BackwardNavigation';

import { useObserver } from '../../services/utils';

interface HeaderTemplateType extends BackwardNavigationType {
  headline: string;
}

const PageDecorator: ParentComponent<HeaderTemplateType> = ({
  children,
  headline,
  subtitle,
  customPath,
}) => {
  const isRouting = useIsRouting();

  createEffect(() => {
    useObserver('.on-scroll');
  });

  return (
    <main
      class='app flex col content-full'
      classList={{ 'pulse-loading': isRouting() }}
    >
      <BackwardNavigation subtitle={subtitle} customPath={customPath} />

      <div class='panel content-full flex col'>
        <Header spot={headline} />

        {children}
      </div>
    </main>
  );
};

export default PageDecorator;
