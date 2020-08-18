import React from 'react';
//Import Hooks
import useClock from '../hooks/useClock';

function ClockDisplay() {
    //Gọi custom hook để sử dụng
    const [time, ampm] = useClock()
    
    return (
        <div id="MyClockDisplay" className="clock">
            {time}
            <span>{ampm}</span>
        </div>
    )
}

export default ClockDisplay