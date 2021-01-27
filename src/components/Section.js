import React from 'react';
import Form from './Form.js';
import {FaRegTimesCircle, FaPen} from "react-icons/fa";
import "../styles/Section.css"

const Section = (props) => {
    function getSectionInfo () {
        return (
            <React.Fragment>
                <div className="flx-row just-center">
                    <div>
                        <h2>
                            {props.contactInfo.firstName} {props.contactInfo.lastName}
                        </h2>
                        <p>{props.contactInfo.email}</p>
                    </div>
                    <div>
                        <FaPen
                            className="click-button"
                            onClick={props.changeDisplay}
                        />
                    </div>
                </div>
                <div>
                    <Form 
                        formButtonText="Change Contact"
                        formAttrs={props.formAttrs}
                        formInputs={props.formInputs}
                        onChange={props.onChange}
                        onSubmit={props.onSubmit} 
                        display={props.display} 
                    /> 
                </div>
            </React.Fragment>
        )
    }

    function getEducationInfo (info) {
        return (
            <div className="flx-row just-space">
                <div className="text-left">
                    <p>{info.universityName}, {info.degree}</p>
                    <p>{info.startDate} - {info.endDate}</p>
                    <p>{info.description}</p>
                </div>
                <div>
                    <FaRegTimesCircle 
                        className="click-button"
                        onClick={() => {
                            props.delete(info.id)}
                        }
                        />
                    <FaPen
                        className="click-button"
                        onClick={() => {
                            props.changeDisplay(info.id)}
                        }
                    />
                </div>
            </div>
        );
    }

    function getExperienceInfo (info) {
        return (
            <div className="flx-row just-space section-box">
                <div className="text-left">
                    <p>{info.position} at {info.companyName}</p>
                    <p>{info.startDate} - {info.endDate}</p>
                    <p>{info.description}</p>
                </div>
                <div>
                    <FaRegTimesCircle 
                        className="click-button"
                        onClick={() => {
                            props.delete(info.id)}
                        }
                        />
                    <FaPen
                        className="click-button"
                        onClick={() => {
                            props.changeDisplay(info.id)}
                        }
                    />
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            {props.type === "contact" ? getSectionInfo() : 
                props.containerInfo.map(info => {
                    return (
                        <div id={info.id} className="section-box">
                            {props.type === "education" ? 
                                getEducationInfo(info) :
                                getExperienceInfo(info)
                            }
                            <div>
                                <Form
                                    formButtonText={props.formButtonText}
                                    formAttrs={props.formAttrs}
                                    formInputs={info.formInputs}
                                    onChange={(event) => {
                                        props.onChange(event, info.id)
                                    }}
                                    onSubmit={(event) => {
                                        props.onSubmit(event, info.id)
                                    }} 
                                    display={info.display} 
                                />
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Section;