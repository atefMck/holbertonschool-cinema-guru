import React from 'react';
import Input from './Input'
import './general.css'

const DateInput = ({ label }) => {
    return (
        <Input type="date" label={label} className="date-input" />
    );
}

export default DateInput;
