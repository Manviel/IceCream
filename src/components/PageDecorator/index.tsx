import { ParentComponent } from 'solid-js';
import { useIsRouting } from '@solidjs/router';

import BackwardNavigation, {
  BackwardNavigationType,
} from '../Header/BackwardNavigation';

import { DarkThemeType } from '../../models';

export interface HeaderTemplateType
  extends BackwardNavigationType,
    DarkThemeType {
  headline: string;
}

export const HeaderTemplate: ParentComponent<HeaderTemplateType> = ({
  children,
  isDark = false,
}) => {
  const isRouting = useIsRouting();

  return (
    <main
      class='flex justify-center content-full'
      classList={{ 'pulse-loading': isRouting(), layer: isDark }}
    >
      <div class='panel content-full flex col app' id='app'>
        {children}
      </div>
    </main>
  );
};

const PageDecorator: ParentComponent<HeaderTemplateType> = ({
  children,
  headline,
  subtitle,
  isDark = false,
}) => {
  return (
    <HeaderTemplate headline={headline} subtitle={subtitle} isDark={isDark}>
      <BackwardNavigation subtitle={headline} />

      <h2 class='info card-sub'>{subtitle}</h2>

      {children}
    </HeaderTemplate>
  );
};

export default PageDecorator;
