import React from 'react'
import "../index.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex-container">
          <div className="logo-container">
            <a href="#" className="logo"><span>send</span>FREIGHT </a>
          </div>
          <nav className="nav">
            <form>
              <input type="text" id="search-input" placeholder="Search" />
              <button type="submit"> <i className="fa fa-search"></i> </button>
            </form>
            <div className="action-btns">
              <button className="request"><a href="#">Request Quote</a></button>
              <button className="book"><a href="#">Book Shipment</a></button>
            </div>
          </nav>
          <div className="toggler">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
