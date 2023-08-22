import { ParentComponent } from 'solid-js';
import { useIsRouting } from '@solidjs/router';

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
      class='flex justify-center content-full'
      classList={{ 'pulse-loading': isRouting(), layer: isDark }}
    >
      <div class='panel content-full flex col app' id='app'>
        <BackwardNavigation subtitle={headline} />

        <h2 class='info card-sub'>{subtitle}</h2>

        {children}
      </div>
    </main>
  );
};

export default PageDecorator;
