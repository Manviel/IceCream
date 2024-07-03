import { mergeProps } from 'solid-js';
import { createStore } from 'solid-js/store';

export type TimerType = {
  start?: Date;
  end?: Date;
  isRunning: boolean;
  elapsed?: Date;
};

export interface StopWatchInterface {
  options?: Intl.DateTimeFormatOptions;
  locales?: string | string[];
}

export const [timer, setTimer] = createStore<TimerType>({
  start: undefined,
  end: undefined,
  elapsed: undefined,
  isRunning: false,
});

export const elapsedTimeDate = (): Date => {
  if (timer.start && timer.end) {
    return new Date(timer.end?.getTime() - timer.start?.getTime());
  }

  return new Date(0);
};

export const elapsedTimeString = () => {
  return (
    `${String(elapsedTimeDate()?.getMinutes() || 0).padStart(2, '0')}:` +
    `${String(elapsedTimeDate()?.getSeconds() || 0).padStart(2, '0')}:`
  );
};

export const StopWatch = (exposedProps: StopWatchInterface) => {
  const props = mergeProps<[StopWatchInterface, StopWatchInterface]>(
    {
      options: {
        minute: 'numeric',
        second: '2-digit',
      },
    },
    exposedProps
  );

  const formatter = new Intl.DateTimeFormat(props.locales, props.options);

  return (
    <div class='vibrancy stop-watch flex os' role='timer'>
      <p class='concise'>{formatter.format(elapsedTimeDate())}</p>
    </div>
  );
};
