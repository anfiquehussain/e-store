import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Base_url } from '../../constant/base';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        FetchProduct();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [products]);

    const FetchProduct = async () => {
        try {
            const response = await fetch(`${Base_url}/products?limit=3`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            setError("Failed to load products. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + products.length) % products.length
        );
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="carousel">
            {products.length > 0 && (
                <div className="carousel-item">
                    <img
                        src={products[currentIndex].image}
                        alt={products[currentIndex].title}
                        className="product-image"
                    />
                    <div className="product-info">
                        <p className="category">{products[currentIndex].category}</p>
                        <h2 className="title">{products[currentIndex].title}</h2>
                            <p className="price">${products[currentIndex].price.toFixed(2)}</p>
                        <p className="rating"><span className='RatingStar'><FaStar /></span>  {products[currentIndex].rating.rate} ({products[currentIndex].rating.count} reviews)</p>


                        <Link to={`/product/${products[currentIndex].id}`}>
                            <button className="shop" aria-label="Shop Now">
                                Shop Now
                            </button>
                        </Link>


                    </div>
                </div>
                
            )}
            
            <button className="carousel-button prev" onClick={handlePrevious} aria-label="Previous Product">
                &lt;
            </button>
            <button className="carousel-button next" onClick={handleNext} aria-label="Next Product">
                &gt;
            </button>
        </div>
    );
}

export default Hero;
