import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './general.css'

const Input = ({ label, icon, type, className, min, max, step, value, setValue }) => {
    const handleInput = (e) => {
        setValue(e.target.value)
    }
    return (
        <span className={"text-input " + className}>
            <label>
                {icon && <FontAwesomeIcon icon={icon} className="icon" />}
                {label}:
            </label>
            <input type={type} min={min} max={max} step={step} value={value} onChange={handleInput} />
        </span>
    );
}

export default Input;
