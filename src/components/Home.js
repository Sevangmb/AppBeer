import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h1>Welcome to Beer World!</h1>
          <p>Discover a wide variety of beers from around the world. Explore, taste, and enjoy!</p>
          <img src="https://img.icons8.com/plasticine/100/000000/beer-bottle.png" alt="Beer Bottle" style={{ margin: '20px 0' }}/>
          <br />
          <Link to="/AffBeer">
            <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Explore Beers</button>
          </Link>
        </div>
    );
  }
}

export default Home;