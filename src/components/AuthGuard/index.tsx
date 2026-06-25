import { Component, createResource, Show } from 'solid-js';
import { Navigate, RouteSectionProps } from '@solidjs/router';

import { checkAuthStatus } from '../../services/db';
import { Paths } from '../../global';

const AuthGuard: Component<RouteSectionProps> = (props) => {
  const [isAuthed] = createResource(checkAuthStatus);

  return (
    <Show when={!isAuthed.loading}>
      {isAuthed() ? (
        <Navigate href={Paths.Relax} />
      ) : (
        props.children
      )}
    </Show>
  );
};

export default AuthGuard;
