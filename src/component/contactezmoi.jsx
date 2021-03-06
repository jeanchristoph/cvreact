import React, { Component } from 'react'
import './contactezmoi.css';


class ContactezMoi extends Component {
    constructor(props) {
        super(props)


        this.state = {
            form: {
                nom: "",
                email: "",
                message: "",
                comment: "",
            }
            ,
            step: 1,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModify = this.handleModify.bind(this)
        this.handleValidate = this.handleValidate.bind(this)
    }

    handleChange(e) {
        const { type, name, value } = e.target

        this.setState((oldState) => {
            let newForm = oldState.form;
            newForm = { ...oldState.form, [name]: value }

            return { form: newForm }
        })

    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({ step: 2 });
    }

    handleModify(e) {
        e.preventDefault();
        this.setState({ step: 1 })
    }

    handleValidate(e) {
        // envoie de data au server
        //@todo
        this.setState({ step: 3 })
    }

    render() {
        const {
            nom,
            email,
            message,
            comment,
        } = this.state.form;

        return this.state.step == 1 ? (

            <div className="rounded">
                <form onSubmit={this.handleSubmit}>
                    <h4 className="text-center m-4">Contactez-Moi (en construction)</h4>

                    <p>
                        <label htmlFor="nom">Nom: </label>
                        <input
                            className="form-control"
                            type="text"
                            name="nom"
                            value={nom}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="email">E-mail: </label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="message">Message: </label>
                        <textarea
                            className=" form-control"
                            type="text"
                            name="message"
                            value={message}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="comment">Comment m'avez-vous connu ?</label>
                        <select value={comment} name="comment" onChange={this.handleChange} className="form-control">
                            <option value="">Veuillez choisir</option>
                            <option value="google">Recherche Google</option>
                            <option value="linkedin">Linkedin</option>
                            <option value="jobboard">Autre job boards</option>
                            <option value="candidature">Candidature</option>
                            <option value="autre">Autre</option>

                        </select>
                    </p>
                    <p>
                        <input className="btn btn-secondary btn-block" type="submit" value="Valider" />
                    </p>


                </form>
            </div>
        ) : this.state.step == 2 ? (
            <div>
                <p>Votre nom est : {nom}</p>
                <p>Votre addresse e-mail est : {email}</p>
                <p>Votre message est : {message}</p>
                <p>Vous m'avez connu par : {comment}</p>

                <button className="btn btn-danger btn-block" onClick={this.handleModify}>Modifier</button>
                <button className="btn btn-success btn-block mb-2" onClick={this.handleValidate}>Valider</button>

            </div>
        ) : (
                    <p> Une erreur est survenue. Ce component est en cours de construction..</p>
                )
    }

}

export default ContactezMoi;