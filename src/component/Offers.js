import React from 'react'
import Offer from "./Offer.js"
import "../styles/offer.css"

const Offers = ({offer}) => {
  return (
    <div>
        <div className="offersSection">
            {
                offer.map((ele,i)=>{
                    return <Offer key = {i + 1} src = {ele.image}/>
                })
            }

        </div>
    </div>
  )
}

export default Offers