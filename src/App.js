import './App.css';
import {useState, useEffect} from 'react';


export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

    const [btnColor, setBtnColor] = useState('MediumVioletRed');
    const [oldBtnColor, setOldBtnColor] = useState('MediumVioletRed');
    const [checked, setChecked] = useState(false);

    let newBtnColor = btnColor === 'gray' ? (oldBtnColor === 'MediumVioletRed'? 'MidnightBlue' : 'MediumVioletRed') : (btnColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed');


    /* This is React hook, combination of ComponentDidMount and ComponentDidUpdate. This is used
    * because the state change is async in useState hook. This ensures that the updated state is available.   */
    useEffect( () => {
        if (checked === true) {
            setOldBtnColor(btnColor);
            setBtnColor('gray');
        } else {
            if (btnColor === 'gray') {
                setBtnColor(oldBtnColor);
                newBtnColor = btnColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
            } else {
                setOldBtnColor(btnColor);
                newBtnColor = btnColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
            }
        }

    }, [checked])


    return (

        <div id='mainDiv' className="content">
            <button id='btn' style={{backgroundColor: btnColor}}
                    onClick={() => {setBtnColor(newBtnColor)}} disabled={checked}>Click to change color to {replaceCamelWithSpaces(newBtnColor)} </button>
            <div className="check-box">
                <input
                    type="checkbox" id="chk1" name="chk1" value="false" onChange={(e) => {setChecked(e.target.checked)}}/>
                <label htmlFor="chk1">Disable Button</label>
            </div>
        </div>
    );
}

export default App;
