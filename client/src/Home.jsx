import React, { Component } from 'react';

const Home = (props) => {
  if (props.name ==='home') {
    return (
      <div id='homeImgContainer'>
        <img id='homepageImg' src='https://static.wixstatic.com/media/dcd1e8_40752451bae140cc8e9a2d295ab528ed~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_1920,h_1920,al_b,q_85,usm_0.66_1.00_0.01/dcd1e8_40752451bae140cc8e9a2d295ab528ed~mv2_d_3000_3000_s_4_2.webp'></img>
      </div>
    )
  } else {
    return (
      null
    )
  }
}

export default Home;