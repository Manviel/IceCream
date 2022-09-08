import type { Component } from 'solid-js';
import { Link } from '@solidjs/router';

const Notification: Component = () => (
  <Link href='/profile' class='notification box'>
    <p class='snackbar-title grey'>Achievement Unlocked</p>
    <p class='snackbar-desc' role='alert'>
      Text copied to clipboard
    </p>
  </Link>
);

export default Notification;
