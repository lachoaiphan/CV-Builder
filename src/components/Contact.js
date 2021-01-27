import React, { Component } from 'react';
import Section from "./Section.js";

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formAttributes: [
                {
                    name: "firstName",
                    type: "text",
                    label: "First Name: ",
                    input: "Edit First Name!",
                },
                {
                    name: "lastName",
                    type: "text",
                    label: "last Name: ",
                    input: "Edit First Name"
                },
                {
                    name: "email",
                    type: "text",
                    label: "Email Address: ",
                    input: "Edit Email Address! "
                }
            ],
            formInputs: {
                firstName: 'First',
                lastName: 'Last',
                email: 'Email@email.com'
            },
            contactInfo: {
                firstName: 'First',
                lastName: 'Last',
                email: 'Email@email.com'
            },
            displayContact: false
        };
        
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState ({
            formInputs: {...this.state.formInputs, 
                [event.target.name]: event.target.value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState ({
            contactInfo: {firstName: this.state.formInputs.firstName, 
                          lastName: this.state.formInputs.lastName, 
                          email: this.state.formInputs.email}
        });
        this.changeDisplay();
    }

    changeDisplay() {
        this.setState({
            displayContact: !this.state.displayContact
        });
    }

    

    render () {
        return (
            <div>
                <Section 
                    contactInfo={this.state.contactInfo} 
                    formButtonText="Change Contact"
                    formAttrs={this.state.formAttributes}
                    formInputs={this.state.formInputs}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleSubmit.bind(this)} 
                    changeDisplay={this.changeDisplay} 
                    display={this.state.displayContact} 
                    type="contact"
                />
            </div>
        )
    }
}

export default Contact;