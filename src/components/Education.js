import React, { Component } from 'react';
import Form from './Form.js';
import Section from './Section.js';
import uniqid from "uniqid";
import { RiAddCircleLine } from "react-icons/ri";
import "../styles/Section.css";

class Education extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formAttributes: [
                {
                    name: "universityName",
                    type: "text",
                    label: "University Name: "
                },
                {
                    name: "degree",
                    type: "text",
                    label: "Degree: "
                },
                {
                    name: "startDate",
                    type: "text",
                    label: "Start Date: "
                },
                {
                    name: "endDate",
                    type: "text",
                    label: "End Date: "
                },
                {
                    name: "description",
                    type: "text",
                    label: "Description: "
                }
            ],
            formInputs: {
                universityName: '', 
                degree: '', 
                startDate: '',
                endDate: '', 
                description: ''
            },
            educationInfo: [
                {
                 formInputs: {
                    universityName: 'UC Davis', 
                    degree: 'Computer Science', 
                    startDate: '2018',
                    endDate: '2021', 
                    description: 'Completed with GPA of 3.00.'
                 },
                 id: uniqid(),
                 universityName: 'University Name',
                 degree: 'Degree',
                 startDate: 'Sep 2014',
                 endDate: 'Jun 2018', 
                 description: 'Completed School',
                 displayForm: false}
            ],
            
            displayEducation: false
        };
    }

    handleDeleteClick(id) {
        let newInfo = this.state.educationInfo.filter(education => 
                            education.id !== id);
        this.setState({
            educationInfo: newInfo
        })
    }

    handleEditChange(event, id) {
        let newInfo = this.state.educationInfo;
        let currentInfo = newInfo.find(info => info.id === id);
        currentInfo.formInputs[event.target.name] = event.target.value;
        this.setState({
            educationInfo: newInfo
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
            educationInfo: [ ...this.state.educationInfo,
                          { 
                            formInputs: {
                                universityName: this.state.formInputs.universityName, 
                                degree: this.state.formInputs.degree, 
                                startDate: this.state.formInputs.startDate, 
                                endDate: this.state.formInputs.endDate, 
                                description: this.state.formInputs.description,
                            },
                            id: uniqid(),
                            universityName: this.state.formInputs.universityName, 
                            degree: this.state.formInputs.degree, 
                            startDate: this.state.formInputs.startDate, 
                            endDate: this.state.formInputs.endDate, 
                            description: this.state.formInputs.description,
                            display: false
                          }]
        });
        this.changeDisplay();
    }

    handleEditSubmit(event, id) {
        event.preventDefault();
        let newInfo = this.state.educationInfo;
        let currentInfo = newInfo.find(info => info.id === id);
        currentInfo.universityName = currentInfo.formInputs.universityName;
        currentInfo.degree = currentInfo.formInputs.degree;
        currentInfo.startDate = currentInfo.formInputs.startDate;
        currentInfo.endDate = currentInfo.formInputs.endDate;
        currentInfo.description = currentInfo.formInputs.description;
        this.setState({
            educationInfo: newInfo
        })
        this.changeEditDisplay(id);
    }

    changeDisplay() {
        this.setState({
            displayEducation: !this.state.displayEducation
        });
    }

    changeEditDisplay(id) {
        let newInfo = this.state.educationInfo;
        let currentInfo = newInfo.find(info => info.id === id);
        currentInfo.display = !currentInfo.display
        this.setState({
            educationInfo: newInfo
        })
    }

    render () {
        return (
            <div className="mar-15">
                <div className="border-bot text-left pad-10">
                    <h3>EDUCATION</h3>
                </div>
                <Section
                    formButtonText="Change Education"
                    delete={this.handleDeleteClick.bind(this)}
                    onChange={this.handleEditChange.bind(this)}
                    onSubmit={this.handleEditSubmit.bind(this)}
                    changeDisplay={this.changeEditDisplay.bind(this)}
                    containerInfo={this.state.educationInfo}
                    formAttrs={this.state.formAttributes}
                    type="education"
                />
                <RiAddCircleLine
                    className="pad-10 click-button"
                    onClick={this.changeDisplay.bind(this)} 
                />
                <Form 
                    formButtonText="Add Education"
                    formAttrs={this.state.formAttributes}
                    formInputs={this.state.formInputs}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleSubmit.bind(this)} 
                    display={this.state.displayEducation} 
                />               
            </div>
        )
    }
}

export default Education;