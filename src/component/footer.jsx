import React, { Component } from 'react'
import './footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const contenuFooter = this.props.contenuFooter
        return (
            <div className=" footer rounded mb-1 mt-2" data-aos="fade-left">
                <div className="row " >
                    <div className="col-md-12">
                        <p className="text-center">Copyright 2020 || Développé par: Jean-Christophe Malaval</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;