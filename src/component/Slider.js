import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = ({start}) => {
  return (
    <Carousel fade>
        {
          start.map((ele,i)=>{
            
            return (
              <Carousel.Item>
              <>
                <img
                className='sliderimage'
                 src={ele}
                 alt="" 
                />
              </>
              </Carousel.Item>
            )
          })
        }
        
    </Carousel>
  )
}
export default Slider
