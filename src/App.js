import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [btnColor, setBtnColor] = useState('red');
  const newBtnColor = btnColor === 'red' ? 'blue' : 'red';

  return (
      <div id='mainDiv'>
        <button id='btn' style={{backgroundColor: btnColor, color:'white'}}
                onClick={() => {setBtnColor(newBtnColor)}}>Click to change color to {newBtnColor}</button>
      </div>
  );
}

export default App;
