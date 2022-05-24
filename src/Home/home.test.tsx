import React from 'react';
import { fireEvent, render, screen,  } from '@testing-library/react';
import Home from './Home'



test('renders learn react link', () => {
  render(<Home />);
  const initTest = screen.getByText(/We made it easy for you to know more about your favorite countries!!!/i);
  expect(initTest).toBeInTheDocument();
});
 

  test('find the submit button', () => {
    render(<Home />);
    const input = screen.getByText(/Submit/i);
  
    expect(input).toBeInTheDocument();
  });


  test('Get the serch country text in the input', () => {
    render(<Home/>); 
    const conutnryInput = screen.getByPlaceholderText(/Search your favorite country/i);
    expect(conutnryInput).toBeInTheDocument()
  } )

  test('Get the serch country input text and its changing value', () => {
    render(<Home/>); 
    const conutnryInput = screen.getByPlaceholderText(/Search your favorite country/i) as HTMLInputElement;
    const testValue = 'test'
    fireEvent.change(conutnryInput, {target:{value:testValue}})
    expect(conutnryInput.value).toBe(testValue) 
  } )

  test('Button should be disabled before typing anything', ()=> {
    render(<Home/>);
    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeDisabled();
  })
  test('First we will load the data', ()=> {
    render(<Home/>);
    const submitButton = screen.getByRole('button')
    expect(submitButton).not.toHaveTextContent(/Loding/i)
  })

 
  test('Button will be enabled as soon as we start writing country name', ()=> {
    render(<Home/>);
    const submitButton = screen.getByRole('button')
    const conutnryInput = screen.getByPlaceholderText(/Search your favorite country/i) as HTMLInputElement;
    const testValue = 'test'
    fireEvent.change(conutnryInput, {target: {value: testValue}})
    expect(submitButton).toBeEnabled();
  })
 


  
