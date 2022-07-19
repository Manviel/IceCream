import type { Component } from 'solid-js';

import Header from '.';
import BackwardNavigation, {
  BackwardNavigationType,
} from './BackwardNavigation';

interface HeaderTemplateType extends BackwardNavigationType {
  headline: string;
}

const HeaderTemplate: Component<HeaderTemplateType> = ({
  headline,
  subtitle,
  hideBackward,
}) => (
  <>
    <BackwardNavigation subtitle={subtitle} hideBackward={hideBackward} />

    <Header spot={headline} />
  </>
);

export default HeaderTemplate;
