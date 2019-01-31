import React from 'react';
import getTwoDigitString from './Utils'

function TimeUnitDisplay({number}) {
    return (
        <span className="display-3">{getTwoDigitString(number)}</span>
    );
}

export default TimeUnitDisplay;