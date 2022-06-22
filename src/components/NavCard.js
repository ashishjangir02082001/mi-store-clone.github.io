import React from 'react'
import '../styles/NavCard.css'

const NavCard = ({index, name, price, image}) => {
  return (
    <div className="NavCard">
        <img src={image} alt={`${index} Phone`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default NavCard