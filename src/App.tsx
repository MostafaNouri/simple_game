import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        let webAppData = WebApp.initData;
        const data = JSON.parse('{"' + decodeURI(webAppData.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
        console.log(data);
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

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <div className="card">
                    <button onClick={handleClick}>
                        Show User Information
                    </button>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
