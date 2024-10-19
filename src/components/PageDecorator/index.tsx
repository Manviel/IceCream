import { ParentComponent } from 'solid-js';

import BackwardNavigation, { IBackwardNavigation } from '../Header/BackwardNavigation';

import { IDarkTheme } from '../../global';

export interface IHeaderTemplate extends IBackwardNavigation, IDarkTheme {
  headline: string;
}

export const HeaderTemplate: ParentComponent<IHeaderTemplate> = ({ children, isDark = false }) => {
  return (
    <main class="flex justify-center content-full" classList={{ layer: isDark }}>
      <div class="panel content-full flex col app" id="app">
        {children}
      </div>
    </main>
  );
};

const PageDecorator: ParentComponent<IHeaderTemplate> = ({
  children,
  headline,
  subtitle,
  isDark = false
}) => {
  return (
    <HeaderTemplate headline={headline} subtitle={subtitle} isDark={isDark}>
      <BackwardNavigation subtitle={headline} />

      <h2 class="info card-sub">{subtitle}</h2>

      {children}
    </HeaderTemplate>
  );
};

export default PageDecorator;
