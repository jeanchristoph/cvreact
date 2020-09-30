import React, { Component } from 'react'
import './asideleft.css';
import Competances from './competances'

class AsideLeft extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const contenu = this.props.contenu

        return (
            <div>
                <div className="col-md-12 pb-2 left">
                    <h4 className="name">Jean-Christophe Malaval</h4>
                    <div id="photoProfil"></div>
                </div>
                <div className="col-md-12 mt-2 left">
                    <h6 className="accroche text-center">DÉVELOPPEUR WEB JAVASCRIPT / PHP</h6>
                    <p className="presentationCourte" >
                         
                Mobile en région PACA
                    </p>

                </div>
                <Competances/>

            </div>

        )
    }
}

export default AsideLeft;