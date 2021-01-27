import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('Test Initial Color of Button', () => {
  render(<App />);
  const ColorButton = screen.getByRole('button', {name: 'Click to change color to blue'});
  expect(ColorButton).toHaveStyle({backgroundColor: 'red'});
});


test('Test Button Color as Blue after Click', () => {
  render(<App />);
  const ColorButton = screen.getByRole('button', {name: 'Click to change color to blue'});
  fireEvent.click(ColorButton);
  expect(ColorButton).toHaveStyle({backgroundColor: 'blue'});
});

