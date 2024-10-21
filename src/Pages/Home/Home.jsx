import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import RowCard from "../../components/RowCard/RowCard";

const Home = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    FetchCat();
  }, []);

  const FetchCat = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <RowCard endpoint={`/products`} head='all' />
      {categories.map((category) => (
        <div style={{ overflowX: "auto" }} key={category}>
          <RowCard endpoint={`/products/category/${category.toLowerCase()}`} head={category} />
        </div>
      ))}
    </>
  );
};

export default Home;
