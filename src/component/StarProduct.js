import React from 'react'
import "../styles/StarProduct.css"
const StarProduct = ({starProduct}) => {
  return (
    <div className="starProduct">
        <div>
            <img src= {starProduct[0].image} alt="" />
        </div>
        <div>
            <img src={starProduct[1].image} alt="" />
            <img src={starProduct[2].image} alt="" />
            <img src={starProduct[3].image} alt="" />
        </div>
    </div>
  )
}

export default StarProduct