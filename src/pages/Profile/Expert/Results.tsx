import { Component, createSignal } from 'solid-js';
import { deleteDB } from 'idb';

import BellIcon from '../../../assets/icons/bell.svg';

import { ActionTypes } from '../../../models/config';
import { ShapeIcon } from '../../../models/theme';
import { DB_NAME } from '../../../services/db';

import DialogFacade from '../../../components/DialogContent/DialogFacade';
import HelpTooltip from '../../../components/Tooltip/HelpTooltip';
import Tooltip from '../../../components/Tooltip';

const INIT_HELP = 'Are you sure?';
const ID_HELP = 'confirm-tooltip';

const Results: Component = () => {
  const [snackbar, setSnackbar] = createSignal<string>(INIT_HELP);

  const handleResetTooltip = () => setSnackbar(INIT_HELP);

  const handleSubmit = async () => {
    await deleteDB(DB_NAME);

    setSnackbar('Done. Please reload the page');
  };

  return (
    <DialogFacade
      title='Event loop'
      description='JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading.'
      closingName='Continue'
      triggerContent={
        <HelpTooltip name='Results' id='event-loop-results'>
          <BellIcon />
        </HelpTooltip>
      }
      triggerClassName={ShapeIcon.Default}
    >
      <section class='scrollable' tabIndex={0}>
        <p class='info'>
          The call stack is responsible for keeping track of all the operations
          in line to be executed. Whenever a function is finished, it is popped
          from the stack.
        </p>
        <p class='info'>
          The event queue is responsible for sending new functions to the stack
          for processing. It follows the queue data structure to maintain the
          correct sequence in which all operations should be sent for execution.
        </p>
        <p class='info'>
          Whenever an async function is called, it is sent to a browser API.
          These are APIs built into the browser. Based on the command received
          from the call stack, the API starts its own single-threaded operation.
          An example of this is the setTimeout method. When a setTimeout
          operation is processed in the stack, it is sent to the corresponding
          API which waits till the specified time to send this operation back in
          for processing.
        </p>
        <p class='info'>
          Where does it send the operation? The event queue. Hence, we have a
          cyclic system for running async operations in JavaScript. The language
          itself is single-threaded, but the browser APIs act as separate
          threads. The event loop facilitates this process; it constantly checks
          whether or not the call stack is empty. If it is empty, new functions
          are added from the event queue. If it is not, then the current
          function call is processed.
        </p>
      </section>

      <Tooltip
        id={ID_HELP}
        name='Clean'
        onClose={handleResetTooltip}
        snackbar={snackbar}
        className={ActionTypes.Danger}
        onClick={handleSubmit}
      >
        Drop database
      </Tooltip>
    </DialogFacade>
  );
};

export default Results;
