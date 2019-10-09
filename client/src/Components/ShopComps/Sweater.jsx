import React, { Component } from 'react';
import Shopitem from './Shopitem.jsx';
import axios from 'axios'
class Sweater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sweater: []
    }
  }

 componentDidMount() {
    axios.get(`/data/info/inventory/sweater`)
      .then(({data})=>{
        this.setState({sweater: data})
      })
      .catch((err)=>{
        console.log(err,'error')
      });
  }


  render() {
    if (this.props.name === 'sweater') {
      return (  
        <div className="shoppingSweater">
        {this.state.sweater.map((item, index) => {
          return <Shopitem item={item} key={index}/>
        })}
        </div>
        
      )
    } else {
      return null
    }
  }
}

export default Sweater;