import {useState} from 'react'
import './App.css'
import WebApp from "@twa-dev/sdk";

function App() {
    const [count, setCount] = useState(0);
    // const [userData, setUserData] = useState({
    //     id: null,
    //     is_bot: false,
    //     first_name: '',
    //     last_name: '',
    //     username: '',
    //     language_code: '',
    //     is_premium: false,
    //     added_to_attachment_menu: false,
    //     allows_write_to_pm: false,
    //     photo_url: ''
    // });

    const handleClick = () => {
        // let webAppData = WebApp.initDataUnsafe;
        // const data = JSON.parse('{"' + decodeURI(webAppData.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
        console.log(WebApp.initDataUnsafe);
        // WebApp.showAlert(
        //     <div>
        //         <span>id: {WebApp.WebAppUser.id}</span>
        //         <span>is_bot: {WebApp.WebAppUser.is_bot}</span>
        //         <span>first_name: {WebApp.WebAppUser.first_name}</span>
        //         <span>last_name: {WebApp.WebAppUser.last_name}</span>
        //         <span>username: {WebApp.WebAppUser.username}</span>
        //         <span>language_code: {WebApp.WebAppUser.language_code}</span>
        //         <span>is_premium: {WebApp.WebAppUser.is_premium}</span>
        //         <span>added_to_attachment_menu: {WebApp.WebAppUser.added_to_attachment_menu}</span>
        //         <span>allows_write_to_pm: {WebApp.WebAppUser.allows_write_to_pm}</span>
        //         <span>photo_url: {WebApp.WebAppUser.photo_url}</span>
        //     </div>
        // )
    }

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
