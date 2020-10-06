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




                <Fade right>
                    <div className="col-md-12 right rounded mb-1">
                        <Expericences />
                    </div>
                </Fade>

                <div className="col-md-12 right-simpleborder rounded  mb-1" id="photoFormationnpn">
                </div>



                <Fade right>
                    <div className="col-md-12 right mt-1 rounded">
                        <Formation />
                    </div>
                </Fade>
                <div className="col-md-12 right-simpleborder rounded  mt-1 mb-1" id="photoExpericences">
                </div>
                <Fade right>
                    <div className="col-md-12 right mt-1 rounded">
                        <ContactezMoi />
                    </div>
                </Fade>


            </div >
        )
    }
}

export default AsideRight;