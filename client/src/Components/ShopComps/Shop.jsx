import React, { Component } from 'react';
import Shopitem from './Shopitem.jsx';
import axios from 'axios'
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    axios.get('/data/info/inventory')
      .then(({data})=>{
        this.setState({items: data})
      })
      .catch((err)=>{
        console.log(err,'error')
      })
  }

  render() {
    if (this.props.name === 'all') {
      return (
        <div className="shopping">
        {this.state.items.map((item, index) => {
          return <Shopitem item={item} key={index}/>
        })}
        </div>
        
      )
    }else {
      return null
    }
  }
}

export default Shop;