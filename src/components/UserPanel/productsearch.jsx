import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const searchProduct = () => {

    fetch(`https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Products?${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {

          navigate('/Shop');
        } else {

          navigate('/Contact');
        }
      })
      .catch(error => {
        console.error('API bilan bog‘lanishda xato:', error);

        navigate('/About');
      });
  };

  return (
    <div class="input-container">
    <input type="text" placeholder="Search" class="text-input"   value={query}
       onChange={e => setQuery(e.target.value)}/>
    <button class="input-button" onClick={searchProduct} ><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>

  );
};

export default ProductSearch;