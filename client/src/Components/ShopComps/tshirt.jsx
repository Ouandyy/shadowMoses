import React, { Component } from 'react';
import Shopitem from './Shopitem.jsx';
import axios from 'axios'
class Tshirt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tshirt: []
    }
  }

 componentDidMount() {
    axios.get(`/data/info/inventory/tshirt`)
      .then(({data})=>{
        this.setState({tshirt: data})
      })
      .catch((err)=>{
        console.log(err,'error')
      });
  }


  render() {
    if (this.props.name === 'tshirt') {
      return (  
        <div className="shopping">
        {this.state.tshirt.map((item, index) => {
          return <Shopitem item={item} key={index}/>
        })}
        </div>
        
      )
    } else {
      return null
    }
  }
}

export default Tshirt;