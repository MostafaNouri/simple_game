import {useState} from 'react'
import './App.css'

function App() {
    const [width, setWidth] = useState(1000);

    // Function to increase the width by 10% on button click
    const increaseWidth = () => {
        setWidth(prevWidth => prevWidth - 1); // Ensures width does not exceed 100%
    };

    return (
        <>
            <div>
                <img src="images/logo.png" className="logo" aria-disabled={true} alt="Logo" onClick={increaseWidth}/>
            </div>
            <div className="card">
                <div>
                    <span>{width} / 1000</span>
                </div>
                <div className="bar-container">
                    <div className="bar-fill" style={{ width: `${width * 100 / 1000}%` }} />
                </div>
            </div>
        </>
    )
}

export default App;
