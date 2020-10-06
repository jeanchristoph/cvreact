import React, { Component } from 'react'
import './asideright.css';
import ContactezMoi from './contactezmoi';
import Expericences from './experiences'
import Formation from './formations'
import Fade from 'react-reveal/Fade';


class AsideRight extends Component {
    constructor(props) {
        super(props);



    }
    render() {
        const contenu = this.props.contenu
        return (

            <div className="">
                <div className="col-md-12 right rounded" id="photoExpericences">
                </div>
                <Fade right>
                <div className="col-md-12 right rounded">
                    <Expericences />
                </div>
                </Fade>
                <div className="col-md-12 right rounded" id="photoFormationnpn">
                </div>
                <Fade right>
                <div className="col-md-12 right rounded">
                    <Formation />
                </div>
                </Fade>
                <Fade right>
                <div className="col-md-12 right rounded">
                    <ContactezMoi />
                </div>
                </Fade>


            </div >
        )
    }
}

export default AsideRight;