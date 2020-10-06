import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsideLeft from './component/asideleft'
import AsideRight from './component/asideright'
import Main from './component/main'
import Footer from './component/footer'
import NavbarTop from './component/navbartop'
import Bounce from 'react-reveal/Bounce';


class App extends Component {

  componentDidMount() {
    document.title = 'Mon CV en React.js';

  }

  render() {
    return (

      <div className="container">
        <Bounce>
          <NavbarTop />
        </Bounce>
        <Main
          left={
            <AsideLeft />
          }
          right={
            <AsideRight />
          }
        />
        <Bounce top>
          <Footer />
        </Bounce>
      </div>
    )
  }
}


export default App;
