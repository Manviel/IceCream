import { onMount, ParentComponent } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import { Paths } from '../../models';
import { DB_LOGS_TABLE, useDataBase } from '../../services/db';

const Guard: ParentComponent = ({ children }) => {
  const navigate = useNavigate();

  onMount(async () => {
    const db = await useDataBase();

    const response = await db.get(DB_LOGS_TABLE, 'true');

    if (!response) {
      navigate(Paths.Forbidden, { replace: true });
    }

    db.close();
  });

  return children;
};

export default Guard;
