import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = ({start}) => {
  return (
    <Carousel fade prevLabel= "" nextLabel= "" interval={3000} variant = "black">
        {
          start.map((ele,i)=>{
            
            return (
              <Carousel.Item>
              <div key = {i + 1}>
                <img
                className='sliderimage'
                 src={ele}
                 alt="" 
                />
              </div>
              </Carousel.Item>
            )
          })
        }
        
    </Carousel>
  )
}
export default Slider
