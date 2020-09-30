import React, { Component } from 'react'
import './asideright.css';
import ContactezMoi from './contactezmoi';
import Expericences from './experiences'
import Formation from './formations'

class AsideRight extends Component {
    constructor(props) {
        super(props);



    }
    render() {
        const contenu = this.props.contenu
        return (

            <div className="">
                <div className="col-md-12 right" id="photoExpericences">
                </div>
                <div className="col-md-12 right">
                    <Expericences />
                </div>
                <div className="col-md-12 right" id="photoFormationnpn">
                </div>
                <div className="col-md-12 right">
                    <Formation />
                </div>
                <div className="col-md-12 right">
                    <ContactezMoi />
                </div>


            </div >
        )
    }
}

export default AsideRight;