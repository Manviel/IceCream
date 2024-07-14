import { ParentComponent, onMount, onCleanup } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import ArrowUpIcon from '../../assets/icons/arrow-up.svg';

import { ShapeIcon } from '../../global/theme';

import ConnectFactory from '../Link/ConnectFactory';

import { HeaderTemplate, HeaderTemplateType } from '.';

import './Flow.css';

const Flow: ParentComponent<HeaderTemplateType> = ({
  children,
  headline,
  subtitle,
  isDark = false
}) => {
  const navigate = useNavigate();

  onMount(() => {
    document.body.classList.add('flow-mode');
  });

  onCleanup(() => {
    document.body.classList.remove('flow-mode');
  });

  const handleGoBack = () => navigate(-1);

  return (
    <HeaderTemplate headline={headline} subtitle={subtitle} isDark={isDark}>
      <header class="flex justify-center depth flow content-full">
        <nav
          class="app flex justify-between items-center panel content-full"
          aria-label="Navigation bar"
        >
          <button
            type="button"
            class={ShapeIcon.Default}
            aria-label="Go Back"
            onClick={handleGoBack}
          >
            <ArrowUpIcon />
          </button>

          <h1 class="card-sub">{subtitle}</h1>

          <ConnectFactory href="https://finviz.com/" text={headline} />
        </nav>
      </header>

      {children}
    </HeaderTemplate>
  );
};

export default Flow;
