"use client"
import React from 'react'
import { StyledPaper } from './style';

const Paper = ({ textPaper, variant }) => {
  return (
    <StyledPaper variant={variant}>
      <p>{textPaper}</p>
    </StyledPaper>
  )
}

export default Paper;