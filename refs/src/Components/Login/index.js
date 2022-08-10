import React from 'react';
import { useRef, useEffect } from 'react';
import FancyButton from './FancyButton';
import './styles.css';

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const ref = React.createRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const onSubmitHandler = () => {
    console.log(usernameRef.current.value, passwordRef.current.value);
    console.log(ref.current);
  };

  return (
    <div className='login_form'>
      <div>
        <h2 className='text_heading'>LOGIN</h2>
      </div>

      <div className='textfield'>
        <input type='text' placeholder='username' ref={usernameRef} />
      </div>
      <div className='textfield'>
        <input type='password' placeholder='password' ref={passwordRef} />
      </div>
      <div className='login_form_subs_1'>
        <div className=''>
          <input type='checkbox' />
          <span>Remember me</span>
        </div>
        <a href='/'>Forgot?</a>
      </div>
      <div style={{ width: '100%' }}>
        <FancyButton ref={ref} clickhandler={onSubmitHandler}>
          LOGIN
        </FancyButton>
      </div>
    </div>
  );
};

export default Login;
