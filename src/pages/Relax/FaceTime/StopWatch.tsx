import { createStore } from 'solid-js/store';

type TimerType = {
  start?: Date;
  end?: Date;
  isRunning: boolean;
  elapsed?: Date;
};

export const [timer, setTimer] = createStore<TimerType>({
  start: undefined,
  end: undefined,
  elapsed: undefined,
  isRunning: false
});

const elapsedTimeDate = (): Date => {
  if (timer.start && timer.end) {
    return new Date(timer.end?.getTime() - timer.start?.getTime());
  }

  return new Date(0);
};

const timeFormatter = new Intl.DateTimeFormat(navigator.language, {
  minute: 'numeric',
  second: '2-digit'
});

export const StopWatch = () => (
  <div class="vibrancy stop-watch flex os" role="timer">
    <p class="concise">{timeFormatter.format(elapsedTimeDate())}</p>
  </div>
);
