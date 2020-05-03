import React, { Component } from 'react';
import ResumeContainerDumb from "./resume-container-dumb/resumeContainerDumb";

class ResumeContainer extends Component {
    render() {
        return (
            <ResumeContainerDumb nav={1471.4205}
                                 patrimony={8796.4512}
                                 rentability={10.42}/>
        );
    }
}

export default ResumeContainer;