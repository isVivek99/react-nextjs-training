import React from 'react';
import './styles.scss';

interface ButtonProps {
  title: string;
  titleSize: string;
}

const Button = ({ title, titleSize }: ButtonProps) => {
  return (
    <div>
      <button className={`common_btn bold ${titleSize}`}>{title}</button>
    </div>
  );
};

export default Button;
