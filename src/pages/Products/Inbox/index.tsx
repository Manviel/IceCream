import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import { Paths } from '../../../models';
import { ActionTypes } from '../../../models/config';

import DialogFacade from '../../../components/DialogContent/DialogFacade';

import TrayIcon from '../../../assets/icons/tray.svg';

const Inbox: Component = () => {
  return (
    <DialogFacade
      title='Abstract'
      description='This helps the user to focus on what the object does, rather than how it performs.'
      closingName='Cancel'
      triggerContent={
        <>
          <h3 class='widget-title card-sub'>Inbox</h3>
          <h4 class='widget-main provision'>1</h4>

          <div class={ActionTypes.ShapeIcon}>
            <TrayIcon />
          </div>
        </>
      }
      triggerClassName='view card rounded flex col items-start justify-between'
    >
      <Link href={Paths.Privacy} class={ActionTypes.Secondary}>
        Go to Policy
      </Link>
    </DialogFacade>
  );
};

export default Inbox;
