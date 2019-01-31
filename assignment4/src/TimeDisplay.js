import React from 'react';
import TimeUnitDisplay from './TimeUnitDisplay';

function TimeDisplay({minutes, seconds, ms}) {
    if(minutes === 0) {
        return (
            <div>
                <TimeUnitDisplay number={minutes} />:
                <TimeUnitDisplay number={seconds} />:
                <TimeUnitDisplay number={ms} />
            </div>
        );
    } else {
        return (
            <div>
                <TimeUnitDisplay number={minutes} />:
                <TimeUnitDisplay number={seconds} />
            </div>
        );
    }
}

export default TimeDisplay;