import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const initTest = screen.getByText(/Country Detail/i);
  expect(initTest).toBeInTheDocument();
});



