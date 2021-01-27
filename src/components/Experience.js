import React, { Component } from 'react';
import Form from './Form.js';
import Section from './Section.js';
import uniqid from "uniqid";
import { RiAddCircleLine } from "react-icons/ri";


class Experience extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formAttributes: [
                {
                    name: "position",
                    type: "text",
                    label: "Position: ",
                    input: "Add Position!",
                },
                {
                    name: "companyName",
                    type: "text",
                    label: "Company Name: ",
                    input: "Add Company Name!"
                },
                {
                    name: "startDate",
                    type: "text",
                    label: "Start Date: ",
                    input: "Add Start Date!"
                },
                {
                    name: "endDate",
                    type: "text",
                    label: "End Date: ",
                    input: "Add End Date!"
                },
                {
                    name: "description",
                    type: "text",
                    label: "Description: ",
                    input: "Add Description!"
                }
            ],
            formInputs: {
                position: '', 
                companyName: '', 
                startDate: '',
                endDate: '', 
                description: ''
            },
            experienceInfo: [
                {formInputs: {
                    position: 'Coder', 
                    companyName: 'Coder Coding', 
                    startDate: '2018',
                    endDate: '2021', 
                    description: 'A coder in coding.'
                 },
                 id: uniqid(),
                 position: 'Position Name', 
                 companyName: 'Company Name', 
                 startDate: 'Jan 2021',
                 endDate: 'Jan 2021', 
                 description: 'Description about position.',
                 display: false}
            ],
            displayExperience: false
        };
        
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    handleDeleteClick(id) {
        let newInfo = this.state.experienceInfo.filter(experience => 
                            experience.id !== id);
        this.setState({
            experienceInfo: newInfo
        })
    }

    handleEditChange(event, id) {
        let newInfo = this.state.experienceInfo;
        let currentInfo = newInfo.find(info => info.id === id);
        currentInfo.formInputs[event.target.name] = event.target.value;
        this.setState({
            experienceInfo: newInfo
        })
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
            experienceInfo: [ ...this.state.experienceInfo,
                          { formInputs: {
                                position: this.state.formInputs.position, 
                                companyName: this.state.formInputs.companyName, 
                                startDate: this.state.formInputs.startDate, 
                                endDate: this.state.formInputs.endDate, 
                                description: this.state.formInputs.description
                            },
                            position: this.state.formInputs.position, 
                            companyName: this.state.formInputs.companyName, 
                            startDate: this.state.formInputs.startDate, 
                            endDate: this.state.formInputs.endDate, 
                            description: this.state.formInputs.description }]
        });
        this.changeDisplay();
    }

    handleEditSubmit(event, id) {
        event.preventDefault();
        let newInfo = this.state.experienceInfo;
        let currentInfo = newInfo.find(info => info.id === id);
        currentInfo.position = currentInfo.formInputs.position;
        currentInfo.companyName = currentInfo.formInputs.companyName;
        currentInfo.startDate = currentInfo.formInputs.startDate;
        currentInfo.endDate = currentInfo.formInputs.endDate;
        currentInfo.description = currentInfo.formInputs.description;
        this.setState({
            experienceInfo: newInfo
        })
        this.changeEditDisplay(id);
    }

    changeDisplay() {
        this.setState({
            displayExperience: !this.state.displayExperience
        });
    }

    changeEditDisplay(id) {
        let newInfo = this.state.experienceInfo;
        let currentInfo = newInfo.find(info => info.id === id);
        currentInfo.display = !currentInfo.display
        this.setState({
            experienceInfo: newInfo
        })
    }

    render () {
        return (
            <div className="mar-15">
                <div className="border-bot text-left pad-10">
                    <h3>EXPERIENCE</h3>
                </div>
                <Section
                    formButtonText="Change Experience"
                    delete={this.handleDeleteClick.bind(this)}
                    onChange={this.handleEditChange.bind(this)}
                    onSubmit={this.handleEditSubmit.bind(this)}
                    changeDisplay={this.changeEditDisplay.bind(this)}
                    containerInfo={this.state.experienceInfo}
                    formAttrs={this.state.formAttributes}
                    type="experience"
                />
                <RiAddCircleLine
                    className="pad-10 click-button"
                    onClick={this.changeDisplay.bind(this)} 
                />
                <Form 
                    formButtonText="Add Experience"
                    formAttrs={this.state.formAttributes}
                    formInputs={this.state.formInputs}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleSubmit.bind(this)} 
                    display={this.state.displayExperience} 
                /> 
            </div>
        )
    }
}

export default Experience;