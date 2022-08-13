import { ParentComponent, createEffect } from 'solid-js';

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
  hideBackward,
}) => {
  createEffect(() => {
    useObserver('.on-scroll');
  });

  return (
    <>
      <BackwardNavigation subtitle={subtitle} hideBackward={hideBackward} />

      <div class='panel content-full flex col'>
        <Header spot={headline} />

        {children}
      </div>
    </>
  );
};

export default PageDecorator;
