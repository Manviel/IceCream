import { Component, createSignal, onCleanup } from 'solid-js';

import VideoIcon from '../../../assets/icons/video.svg';
import StopCircleIcon from '../../../assets/icons/stop-circle.svg';

import { ShapeIcon } from '../../../models/theme';

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
  const [status, setStatus] = createSignal('');

  let video: HTMLVideoElement;
  let interval: any;

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
      setStatus('');
    } catch (err: any) {
      setStatus(err.message);
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

      {status() && (
        <div class='depth view rounded stream-status' role='alert'>
          {status()}
        </div>
      )}
    </section>
  );
};

export default FaceTime;
