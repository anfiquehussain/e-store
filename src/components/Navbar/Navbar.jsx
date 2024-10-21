import { useEffect, useState } from "react";
import './Navbar.css';
import { CiMenuBurger } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const [cat, setCat] = useState([]);
  const { logout } = useAuth(); 


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
      setCat(data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); 
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link className="nav-link" to='/'><p>E-Shop</p></Link>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <CiMenuBurger />
          </div>
          <div className={`nav-elements ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <p >
                  <input type="text" className='search-bar' placeholder='Serching for'/> 
                  <select name="" className="catagory" id="">

                    <option value="">All Catagories</option>
                    {cat.map((c)=>{
                      return <option value={c}>{c}</option>
                    })}
                  </select>
                </p>
              </li>
              <li>
                <p onClick={logout} >Logout</p>
              </li>
              <li>
                <p><FaRegUser/></p>
              </li>
              <li>
                <p><IoCartOutline size={20}/></p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
