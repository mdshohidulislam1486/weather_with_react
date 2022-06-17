import React from 'react';
import {  fireEvent, render, screen,  } from '@testing-library/react';
import Home from './Home'
import printName from './Home'
import handleSearch from './Home'
import Country from '../Country';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';





test('get the home page on call', () => {
  render(<Home />);
  const initTest = screen.getAllByText(/We made it easy for you to know more about your favorite countries!!!/i)[0] as HTMLAnchorElement;
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
 
  test('On Click get country data from api', async ()=> {
  
    render(<Home/>);
    const submitButton = screen.getAllByRole('button')[0] as HTMLAnchorElement
    const conutnryInput = screen.getByPlaceholderText(/Enter Country/i) as HTMLInputElement;
    const testValue = 'bd' 
    fireEvent.change(conutnryInput, {target: {value: testValue}})
    userEvent.click(submitButton)
    expect(submitButton).toBeEnabled();
    expect(submitButton).toBeEnabled();
  })


 describe('Home button api call and testing library', () => {
  test('On clikc when the input is wrong show no data found', async() => {
    render(<Home />); 
    const submitButton = screen.getByRole('button')
    const conutnryInput = screen.getByPlaceholderText(/Enter Country/i) as HTMLInputElement;
    const testValue = 'wronginput' 
    fireEvent.change(conutnryInput, {target: {value: testValue}})
    userEvent.click(submitButton);
    const capitalWeather = await screen.findByText(/No data found!!/i)
    expect(capitalWeather).toBeInTheDocument()
    expect(submitButton).toBeEnabled();
    
  });
}); 
