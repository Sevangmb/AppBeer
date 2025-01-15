import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AffBeer = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching the beers:', error);
      });
  }, []);

  return (
    <div align="center">
      <h2>Affiche les bières</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {beers.map(beer => (
          <div key={beer.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
            <h3>{beer.name}</h3>
            <p>{beer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AffBeer;