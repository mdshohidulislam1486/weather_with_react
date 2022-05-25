import React from 'react'
import App from './App';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home/Home';

test('renders learn react link', () => {
  render(<App />);
  const initTest = screen.getByText(/Country Detail/i);
  expect(initTest).toBeInTheDocument();
});

test('full app rendering/navigating', () => {
  render(<App />)
 
  // verify page content for expected route
  expect(screen.getByText(/Country Detail/i)).toBeInTheDocument()
})
test('rendering home page', () => {
  render(<Home />)
  // verify page content for expected route
  expect(screen.getByText(/Country Detail/i)).toBeInTheDocument()
})


