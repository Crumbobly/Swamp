import {useState} from 'react';
import Login from './Login/Login';
import Registration from './Registration/Registration';


export default function Authorization() {
    const [entry, setEntry] = useState("login");

    function UpDate(value) {
        setEntry(value);
    }

    return (
        <>

            {entry === "login" ? <Login/> : null}
            {entry === "reg" ? < Registration/> : null}

        </>


    )
}