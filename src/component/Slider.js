import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

const Slider = () => {
  return (
    <Carousel>
        <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0i6Jjb_pMB3FBgL5XDr4z3H14afBtr-Befg&usqp=CAU" alt="" />
        <Carousel.Caption>
            <h3>Making the Slider of mi website</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Slider