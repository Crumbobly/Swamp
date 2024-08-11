import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    const sendData = () => {
        fetch('/api/data', {
            method: 'POST',
            body: new URLSearchParams({
                data: 'Hello from frontend',
            })
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={sendData}>Send Data</button>
        </div>
    );
}

export default App;
