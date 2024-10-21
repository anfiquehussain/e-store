import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { Base_url } from '../../constant/base';
import Navbar from '../../components/Navbar/Navbar';
import { FaStar } from "react-icons/fa";
import RowCard from '../../components/RowCard/RowCard';
import Fotter from '../../components/Fotter/Fotter';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${Base_url}/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="product-details">
        <div className="image-details-container">
          <p className="product-details-category">Category: <span>{product.category}</span></p>
          <img src={product.image} alt={product.title} className="product-details-image" />
        </div>
        <div className="details-details-container">
          <h2 className="product-details-title">{product.title}</h2>
          <p className="product-details-rating">
            <span className='RatingStar'><FaStar /></span>  Rating: <span>{product.rating.rate}</span> ({product.rating.count} reviews)
          </p>
          <p className="product-details-description">{product.description}</p>
          <p className="product-details-price">Price: <span>${product.price}</span></p>
          <div>
            <button className="product-details-add" aria-label="Shop Now">
              Add to Cart
            </button>
            <button className="product-details-buy" aria-label="Shop Now">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className='related-text'>Related Products</h1>
        <RowCard endpoint={`/products/category/${product.category}`} head={product.category} />
        <Fotter/>
      </div>

    </>
  );
}

export default ProductDetails;
