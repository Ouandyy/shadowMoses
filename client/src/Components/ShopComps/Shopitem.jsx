import React, { Component } from 'react';

const item = (props) => {
  return (
    <div className="itemContainer">
    <div className="itemImg">
    <img src={props.item.preview1}></img>
    <div>{props.item.name}</div>
    <div>${props.item.price}</div>
    </div>
    </div>
  )
}

export default item