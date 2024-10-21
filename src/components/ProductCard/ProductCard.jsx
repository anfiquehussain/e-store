import React from 'react';
import './ProductCard.css'; // Import the CSS file
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ProductCard({ prd }) {
  return (
    <div className="productCard">
      
      <p className="productRCategory" >
        {prd.category}
      </p>
      <img src={prd.image} alt={prd.title} className="productImage" />

      <p className='productTitle'>
        <Link to={`/product/${prd.id}`}>{prd.title}</Link>
      </p>
      <p className="productPrice">${prd.price}</p>
      <p className="productRating">
        <span className='RatingStar'><FaStar /></span>
        {prd.rating.rate} ({prd.rating.count} reviews)
      </p>
      <button className="productButton">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
