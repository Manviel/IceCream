import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import { Paths } from '../../../models';
import { ShapeIcon } from '../../../models/config';

import DialogFacade from '../../../components/DialogContent/DialogFacade';

import TrayIcon from '../../../assets/icons/tray.svg';

const Inbox: Component = () => {
  return (
    <DialogFacade
      title='Abstract'
      description='This helps the user to focus on what the object does, rather than how it performs.'
      closingName='Close'
      triggerContent={
        <>
          <h3 class='widget-title'>Inbox</h3>
          <h4 class='widget-main conditions'>1</h4>

          <div class={ShapeIcon}>
            <TrayIcon />
          </div>
        </>
      }
      triggerClassName='view layer rounded flex col items-start'
    >
      <Link href={Paths.Privacy} class='btn content-full dialog-action'>
        Go to Policy
      </Link>
    </DialogFacade>
  );
};

export default Inbox;
