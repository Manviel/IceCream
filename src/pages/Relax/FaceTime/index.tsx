import { Component, createSignal, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';
import { Toast, toaster } from '@kobalte/core';

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

const FaceTime: Component = () => {
  const [streamStarted, setStreamStarted] = createSignal(false);

  let video: HTMLVideoElement;
  let interval: any;

  const showToast = ({ title, description }: SegregationType) => {
    toaster.show((props) => (
      <Toast.Root toastId={props.toastId} class='depth view rounded'>
        <div class='toast__content'>
          <Toast.Title class='toast__title'>{title}</Toast.Title>
          <Toast.Description class='toast__description'>
            {description}
          </Toast.Description>

          <Toast.CloseButton class={ShapeIcon.Default}>
            <CloseIcon />
          </Toast.CloseButton>
        </div>
        <Toast.ProgressTrack class='toast__progress-track'>
          <Toast.ProgressFill class='toast__progress-fill' />
        </Toast.ProgressTrack>
      </Toast.Root>
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
      showToast({ title: 'Error', description: err.message });
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
    <section class='layer view rounded flex col items-center face-time provision'>
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

      <Portal>
        <Toast.Region>
          <Toast.List class='toast-list' />
        </Toast.Region>
      </Portal>
    </section>
  );
};

export default FaceTime;
