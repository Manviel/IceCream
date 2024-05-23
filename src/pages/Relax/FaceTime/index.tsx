import { Component, createSignal, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';
import { Toast, toaster } from '@kobalte/core/toast';

import VideoIcon from '../../../assets/icons/video.svg';
import StopCircleIcon from '../../../assets/icons/stop-circle.svg';
import CloseIcon from '../../../assets/icons/close.svg';

import { ShapeIcon } from '../../../models/theme';
import { SegregationType } from '../../../models';

import { StopWatch, setTimer } from './StopWatch';

import './FaceTime.css';

const constraints = {
  video: {
    width: { min: 800, ideal: 1920, max: 2560 },
    height: { min: 600, ideal: 1080, max: 1440 },
  },
};

const Notification = ({ title, description }: SegregationType) => (
  <>
    <div class='flex col items-center'>
      <Toast.CloseButton class={ShapeIcon.Default}>
        <CloseIcon />
      </Toast.CloseButton>

      <Toast.Title class='subtitle card-header'>{title}</Toast.Title>
      <Toast.Description>{description}</Toast.Description>
    </div>
    <Toast.ProgressTrack class='toast content-full toast__progress-track'>
      <Toast.ProgressFill class='toast toast__progress-fill vibrancy' />
    </Toast.ProgressTrack>
  </>
);

const FaceTime: Component = () => {
  const [streamStarted, setStreamStarted] = createSignal(false);

  let video: HTMLVideoElement;
  let interval: any;

  const showToast = ({ title, description }: SegregationType) => {
    toaster.show((props) => (
      <Toast toastId={props.toastId} class='depth view toast'>
        <Notification title={title} description={description} />
      </Toast>
    ));
  };

  const handleWatchStop = () => {
    setTimer('isRunning', false);
    setTimer('end', new Date());

    clearInterval(interval);
  };

  const handleWatchStart = () => {
    setTimer('start', new Date());
    setTimer('isRunning', true);

    interval = setInterval(() => {
      setTimer('end', new Date());
    }, 10);
  };

  const handleStream = (stream: MediaStream) => {
    video.srcObject = stream;

    setStreamStarted(true);
    handleWatchStart();
  };

  const startStream = async (constraints: MediaStreamConstraints) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      handleStream(stream);
    } catch (err: any) {
      showToast({ title: err.name, description: err.message });
    }
  };

  const handlePlay = () => {
    if (streamStarted()) {
      video.play();

      return;
    }

    startStream(constraints);
  };

  const pauseStream = () => {
    video.pause();

    setStreamStarted(false);
    handleWatchStop();
  };

  onCleanup(() => {
    pauseStream();
  });

  return (
    <section class='layer os grid room items-start flex-wrap provision'>
      <div class='face-time content-full'>
        <video
          autoplay
          class='vibrancy rounded'
          ref={video!}
          aria-label='Face time'
        ></video>

        <StopWatch />

        <nav
          class='vibrancy stream-controls view flex rounded gap'
          aria-label='Video controls'
        >
          <button
            type='button'
            class={ShapeIcon.Dark}
            onClick={handlePlay}
            aria-disabled={streamStarted()}
            aria-label='Start stream'
          >
            <VideoIcon />
          </button>

          <button
            type='button'
            class={ShapeIcon.Danger}
            onClick={pauseStream}
            aria-disabled={!streamStarted()}
            aria-label='End stream'
          >
            <StopCircleIcon />
          </button>
        </nav>
      </div>

      <aside class='youtube flex content-full'>
        <iframe
          src='https://www.youtube.com/embed/evkIu2e5g1M?si=cVBNk9XNumOTyLpz'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
          class='content-full rounded'
        ></iframe>
      </aside>

      <Portal>
        <Toast.Region>
          <Toast.List class='toast-list' />
        </Toast.Region>
      </Portal>
    </section>
  );
};

export default FaceTime;
