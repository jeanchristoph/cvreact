import React, { Component } from 'react'
import './asideleft.css';
import Competances from './competances'
import Fade from 'react-reveal/Fade';

class AsideLeft extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const contenu = this.props.contenu

        return (
            <div>
                <Fade left>
                <div className="col-md-12 pb-2 left rounded">
                    <h4 className="name">Jean-Christophe Malaval</h4>
                    <div id="photoProfil"></div>
                </div>
                </Fade>
                <Fade left>
                <div className="col-md-12 mt-2 left rounded">
                    <h6 className="accroche text-center">DÉVELOPPEUR WEB JAVASCRIPT / PHP</h6>
                    <p className="presentationCourte" >
                         
                Mobile en région PACA
                    </p>

                </div>
                </Fade>
                <Fade left>
                <Competances/>
                </Fade>
            </div>

        )
    }
}

export default AsideLeft;