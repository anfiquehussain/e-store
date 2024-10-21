import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import RowCard from "../../components/RowCard/RowCard";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchProduct();
  }, []);

  const FetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data); // Make sure 'setProducts' is defined in your context
    } catch (error) {
      console.error("Error fetching products:", error); // Added 'error' to catch block
    }
  };
  console.log(products)


  return (
    <>
    <Navbar/>
    <Hero/>
      {products.map((product)=>{
        
      })}
    <RowCard prd='hallo'/>
    </>
  );
};

export default Home;
