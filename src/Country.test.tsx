import React from 'react';
import {  findByAltText, fireEvent, render, screen,  } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Home from './Home/Home';
import Country from './Country';


describe('find the country details', () => {
  render(<Home/>)
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
  test('get country data', async() =>{
     const capitalName = await screen.findByText(/Dhaka/i)
     expect(capitalName).toBeInTheDocument()
  })
  }); 