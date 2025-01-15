import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>About Beer World</h2>
          <p>Beer World is an application designed to help you explore a wide variety of beers from around the globe. Whether you're a beer enthusiast or just curious, this app provides detailed information about different beers, including their ingredients, brewing process, and ideal food pairings.</p>
          <p>The app fetches data from the PunkAPI, a comprehensive database of beers, to ensure you have access to accurate and up-to-date information. You can browse through the list of beers, view detailed information about each one, and even find recommendations for food pairings.</p>
          <p>To get started, simply navigate to the 'Explore Beers' section and dive into the world of beers. Enjoy your journey through the diverse and exciting world of beer!</p>
        </div>
    );
  }
}

export default About;