import ReactDOM from 'react-dom';
import React from 'react';
import Navbar from './Components/NavComps/Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/ShopComps/Shop.jsx';
import Footer from './Components/FootComps/FootComps.jsx'
import Tshirt from './Components/ShopComps/tshirt.jsx'
import Sweater from './Components/ShopComps/Sweater.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.navClick = this.navClick.bind(this);
  }

  navClick(e) {
    this.setState({ name: e.target.id })
  }

  render() {
    return (
      <div>
        <Navbar clicker={this.navClick}/>
        <Shop name={this.state.name}/>
        <Tshirt name={this.state.name}/>
        <Sweater name={this.state.name}/>
        <Footer/>
      </div>

    )
  }

}
ReactDOM.render(<App />, document.getElementById('app'));