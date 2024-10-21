import React from 'react';
import './Fotter.css'; // Importing the CSS file

function Fotter() {
    return (
        <footer className="fotter-container">
            <div className="fotter-top">
                <div className="fotter-column">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="/about">Our Story</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>
                <div className="fotter-column">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="/help">Help Center</a></li>
                        <li><a href="/returns">Returns</a></li>
                        <li><a href="/shipping">Shipping Info</a></li>
                    </ul>
                </div>
                <div className="fotter-column">
                    <h4>Contact Us</h4>
                    <p>Email: support@ecommerce.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>

            </div>
            <div className="fotter-bottom">
                <p>&copy; 2024 E-Commerce Platform. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Fotter;
