import type { ParentComponent } from 'solid-js';

import './SuperEllipse.css';

const SuperEllipse: ParentComponent = ({ children }) => {
  return (
    <span class='superellipse flex items-center justify-center'>
      {children}
    </span>
  );
};

export default SuperEllipse;
