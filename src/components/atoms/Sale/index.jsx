"use client"
import { StyleSale } from "./style.js";

const Sale = ({ sale }) => {
  return (
    <StyleSale>
      <span>{sale}</span>
    </StyleSale>
  )
}

export default Sale;