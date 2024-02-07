import { ParentComponent } from 'solid-js';

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
  return (
    <main
      class='flex justify-center content-full'
      classList={{ layer: isDark }}
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
