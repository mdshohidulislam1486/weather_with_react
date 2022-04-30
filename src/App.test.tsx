import React from 'react';
import { act, render, screen, cleanup, fireEvent, waitFor} from '@testing-library/react';
import App from './App';
import AxiosMock from 'axios'
import { url } from 'inspector';
import {setupServer} from 'msw/node'
import { rest } from 'msw';
import Home from './Home/Home';
import Country from './Country';

interface URL {
  url:any
}
test('renders learn react link', () => {
  render(<App />);
  const initTest = screen.getByText(/Country Detail/i);
  expect(initTest).toBeInTheDocument();
});

/* global.fetch = jest.fn(()=> Promise.resolve({
  json:() => Promise.resolve([{
    name:'Bangladesh', population:6000233, value:'Bangladesh',
    status: 400,
    success: false, error: 'Something bad happened'
    }])
}) )as jest.Mock */

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


