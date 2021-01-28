import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';



/* 1.   */

test('Test Initial Color of Button', () => {
  render(<App />);
  const ColorButton = screen.getByRole('button', {name: 'Click to change color to Midnight Blue'});
  expect(ColorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
});



/* 2.  */

test('Test Button Color as Blue after Click', () => {
  render(<App />);
  const ColorButton = screen.getByRole('button', {name: 'Click to change color to Midnight Blue'});
  fireEvent.click(ColorButton);
  expect(ColorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
});



/* 3.  Script for Check box and Button initial condition */

test("Check the initial conditions for Check box", () => {

  /* Checks that button is enabled initially */
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Click to change color to Midnight Blue'});
  expect(colorButton).toBeEnabled();

  /* Checks that check-box is un-checked initially */
  const checkBox = screen.getByRole('checkbox', {name: 'Disable Button'});
  expect(checkBox).not.toBeChecked();

});



/* 4. Script to test if button enables and disables  */

test("Check if button disables after check-box checked and vice-versa", () => {
  render(<App />);


  const checkBox = screen.getByRole('checkbox', {name: 'Disable Button'});
  /* Using String Template and Backtick character, output is same:   Midnight Blue  */
  const colorButton = screen.getByRole('button', {name: `Click to change color to ${replaceCamelWithSpaces('MidnightBlue')}`});

  /* Fire events - Make the check-box checked */
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();

  /* Fire events - Make the check-box un-checked */
  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(colorButton).not.toBeDisabled();

});




/* 5. Script to test if button turns gray after disable */

test("Check if button turns gray after disable and vice versa", () => {
  render(<App />);
  const checkBox = screen.getByRole('checkbox', {name: 'Disable Button'});
  const colorButton = screen.getByRole('button', {name: 'Click to change color to Midnight Blue'});

  /* default not gray */
  expect(colorButton).not.toHaveStyle({backgroundColor: 'gray'});

  /* FireEvents - Make checkbox enable */
  fireEvent.click(checkBox);

  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  /* Now we'll make the checkbox un-checked and see if the buttons is enabled  */
  fireEvent.click(checkBox)  // Un-check the checkbox
  expect(checkBox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

  /* Below code checks if the button goes back to red or blue color after being enabled */
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed' || 'MidnightBlue'});
  expect(colorButton).not.toHaveStyle({backgroundColor: 'gray'});

});


/*
*  describe() is used to group multiple tests together. Here within each tests, we are calling a function - replaceCamelWithSpaces()
*  which is defined inside App.js. We are testing that the function returns the correct string (color name)
* */
describe("Spaces before camel case characters ", ()=> {
  test("Works for no inner capital letters", ()=>{
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test("Works for one inner capital letters", ()=>{
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test("Works for multiple inner capital letters", ()=>{
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });

});