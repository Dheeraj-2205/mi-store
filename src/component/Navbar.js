import React from 'react'
import "../styles/nav.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="logo">
            <Link to="/">
                <img src="" alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Navbar