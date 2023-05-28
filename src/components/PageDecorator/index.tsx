import { ParentComponent } from 'solid-js';
import { useIsRouting } from '@solidjs/router';

import Header from '../Header';
import BackwardNavigation, {
  BackwardNavigationType,
} from '../Header/BackwardNavigation';

import { DarkThemeType } from '../../models';

interface HeaderTemplateType extends BackwardNavigationType, DarkThemeType {
  headline: string;
}

const PageDecorator: ParentComponent<HeaderTemplateType> = ({
  children,
  headline,
  subtitle,
  isDark = false,
}) => {
  const isRouting = useIsRouting();

  return (
    <main
      id='app'
      class='app flex col content-full'
      classList={{ 'pulse-loading': isRouting(), layer: isDark }}
    >
      <BackwardNavigation subtitle={subtitle} />

      <div class='panel content-full flex col'>
        <Header spot={headline} />

        {children}
      </div>
    </main>
  );
};

export default PageDecorator;
