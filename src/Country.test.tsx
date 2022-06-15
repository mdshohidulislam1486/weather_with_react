import React from 'react';
import {  fireEvent, render, screen,  } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Home from './Home/Home';


test('Make a mock call and get all data', ()=> {
  
    
    render(<Home/>);
    const submitButton = screen.getAllByRole('button')[0] as HTMLAnchorElement
    const conutnryInput = screen.getByPlaceholderText(/Enter Country/i) as HTMLInputElement;
    const testValue = 'Bangladesh' 
    submitButton.click()
    fireEvent.change(conutnryInput, {target: {value: testValue}})
   
    expect(submitButton).toBeEnabled();
    expect(submitButton).toBeEnabled();
    
    
  
  })  