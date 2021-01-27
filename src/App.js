import './App.css';
import {useState, useEffect} from 'react';

function App() {

    const [btnColor, setBtnColor] = useState('red');
    const newBtnColor = btnColor === 'red' ? 'blue' : 'red';
    const [checked, setChecked] = useState(false);


    function setCheckedValue() {
        let val = document.getElementById('chk1').checked;
        setChecked(val);
        //console.log("CheckBox Checked Element: ", val);
    }

    useEffect( () => {       /* This is React hook, combination of ComponentDidMount and ComponentDidUpdate   */
        //console.log("CheckBox Checked State: ", checked);
    })

    return (
        <div id='mainDiv' className="content">
            <button id='btn' style={{backgroundColor: btnColor}}
                    onClick={() => {setBtnColor(newBtnColor)}} disabled={checked}>Click to change color to {newBtnColor} </button>
            <div className="check-box">
                <input
                    type="checkbox" id="chk1" name="chk1" value="false" onChange={() => {setCheckedValue()}}/>
                <label htmlFor="chk1">Disable Button</label>
            </div>
        </div>
);
}

export default App;
