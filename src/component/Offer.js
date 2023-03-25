import React from 'react'

const Offer = ({src,i}) => {
  return (
    <a href="">
        <img src={src} alt={i + 1} />
    </a>
  )
}

export default Offer