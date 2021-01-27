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


/* Script for Check box and Button initial condition */
test("Check the initial conditions for Check box", () => {

  /* Checks that button is enabled initially */
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Click to change color to blue'});
  expect(colorButton).toBeEnabled();

  /* Checks that check-box is un-checked initially */
  const checkBox = screen.getByRole('checkbox', {name: 'Disable Button'});
  expect(checkBox).not.toBeChecked();

});



/* Script to test if button enables and disables  */
test("Check if button disables after check-box checked and vice-versa", () => {
  render(<App />);


  const checkBox = screen.getByRole('checkbox', {name: 'Disable Button'});
  const colorButton = screen.getByRole('button', {name: 'Click to change color to blue'});

  /* Fire events - Make the check-box checked */
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();

  /* Fire events - Make the check-box un-checked */
  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(colorButton).not.toBeDisabled();

});