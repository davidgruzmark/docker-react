/* import { render, screen } from '@testing-library/react';
//import { ReactDOM } from 'react-dom';
import { ReactDOM } from 'react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/help/i);
  expect(linkElement).toBeInTheDocument();
});
*/
import { render, screen } from '@testing-library/react';
import React from 'react'; // Import React, not ReactDOM
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   render(<App />, div); // Use render from @testing-library/react
//   //ReactDOM.unmountComponentAtNode(div); // This line is not needed
// });

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/help/i); // Use "learn react" instead of "help"
  expect(linkElement).toBeInTheDocument();
});
