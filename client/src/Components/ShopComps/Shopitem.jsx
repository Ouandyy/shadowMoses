import React, { Component } from 'react';
import cart from '../NavComps/Cart.js';

class Item extends Component {
constructor(props) {
  super(props);
  this.state = {
    photo: this.props.item.preview1,
    photo2: this.props.item.preview2
  }
  this.onHover = this.onHover.bind(this);
  this.leaveHover = this.leaveHover.bind(this); 
  this.onClickHandler = this.onClickHandler.bind(this); 
}

onHover (e) {
  e.target.src = this.state.photo2
}

leaveHover (e) {
  e.target.src = this.state.photo
}

onClickHandler (e) {
  cart.totalItems.push([this.props.item.name, this.props.item.price, this.props.item.preview1])
}


  render () {
    return (
    <div className="itemContainer">
    <div className="itemImg">
    <img id='previewimg' src={this.state.photo} onMouseEnter={this.onHover} onMouseLeave={this.leaveHover}></img>
    <div>{this.props.item.name}</div>
    <div>${this.props.item.price}</div>
    <button id='CartButton' onClick={this.onClickHandler}>Add to cart</button>
    </div>
    </div>
  )}
}
  


export default Item