import React from 'react';
import './styles.scss';
const Input = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [showInput, setShowInput] = React.useState(false);

  const handleCloseInput = () => {
    setShowInput(!showInput);
    setInputValue('');
  };

  return (
    <div className='position-relative  searchbox-parent'>
      <input
        type='text'
        className='input'
        aria-labelledby='Search input'
        autoCapitalize='none'
        placeholder='Search'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {!showInput ? (
        <div
          className='position-absolute searchbox searchbox-enter'
          role='button'
          tabIndex={0}
          onClick={() => setShowInput(!showInput)}
        >
          <i className='fas fa-magnifying-glass me-2'></i>
          <span className=''> Search</span>
        </div>
      ) : (
        <div
          className='position-absolute searchbox searchbox-close'
          onClick={handleCloseInput}
        >
          <i className='fas fa-circle-xmark'></i>
        </div>
      )}
    </div>
  );
};

export default Input;
