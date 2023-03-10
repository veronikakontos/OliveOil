import React from 'react';


const Header = (props) => {
    return (
        <div>
            <header class="header">
                <a href="https://www.instagram.com/kontos_oliveoil/" class="logo">
                    <img src="./images/logonew.png" width="160px" height="120px" alt="logo"/>
                </a>
                <nav class="navbar">
                    <a href="/">HOME</a>
                    <a href="/about">ABOUT</a>
                    <a href="/products">PRODUCTS</a>
                    <a href="/review">REVIEW</a>
                    <a href="/contact">CONTACT</a>
                </nav>

                <div class="icons">
                    <div class="fas fa-search" id="search-btn"></div> 
                    <div class="fas fa-shopping-cart" id="cart-btn">🛒</div>
                    <div class="fas fa-bars" id="menu-btn"></div>
                </div> 

                {/* <div class="search-form">
                    <input type="search" id="search-box" placeholder="search...."/>
                    <label for="search-box" class="fas fa-search"></label>
                </div> */}
            </header>
        </div>
    )
}

export default Header;