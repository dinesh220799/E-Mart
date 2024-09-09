import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="navSection">
      <div className="title">
        <h2>E-Mart</h2>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for products" />
      </div>
      <div className="user">
        <div className="userDetails">
          SignIN/signUP
        </div>
        <Link to='cart'>
        <div className="cart">
          Cart
        </div>
        </Link>


      </div>
    </div>
    <div className="subMenu">
      <ul>
        <Link to='/mobiles'>
        <li>Mobiles</li>
        </Link>
        <Link to='/computers'>
        <li>Computers</li>
        </Link>
        <Link to='/fridges'>
        <li>Fridge</li>
        </Link>
        <Link to='/watches'>
        <li>Watches</li>
        </Link>
        <Link to='/men'>
        <li>Men Fashion</li>
        </Link>
        <Link to='/woman'>
        <li>Woman Fashion</li>
        </Link>
        <Link to='/furniture'>
        <li>Furniture</li>
        </Link>
        <Link to='/ac'>
        <li>AC</li>
        </Link>
        <Link to='/kitchen'>
        <li>Kitchen</li>
        </Link>
        <Link to='/speakers'>
        <li>Speaker</li>
        </Link>
        <Link to='/tv'>
        <li>Tv</li>
        </Link>
      </ul>
    </div>
    </>
  )
}

export default NavBar