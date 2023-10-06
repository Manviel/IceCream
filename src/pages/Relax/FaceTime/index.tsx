import { Component, createSignal } from 'solid-js';

import './FaceTime.css';

const constraints = {
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440,
    },
  },
};

// https://codepen.io/chrisbeast/pen/ebYwpX
const FaceTime: Component = () => {
  const [streamStarted, setStreamStarted] = createSignal();

  return (
    <section class='layer view rounded flex col items-center face-time screen'>
      <div class='video-options'>
        <select name='' id='' class='custom-select'>
          <option value=''>Select camera</option>
        </select>
      </div>

      <video autoplay class='rounded'></video>
      <canvas class='d-none'></canvas>

      <img class='screenshot-image rounded' alt='Face time' />

      <nav class='controls view flex rounded'>
        <button class='btn btn-danger play'>Play</button>
        <button class='btn btn-info pause d-none'>Pause</button>
        <button class='btn btn-outline-success screenshot d-none'>
          ScreenShot
        </button>
      </nav>
    </section>
  );
};

export default FaceTime;
