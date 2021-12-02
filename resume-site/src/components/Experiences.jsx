import React from 'react';
import { Container } from 'react-bootstrap';
import { ExperienceFullBody, StyledSpeechBubbleMedium, StyledSpeechBubbleLarge } from './StyledExperiences';

const Experiences = () => {
    //style={{backgroundColor: '#333', position: 'absolute', width: '100%', height: '100%', boxShadow: 'inset 0 0 5rem rgb(0 0 0 / 50%)'}}
    return (
        <ExperienceFullBody>
            <container style={{display: "flex", height: "100%"}}>
                <span style={{width: "20%", background: "linear-gradient(#e66465, #9198e5)", justifyContent: "center", fontFamily: 'avenir next', display: "inline-flex", verticalAlign: "middle", minHeight: "100px", alignItems: "center", marginRight: "20px"}}>
                    EXPERIENCES / LEADERSHIP ACTIVITIES
                </span>
                {/* <span style={{height: "50% !important", width: "80%", color: "white"}}>
                    <div style={{marginTop: "20px", height: "100px", background: "grey",  borderRadius: "5px", marginRight: "20px", boxShadow: "0.5rem 0.5rem black, -0.5rem -0.5rem lightcoral"}}>
                        <div style={{paddingRight: "10px"}}>
                            IBM :: 2019 - Present
                        </div>
                        <div>
                        Working on an application to maintain end-to-end process of Quote to
                        Cash (Q2C) transactions of IBM service contracts (Internal Business tool)
                        Worked on setting up Kubernetes to deploy application to IBM Cloud and
                        implemented microservices to contain each process in a service
                        Self-taught Golang and React JS
                        </div>
                    </div>
                </span> */}
                <span style={{ width: "100%", color: "white"}}>
                    <StyledSpeechBubbleMedium>
                        <div>IBM :: Software Developer :: 2019 - Present</div>
                        <ul style={{listStyleType: "circle"}}> 
                            <li>Working on an application to maintain end-to-end process of Quote to Cash (Q2C) transactions of IBM service contracts (Internal Business tool)</li>
                            <li>Worked on setting up Kubernetes to deploy application to IBM Cloud and implemented microservices to contain each process in a service</li>
                            <li>Self-taught Golang and React JS</li>
                        </ul>
                    </StyledSpeechBubbleMedium>
                    <StyledSpeechBubbleMedium>
                        <div>IBM :: Application Developer :: 2018 Summer</div>
                        <ul style={{listStyleType: "circle"}}> 
                            <li>Worked on an automated process of analyzing transaction logs through visualizations tools (i.e. Plotly.js) that could be used by IBM Business Analysts and Dev Ops Leads</li>
                            <li>This automated process decreased the process of putting visualizations together for specific business/technical metrics from days to minutes of work</li>
                            <li>Learned data aggregation methods through Python development</li>
                        </ul>
                    </StyledSpeechBubbleMedium>
                    <StyledSpeechBubbleLarge>
                        <div>Undergraduate Research - REU (Research Experience for Undergraduates) program :: Research Assistant :: 2017 Summer</div>
                        <ul style={{listStyleType: "circle"}}> 
                            <li>Helped create the AI that implemented the Dynamic Difficulty Adjustment mechanic: Our goal was to analyze whether this mechanic can help game players improve their skills faster</li>
                            <li>Implemented parts of a web-based comic creation tool: It included basic features for novice comic artists (targeted audience), to get started on basic comics: The goal of the project was to analyze their thought processes on certain aspects such as, placement of certain characters or speech bubbles</li>
                            <li>Self-taught JavaScript and C#</li>
                        </ul>
                    </StyledSpeechBubbleLarge>
                </span>
            </container>
            {/* <Container style={{marginTop: '60px', color: 'beige'}}> 
                <span style={{fontFamily: 'avenir next', fontSize: '30px'}}>EXPERIENCES</span>
                <p>
                Working on an application to maintain end-to-end process of Quote to
                Cash (Q2C) transactions of IBM service contracts (Internal Business tool)
                Worked on setting up Kubernetes to deploy application to IBM Cloud and
                implemented microservices to contain each process in a service
                Self-taught Golang and React JS
                </p>
            </Container> */}
        </ExperienceFullBody>
    );
}

export default Experiences;