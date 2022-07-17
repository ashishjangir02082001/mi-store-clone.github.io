import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = ({banner}) => {
  return (
    <Carousel fade>
        {banner.map((item, index)=>(
            <Carousel.Item key={item.image} id="banner" interval={5000} keyboard={true}>
                <img src={item.image} alt={`${index} banner`} className="d-block w-100" id="bannerImage" />
                <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.source}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default Banner