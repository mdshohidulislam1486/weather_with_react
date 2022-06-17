import React from 'react';
import {  fireEvent, render, screen,  } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Home from './Home/Home';
import Country from './Country';


describe('<Country/>', () => {
  render(<Home/>)
  const submitButton = screen.getAllByRole('button')[0] as HTMLAnchorElement
  const testValue = 'bd' 
  const conutnryInput = screen.getByPlaceholderText(/Enter Country/i) as HTMLInputElement;
 

  const handleSubmit =  jest.fn();
  const country = {
    name:'Banglades',
    capital:'Dhaka',
    population:164689383,
    latlng:[],
    flags:'https://flagcdn.com/w320/bd.png'
    
  }
  const {queryByText }:any =  render(<BrowserRouter>
    <Country cName={country.name} population={country.population} capital={country.capital} latlng={country.latlng} flags={country.flags}/>
  </BrowserRouter>)
  
   fireEvent.change(conutnryInput, {target: {value: testValue}})
   userEvent.click(submitButton)

   const capitalName = screen.queryByText(/Dhaka/i)
   expect(capitalName).toBeInTheDocument()
  
  });