import { mergeProps, ParentComponent } from 'solid-js';

import BackwardNavigation, { IBackwardNavigation } from '../Header/BackwardNavigation';

import { IDarkTheme } from '../../global';

export interface IHeaderTemplate extends IBackwardNavigation, IDarkTheme {
  headline: string;
}

export const HeaderTemplate: ParentComponent<IHeaderTemplate> = _props => {
  const props = mergeProps({ isDark: false }, _props);

  return (
    <main class="flex justify-center content-full" classList={{ layer: props.isDark }}>
      <div class="panel content-full flex col app" id="app">
        {props.children}
      </div>
    </main>
  );
};

const PageDecorator: ParentComponent<IHeaderTemplate> = _props => {
  const props = mergeProps({ isDark: false }, _props);

  return (
    <HeaderTemplate headline={props.headline} subtitle={props.subtitle} isDark={props.isDark}>
      <BackwardNavigation subtitle={props.headline} />

      <h2 class="info card-sub">{props.subtitle}</h2>

      {props.children}
    </HeaderTemplate>
  );
};

export default PageDecorator;
