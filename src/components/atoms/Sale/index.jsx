// "use client"
import React from 'react'
import "./style.css"

const Sale = ({ sale }) => {
  return (
    <div className="sale">
      <span>{ sale }</span>
    </div>
  )
}

export default Sale;