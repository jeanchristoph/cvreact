import React, { Component } from 'react'
import './experiences.css';

class Experiences extends Component {
    constructor(props) {
        super(props);



    }
    render() {
        const contenu = this.props.contenu
        return (
            <div className="experiences">
                <h4 className="text-center">Expériences professionnelles</h4>
                <ul>
                    <li className="boldSansPuce">Développeur web</li>
                    <li className="italicSansPuce">IPSUMEDIA Eygalières, France</li>
                    <li className="italicSansPuce">mars-avril 2020</li>
                    </ul>
                    <ul>
                        <li>Rendre une application existante responsive en
                        implémentant bootstrap 4
                    </li>
                        <li>Implémenter un pattern design PHP MVC pour
une meilleure maintenance</li>
                        <li>Design Web : CSS et édition d'images avec
Photoshop</li>
                        <li>Webmaster sur Pretashop</li>
                    </ul>
                

            </div >
        )
    }
}

export default Experiences;