import React from 'react';

const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className='login_btn' onClick={props.clickhandler}>
      {props.children}
    </button>
  );
});

export default FancyButton;
