import React, { Component } from 'react'
import './main.css';


class Main extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const props = this.props
        return (
            <div className="row main" >
                <div className="col-md-4">{props.left}</div>
                <div className="col-md-8">{props.right}</div>
            </div>
        )
    }
}


export default Main;
