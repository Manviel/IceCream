import { Component } from 'solid-js';
import { A } from '@solidjs/router';

import { Paths } from '../../../models';
import { ActionTypes } from '../../../models/config';
import { ShapeIcon } from '../../../models/theme';

import DialogFacade from '../../../components/DialogContent/DialogFacade';

import TrayIcon from '../../../assets/icons/tray.svg';

import { useChartSource } from '../Charts/Context';

import { average } from '../../../services/utils';

const source = {
  '04.10.2021': 30436,
  '08.11.2021': 28683,
  '03.10.2022': 40741,
  '07.11.2022': 36975,
  '01.10.2023': 38250,
  '23.10.2023': 36624,
};

const Inbox: Component = () => {
  const { datasets } = useChartSource(source);

  return (
    <DialogFacade
      title='Abstract'
      description='This helps the user to focus on what the object does, rather than how it performs.'
      closingName='Go back'
      triggerContent={
        <>
          <h3 class='card-sub'>Inbox</h3>
          <h4 class='flex card-text'>1</h4>

          <div role='img' aria-label='View details' class={ShapeIcon.Default}>
            <TrayIcon />
          </div>
        </>
      }
      triggerClassName='view card rounded flex col items-start justify-between widget-title'
    >
      <p class='info'>
        Average price of a base iPhone is {average(datasets).toFixed(2)} UAH.
      </p>

      <A href={Paths.Privacy} class={ActionTypes.Contained}>
        Go to Policy
      </A>
    </DialogFacade>
  );
};

export default Inbox;
