import { useEffect, useState, useRef, useCallback } from "react";
import ProductCard from '../ProductCard/ProductCard';
import './RowCard.css'; // Import the CSS file
import { Base_url } from "../../constant/base";

function RowCard({ endpoint, head }) {
  const [products, setProducts] = useState([]);
  const rowContainerRef = useRef(null);

  // Define FetchProduct using useCallback to memoize the function
  const FetchProduct = useCallback(async () => {
    try {
      const response = await fetch(`${Base_url}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [endpoint]); 

  useEffect(() => {
    FetchProduct();
  }, [FetchProduct]); 

  // Scroll the container to the left
  const scrollLeft = () => {
    rowContainerRef.current.scrollBy({
      left: -350, 
      behavior: 'smooth'
    });
  };
  

 

  // Scroll the container to the right
  const scrollRight = () => {
    rowContainerRef.current.scrollBy({
      left: 350, 
      behavior: 'smooth'
    });
  };

  console.log(products)

  return (
    <div className="rowCardWrapper">
      <div className="scrollButtons">
        <button className="scrollBtn" onClick={scrollLeft}>{"<"}</button>
        <button className="scrollBtn" onClick={scrollRight}>{">"}</button>
        {/* Header on the right side */}
        <p className="header_row">{head}</p>
      </div>

      {/* Row Container for products */}
      <div className='rowContainer' ref={rowContainerRef}>
        {products.map((product) => (
          <ProductCard key={product.id} prd={product} />
        ))}
      </div>
    </div>
  );
}

export default RowCard;
