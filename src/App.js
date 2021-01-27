import './App.css';
import {useState, useEffect} from 'react';


function App() {

    const [btnColor, setBtnColor] = useState('red');
    const [oldBtnColor, setOldBtnColor] = useState('red');
    const [checked, setChecked] = useState(false);

    let newBtnColor = btnColor === 'gray' ? (oldBtnColor === 'red'? 'blue' : 'red') : (btnColor === 'red' ? 'blue' : 'red');


    /* This is React hook, combination of ComponentDidMount and ComponentDidUpdate. This is used
    * because the state change is async in useState hook. This ensures that the updated state is available.   */
    useEffect( () => {
        if (checked === true) {
            setOldBtnColor(btnColor);
            setBtnColor('gray');
        } else {
            if (btnColor === 'gray') {
                setBtnColor(oldBtnColor);
                newBtnColor = btnColor === 'red' ? 'blue' : 'red';
            } else {
                setOldBtnColor(btnColor);
                newBtnColor = btnColor === 'red' ? 'blue' : 'red';
            }
        }

    }, [checked])



    return (

        <div id='mainDiv' className="content">
            <button id='btn' style={{backgroundColor: btnColor}}
                    onClick={() => {setBtnColor(newBtnColor)}} disabled={checked}>Click to change color to {newBtnColor} </button>
            <div className="check-box">
                <input
                    type="checkbox" id="chk1" name="chk1" value="false" onChange={(e) => {setChecked(e.target.checked)}}/>
                <label htmlFor="chk1">Disable Button</label>
            </div>
        </div>
);
}

export default App;
