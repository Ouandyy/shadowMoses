import React, { Component } from 'react';

class Item extends Component {
constructor(props) {
  super(props);
  this.state = {
    photo: this.props.item.preview1,
    photo2: this.props.item.preview2
  }
  this.onHover = this.onHover.bind(this);
  this.leaveHover = this.leaveHover.bind(this); 
}

onHover (e) {
  e.target.src = this.state.photo2
}

leaveHover (e) {
  e.target.src = this.state.photo
}


  render () {
    return (
    <div className="itemContainer">
    <div className="itemImg">
    <img src={this.state.photo} onMouseEnter={this.onHover} onMouseLeave={this.leaveHover}></img>
    <div>{this.props.item.name}</div>
    <div>${this.props.item.price}</div>
    </div>
    </div>
  )}
}
  


export default Item