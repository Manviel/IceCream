import type { Component } from 'solid-js';
import { Link } from '@solidjs/router';

const Notification: Component = () => (
  <section class='notification'>
    <Link href='/profile' class='snackbar'>
      <h2 class='snackbar-title'>Achievement Unlocked</h2>
      <p class='snackbar-desc' role='alert'>
        Text copied to clipboard
      </p>
    </Link>
  </section>
);

export default Notification;
