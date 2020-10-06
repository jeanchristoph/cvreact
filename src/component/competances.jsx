import React, { Component } from 'react'
import './competances.css';

class Competances extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const contenu = this.props.contenu

        return (
            <div>
                    <div className="col-md-12 left rounded">
                        <h5 className="competanceTitre text-center">Compétances</h5>
                        <p className="categorieCompetances">Développement Web</p>
                        <ul>
                            <li>Web front-end :</li>
                            <p className="italicSansPuce">Html, CSS, JavaScript, AJAX, Bootstrap,
                            React
</p>
                            <li>Web back-end :</li>
                            <p className="italicSansPuce">MySQL, PHP, C#, Symfony et Angular,
                            .NET MVC
</p>
                            <li>CMS :</li>
                            <p className="italicSansPuce">Wordpress, Prestashop</p>
                            <li>Retouche d'image et édition vidéo</li>
                            <li>Community manager, contenu web
et réseaux sociaux</li>
                        </ul>
                        <p className="categorieCompetances">Gestion administrative et relation client</p>
                        <ul>
                            <li>Suivi administratif, relation client,
commercial B2B</li>
                        </ul>
                        <p className="categorieCompetances">Langues</p>
                        <ul>
                            <li>Anglais</li>
                            <p className="italicSansPuce">Courant, TOEIC 865 pts
(10/2013)</p>
                            <li>Japonais</li>
                            <p className="italicSansPuce">Courant, JLPT
N2 (1/2014)</p>
                        </ul>

                    </div>
            </div>

        )
    }
}

export default Competances;