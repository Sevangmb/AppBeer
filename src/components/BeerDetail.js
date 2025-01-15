import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BeerDetail = ({ beerId }) => {
  const [beer, setBeer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (beerId) {
      axios.get(`https://api.punkapi.com/v2/beers/${beerId}`)
        .then(response => {
          if (response.data && response.data.length > 0) {
            setBeer(response.data[0]);
          } else {
            setError('Beer not found');
          }
        })
        .catch(error => {
          setError('Error fetching the beer details');
          console.error('Error fetching the beer details:', error);
        });
    }
  }, [beerId]);

  if (error) {
    return <div style={{ textAlign: 'center', color: 'red' }}>{error}</div>;
  }

  if (!beer) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{beer.name}</h2>
      <img src={beer.image_url} alt={beer.name} style={{ height: '200px' }} />
      <p>{beer.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {beer.ingredients.malt.map((malt, index) => (
          <li key={index}>{malt.name}</li>
        ))}
        {beer.ingredients.hops.map((hop, index) => (
          <li key={index}>{hop.name}</li>
        ))}
        <li>Yeast: {beer.ingredients.yeast}</li>
      </ul>
      <h3>Brewing Process</h3>
      <p>{beer.brewers_tips}</p>
      <h3>Food Pairings</h3>
      <ul>
        {beer.food_pairing.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
};

export default BeerDetail;
