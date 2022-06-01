import React from 'react';
import { fireEvent, render, screen,  } from '@testing-library/react';
import Home from './Home'
const {loadName} = require('./Home')



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


  test('Get the country text in the input', () => {
    render(<Home/>); 
    const conutnryInput = screen.getByPlaceholderText(/Enter Country/i);
    expect(conutnryInput).toBeInTheDocument()
  } )


  test('Get the serch country input text and its changing value', () => {
    render(<Home/>); 
    const conutnryInput = screen.getByPlaceholderText(/Enter Country/i) as HTMLInputElement;
    const testValue = 'test'
    fireEvent.change(conutnryInput, {target:{value:testValue}})
    expect(conutnryInput.value).toBe(testValue) 
  } )

  test('Button should be disabled before typing anything', ()=> {
    render(<Home/>);
    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeDisabled();
  })

  test('Button will be enabled as soon as we start writing country name', ()=> {
    render(<Home/>);
    const submitButton = screen.getByRole('button')
    const conutnryInput = screen.getByPlaceholderText(/Enter Country/i) as HTMLInputElement;
    const testValue = 'test'
    fireEvent.change(conutnryInput, {target: {value: testValue}})
    expect(submitButton).toBeEnabled();
  })
 
  test('Make a mock call and get all data', ()=> {
    render(<Home/>);
    const submitButton = screen.getByRole('button')
    const conutnryInput = screen.getByPlaceholderText(/Enter Country/i) as HTMLInputElement;
    const testValue = 'Bangladesh'
    submitButton.click()
    fireEvent.change(conutnryInput, {target: {value: testValue}})
    expect(submitButton).toBeEnabled();
  })
 

 test('Mock my home api call', ()=>{
  // eslint-disable-next-line jest/valid-expect-in-promise
  loadName().then((name: any) => { 
    expect(name).tobe('Bangladesh')
  })
 }) 