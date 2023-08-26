/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "./style.css"

const RecommendedItemCard = ({ imageSrc, imageAlt, price, descProduct }) => {
  return (
    <div className='recommended__card'>
      <img src={imageSrc} alt={imageAlt} />
      <div className="info">
        <span>{price}</span>
        <p>{descProduct}</p>
      </div>
    </div>
  )
}

export default RecommendedItemCard;