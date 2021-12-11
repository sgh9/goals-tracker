import React from 'react';
import './InputText.css';

const InputText = ({ name, value, onChange }) => {
    
    return (
        <div className="input-container">
            <label htmlFor={name}></label>
            <input className="input-text"
                type="text"
                name={name}
                value={value}
                id={name} 
                onChange={onChange}
            />
        </div>
    )
}
export default InputText;