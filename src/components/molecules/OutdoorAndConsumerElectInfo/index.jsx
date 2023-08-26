"use client"
import Image from 'next/image';
import { StyledHomeAndConsumer } from "./style.js";

const OutdoorAndConsumerInfo = ({ title, imageSrc }) => {
  return (
    <StyledHomeAndConsumer>
      <Image src={imageSrc} width={245} height={245} alt="HomeAndOutdoor-image" loading="lazy" />
      <div className="text">
        <h2>{title}</h2>
      </div>
    </StyledHomeAndConsumer>
  )
}

export default OutdoorAndConsumerInfo;