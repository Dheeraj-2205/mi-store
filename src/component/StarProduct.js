import React from 'react'
import "../styles/StarProduct.css"
const StarProduct = ({starProduct}) => {
  return (
    <div className="starProduct">
        <div>
            <img src= {starProduct[0].image} className = "image-1" alt="" />
        </div>
        <div>
            <img src={starProduct[1].image} className = "image-2" alt="" />
            <img src={starProduct[2].image} className = "image-2" alt="" />
            <img src={starProduct[3].image} className = "image-2" alt="" />
        </div>
    </div>
  )
}

export default StarProduct