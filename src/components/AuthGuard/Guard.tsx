import { createResource, Component, Show } from 'solid-js';
import { Navigate, RouteSectionProps } from '@solidjs/router';

import { Paths } from '../../global';
import { checkAuthStatus } from '../../services/db';

const Guard: Component<RouteSectionProps> = props => {
  const [isAuthed] = createResource(checkAuthStatus);

  return (
    <Show when={!isAuthed.loading}>
      {isAuthed() ? props.children : <Navigate href={Paths.Forbidden} />}
    </Show>
  );
};

export default Guard;
