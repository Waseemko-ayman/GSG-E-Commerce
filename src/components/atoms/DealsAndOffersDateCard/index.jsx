"use client"
import { StyledDateCard } from './style.js';

const OffersDateCards = ({ dateNumber, dateName }) => {
  return (
    <StyledDateCard>
      <span>{dateNumber}</span>
      <span>{dateName}</span>
    </StyledDateCard>
  )
}

export default OffersDateCards;