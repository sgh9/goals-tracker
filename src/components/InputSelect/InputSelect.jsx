import React from 'react';
import './InputSelect.css';

const InputSelect = ({ name, options, value, onChange }) => {
    return (
        <div className="input-container">
            <select className="input-select" name={name} id={name} value={value} onChange={onChange}>
                {
                    options.map(option =>
                        <option key={option.id}
                            value={option.value}>
                            {option.value}
                        </option>
                    )
                }
            </select>
        </div>
    )
}
export default InputSelect;