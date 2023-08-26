/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "./style.css";

const SuppliersregoinCard = ({ imageSrc, countryName, countryEmail }) => {
  return (
    <div className='suppliers__card'>
      {/* <img src={imageSrc} alt="Flag" /> */}
      <div className="info">
        <p>{countryName}</p>
        <span>{countryEmail}</span>
      </div>
    </div>
  )
}

export default SuppliersregoinCard;