import React from 'react';
import InputField from './InputField.js';
import '../styles/Form.css';

const Form = (props) => {
    return (
        <div 
            className={props.display ? 'show' : 'hide'}
        >
            <form 
                onSubmit={props.onSubmit}
            >
                {props.formAttrs.map(formAttr => {
                    return (
                        <InputField
                            name={formAttr.name}
                            type={formAttr.text}
                            onChange={props.onChange}
                            value={props.formInputs[formAttr.name]}
                            label={formAttr.label}
                        />
                    )
                })}
                <button
                    className="submit-button" 
                    type="submit"
                >
                    {props.formButtonText}
                </button>
            </form>
        </div>
    )
}

export default Form;