import React, { Component } from 'react'
import './formations.css';

class Formations extends Component {
    constructor(props) {
        super(props);



    }
    render() {
        const contenu = this.props.contenu
        return (
            <div className="formations">
                <h4 className="text-center">Diplômes et Formations</h4>
                <ul>
                    <li className="boldSansPuce">Titre Professionnel : Developpeur Web / Web
                    mobile
                </li>
                    <li className="italicSansPuce">Greta Vaucluse Orange</li>
                    <li className="italicSansPuce">aout 2020</li>
                    </ul>
                    <ul>
                    <li>Conception back-end et front-end d'applications web</li>

                </ul>
                <ul>
                    <li className="boldSansPuce">Master 2 Masni anglais-japonais
                </li>
                    <li className="italicSansPuce">Université d'Aix Marseille I</li>
                    <li className="italicSansPuce">2014</li>
                    </ul>
                    <ul>
                    <li>Management interculturel</li>
                    <li>Anglais et japonais des affaires</li>
                </ul>

            </div >
        )
    }
}

export default Formations;