'use client'
import React, {useEffect, useState} from 'react'
import { StyledFloading } from './style';

const FloatingButton = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <StyledFloading>
      {scrollToTop && (
        <button onClick={scrollUp}>Up</button>
      )}
    </StyledFloading>
  )
}

export default FloatingButton;