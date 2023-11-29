import { onMount, ParentComponent, Show } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import { Paths } from '../../models';
import { useAuthorization } from '../../services/db';

const Guard: ParentComponent = ({ children }) => {
  const navigate = useNavigate();

  const { isAuthed, verifyStorage } = useAuthorization();

  onMount(async () => {
    await verifyStorage();

    if (!isAuthed()) {
      navigate(Paths.Forbidden, { replace: true });
    }
  });

  return <Show when={isAuthed()}>{children}</Show>;
};

export default Guard;
