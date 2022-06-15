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

/*  test('Mock my home api call', ()=>{
  // eslint-disable-next-line jest/valid-expect-in-promise
  printName().then((name: any) => { 
    expect(name).toBe('Bangladesh')
  }) 
 }) 
  */
 
/*  describe("<Country/>",  () =>{
  
  const country =  {name:'Bangladesh', flag:'https:/webapp.png', lng:"lng"}
  const {queryByText} = render(<BrowserRouter><Country cName={country.name} flags={country.flag}/></BrowserRouter>)
  
  render(<Home/>) 
  
   
    const {result}:any = render(<Home/>)
    act(() =>{
     result.current.handelSearch()
    })

   expect(handleSearch).toBeCalledTimes(1) 
 

 }) 
 */
 interface Props{
  name: string;
  email: string;
}


 describe('Home button api call and testing library', () => {
  test('On clikc when the input is wrong show no data found', async() => {
    render(<Home />);
    const submitButton = screen.getByRole('button')
    const conutnryInput = screen.getByPlaceholderText(/Enter Country/i) as HTMLInputElement;
    const testValue = 'wronginput' 

    // eslint-disable-next-line testing-library/no-unnecessary-act

    fireEvent.change(conutnryInput, {target: {value: testValue}})
    userEvent.click(submitButton);


    const capitalWeather = await screen.findByText(/No data found!!/i)
    expect(capitalWeather).toBeInTheDocument()
  

    expect(submitButton).toBeEnabled();
    
  });



}); 
