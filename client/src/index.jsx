import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Navbar from './Components/NavComps/Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/ShopComps/Shop.jsx';
import Footer from './Components/FootComps/FootComps.jsx';
import Tshirt from './Components/ShopComps/tshirt.jsx';
import Sweater from './Components/ShopComps/Sweater.jsx';
import Japan from './Components/Events/Japan.jsx';
import Uk from './Components/Events/Uk.jsx';
import Usa from './Components/Events/Usa.jsx';
import Home from './Home.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'home'
    }
    this.navClick = this.navClick.bind(this);
    this.homeClick = this.homeClick.bind(this);
  }

  navClick(e) {
    this.setState({ name: e.target.id });
  }
  homeClick() {
    this.setState({ name: 'home' });
  }

  render() {
    return (
      <div>
        <Navbar clicker={this.navClick} home={this.homeClick}/>
        <Home name={this.state.name}/>
        <Shop name={this.state.name}/>
        <Tshirt name={this.state.name}/>
        <Sweater name={this.state.name}/>
        <Japan name={this.state.name}/>
        <Usa name={this.state.name}/>
        <Uk name={this.state.name}/>

        <Footer/>
      </div>

    )
  }

}
ReactDOM.render(<App />, document.getElementById('app'));