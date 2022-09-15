import React from 'react';
import ReactDOM from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import Home from './index';

it('renders w/ crashing', () => {
  const div = document.createElement('div');
  ReactDOM.createRoot(div).render(<Home />);
});

it('renders component correctly', () => {});
