import React, { Component } from 'react'
import './navbartop.css';

class NavbarTop extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const menu = this.props.menu
        return (
            <div className="navbarmenu">

                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <h4 className=" onglet ">MENU</h4>
                    </div>
                    <div className="col-md-4"></div>

                </div>
                <div className="row mt-5">
                    <div className="col-md-4 text-center">
                        <button className=" onglet btn btn-secondary">Mon CV</button>
                    </div>
                    <div className="col-md-4 text-center">
                        <button className=" onglet btn btn-secondary">Réalisations</button>
                    </div>
                    <div className="col-md-4 text-center">
                        <button className="onglet btn btn-secondary">Developpement Web</button>
                    </div>




                </div>
            </div>
        )
    }
}

export default NavbarTop;