import React from 'react'
import App from './App';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home/Home';
import Weather from './Weather';

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
/* 
test('renders the component with params', () => {
  // you'll have to declare the path prop in the component, exactly like the route
  renderWithRouterWrapper(<Weather path="/weather/:id" />, {
    // and pass the parameter value on the route config
    route: '/weather/dhaka',
  })
})

function renderWithRouterWrapper(arg0: JSX.Element, arg1: {
  // and pass the parameter value on the route config
  route: string;
}) {
  throw new Error('Function not implemented.');
}
 */