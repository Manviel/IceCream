import { Component, createSignal } from 'solid-js';

import VideoIcon from '../../../assets/icons/video.svg';
import StopCircleIcon from '../../../assets/icons/stop-circle.svg';

import { ShapeIcon } from '../../../models/theme';

import './FaceTime.css';

// https://stackblitz.com/edit/vitejs-vite-cyvcgd?file=src%2Fcomponents%2FStopWatch.tsx
// https://www.apple.com/apple-fitness-plus/
const constraints = {
  video: {
    width: { min: 800, ideal: 1920, max: 2560 },
    height: { min: 600, ideal: 1080, max: 1440 },
  },
};

const FaceTime: Component = () => {
  const [streamStarted, setStreamStarted] = createSignal(false);

  let video: HTMLVideoElement;

  const handleStream = (stream: MediaStream) => {
    video.srcObject = stream;

    setStreamStarted(true);
  };

  const startStream = async (constraints: MediaStreamConstraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    handleStream(stream);
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
  };

  return (
    <section class='layer view rounded flex col items-center face-time screen'>
      <video
        autoplay
        class='rounded'
        ref={video!}
        aria-label='Face time'
      ></video>

      <nav
        class='stream-controls view flex rounded gap'
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
    </section>
  );
};

export default FaceTime;
