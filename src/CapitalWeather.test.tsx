import React from 'react';
import { render, screen } from '@testing-library/react';
import CapitalWeather from './CapitalWeather';


test('find a line in the documents', () => {
    render(<CapitalWeather/>);
    const findData = screen.getByText(/Precipitation/i);
  
    expect(findData).toBeInTheDocument();
  });


  
