import React from 'react';
import { render, screen } from '@testing-library/react';
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

  it("get country from  api", async ()=> {
    const fetchAny = fetch as any
    fetchAny.mockResponseOnce(JSON.stringify({data}))

    
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://restcountries.com/v3.1/name/bangladesh`
    );
  });
  
  
function data(data: any[]): any {
  throw new Error('Function not implemented.');
}
