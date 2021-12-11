import React from 'react';
import './Button.css';

const Button = ({ type, value, onClick, className ='', ...args }) => {
    return (
        <button className={`btn btn-${type}`}
            onClick={onClick}
            {...args}>
            {value}
        </button>
    )
}
export default Button;