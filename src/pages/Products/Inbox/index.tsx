import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import TrayIcon from '../../../assets/icons/tray.svg';

import DialogFacade from '../DialogContent/DialogFacade';

const Inbox: Component = () => {
  return (
    <DialogFacade
      title='Payment successful'
      description='You can read more on our payment policy'
      closingName='Close'
      triggerContent={
        <>
          <h3 class='widget-title'>Inbox</h3>
          <p class='widget-main conditions'>1</p>

          <div class='widget-group'>
            <TrayIcon />
          </div>
        </>
      }
      triggerClassName='view layer rounded flex col'
    >
      <Link href='/privacy' class='btn content-full dialog-action'>
        Go to Policy
      </Link>
    </DialogFacade>
  );
};

export default Inbox;
