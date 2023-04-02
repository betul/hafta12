import React, { useState, useEffect } from 'react';
import './clock.css'

function Clock() {
    //State tanımlamaları
    const [time, setTime] = useState(new Date());

    //Render sonrası çalışacak
    useEffect(() => {
        const intervalID = setInterval(() => setTime(new Date()), 1000);

        return function cleanup() {
            clearInterval(intervalID);
        };
    }, []);


    //render aşaması
    return <div className='clock-container'>
        <h2 className="clock">{time.toLocaleTimeString()}</h2>
    </div>;
}

export default Clock