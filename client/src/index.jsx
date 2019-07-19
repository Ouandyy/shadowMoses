import ReactDOM from 'react-dom';
import React from 'react';
import Navbar from './headerComp/Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component { 
  constructor(props) {
    super(props)
  }


  render () {
    return (
      <Navbar/>
    )
  }
    
  }
ReactDOM.render(<App/>, document.getElementById('app'));