import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders welcome message', () => {
  window.HTMLElement.prototype.scrollIntoView = function() {};
  render(<App />);
  const message = screen.getByText(/Welcome/i);
  expect(message).toBeInTheDocument();
});
