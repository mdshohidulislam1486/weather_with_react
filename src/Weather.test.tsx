import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from './Weather';
import { BrowserRouter as Router } from 'react-router-dom';

 test('find the line in the documents', () => {
    render(<Router><Weather/></Router>); 
    const findData = screen.getByText(/Know More about todays Weather/i);
    expect(findData).toBeInTheDocument();
  });


 
  test('find the home button', ()=>{
      render(<Router><Weather/></Router>);
      const findButton = screen.getByRole('button')
      expect(findButton).toBeInTheDocument() 
  })   
 