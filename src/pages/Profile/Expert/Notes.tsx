import { Component } from 'solid-js';

import { ActionTypes } from '../../../models/config';

import DialogFacade from '../../../components/DialogContent/DialogFacade';
import ConnectFactory from '../../../components/ConnectFactory';

const SheetContent = `The Event Loop has one simple job — to monitor the Call Stack and the
Callback Queue. If the Call Stack is empty, the Event Loop will take the
first event from the queue and will push it to the Call Stack, which
effectively runs it.`;

const Notes: Component = () => {
  const toggleActionSheet = () => {
    const main = document.getElementById('app');

    main?.classList.toggle('bottom-main');
  };

  return (
    <DialogFacade
      title='Notes'
      description={SheetContent}
      closingName='Understand'
      triggerContent='Notes'
      triggerClassName={ActionTypes.Secondary}
      parentClassName='bottom-sheet view card'
      childClassName='flex col'
      toggleActionSheet={toggleActionSheet}
    >
      <div class='flex col gap'>
        <ConnectFactory
          href='https://finviz.com/'
          text='Finviz Stock screener'
        />
        <ConnectFactory
          href='https://www.w3.org/WAI/business-case/'
          text='Business case for Accessibility'
        />
        <ConnectFactory
          href='https://www.appcues.com/blog/saas-growth-metrics'
          text='Business metrics that matter'
        />
      </div>
    </DialogFacade>
  );
};

export default Notes;
