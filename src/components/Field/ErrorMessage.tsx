import { ParentComponent } from 'solid-js';

import ExclamationIcon from '../../assets/icons/exclamation-triangle.svg';

const ErrorMessage: ParentComponent = (props) => {
  return (
    <div class='flex items-center gap chip info alias red' role='alert'>
      <div role='img' aria-label='Error' class='touch icon'>
        <ExclamationIcon />
      </div>

      <strong>{props.children}</strong>
    </div>
  );
};

export default ErrorMessage;
