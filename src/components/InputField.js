import React from 'react';
import "../styles/App.css";
import "../styles/InputField.css";

const InputField = (props) => {
    return (
        <div className="flx-col mar-15 input-field-box">
            <label 
                className="text-left"
                htmlFor={props.name}
            >
                {props.label}
            </label>
            <input 
                className="input-field"
                type={props.type}
                onChange={props.onChange} 
                value={props.value}
                name={props.name}
                required 
            />
        </div>
    )
}

export default InputField;