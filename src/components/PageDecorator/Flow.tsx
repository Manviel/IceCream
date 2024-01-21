import { ParentComponent, onMount, onCleanup } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import ArrowUpIcon from '../../assets/icons/arrow-up.svg';

import { ShapeIcon } from '../../models/theme';

import ConnectFactory from '../Link/ConnectFactory';

import { HeaderTemplate, HeaderTemplateType } from '.';

import './Flow.css';

const Flow: ParentComponent<HeaderTemplateType> = ({
  children,
  headline,
  subtitle,
  isDark = false,
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
      <div class='flex justify-between items-center depth flow panel'>
        <button
          class={ShapeIcon.Default}
          aria-label='Go Back'
          onClick={handleGoBack}
        >
          <ArrowUpIcon />
        </button>

        <h1 class='card-sub'>{subtitle}</h1>

        <ConnectFactory href='https://finviz.com/' text={headline} />
      </div>

      {children}
    </HeaderTemplate>
  );
};

export default Flow;
