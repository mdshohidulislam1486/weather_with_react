import React from 'react';
import { render, screen} from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const initTest = screen.getByText(/Country Detail/i);
  expect(initTest).toBeInTheDocument();
});

/* global.fetch = jest.fn(()=> Promise.resolve({
  json:() => Promise.resolve([{
    name:'Bangladesh', population:6000233, value:'Bangladesh',
    status: 400,
    success: false, error: 'Something bad happened'
    }])
}) )as jest.Mock */
