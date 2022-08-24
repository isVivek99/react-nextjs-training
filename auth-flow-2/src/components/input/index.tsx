import React from 'react';
import { emailValidationRegex } from '../../utils/validateUserForm';

interface userInfoProps {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  address?: string;
  townOrCity?: string;
  state?: string;
  zipOrPin?: string;
  password?: string;
}

interface InputEleProps {
  placeholder: string;
  label: string;
  type?: string;
  property: string;
  setUserInfo: any;
  userInfo: userInfoProps;
  errorString: string;
  padding?: string;
}

const Input = ({
  placeholder,
  label,
  type = 'text',
  property,
  userInfo,
  setUserInfo,
  errorString,
  padding = 'py-2',
}: InputEleProps) => {
  const inputEleRef = React.useRef<HTMLInputElement>(
    document.createElement('input')
  );
  const [inputError, setInputError] = React.useState(false);

  const setInput = (e: any) => {
    const { name, value } = e.target;
    console.log(userInfo);

    setUserInfo((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
    setInputError(false);
  };

  const setBlur = (e: any) => {
    const { name, value } = e.target;

    if (value.length === 0) setInputError(true);

    if (name === 'emailAddress' && !emailValidationRegex.test(value)) {
      setInputError(true);
    }

    if (name === 'phoneNumber' && (value.length > 10 || value.length < 10)) {
      setInputError(true);
    }

    if (name === 'password' && value.length < 6) setInputError(true);
  };
  return (
    <div>
      {' '}
      <div>
        <div className='input_ele px-2 input_ele__label'>
          <label htmlFor={property} className='text-600 f-12'>
            {label}
          </label>
          <input
            ref={inputEleRef}
            value={userInfo[property as keyof typeof userInfo]}
            type={type}
            className={`w-100 input_ele__content px-4 ${padding}`}
            placeholder={placeholder}
            name={property}
            onChange={(e) => setInput(e)}
            onBlur={(e) => setBlur(e)}
          />
        </div>
        <p
          className={`ms-2 text__error f-12 mb-0 mt-1 ${
            inputError ? '' : 'd-none'
          } `}
        >
          {errorString}
        </p>
      </div>
    </div>
  );
};

export default Input;
