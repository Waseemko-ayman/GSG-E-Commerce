"use client"
import Image from 'next/image';
import { StyledHomeAndConsumer } from "./style.js";
import Button from '@/components/atoms/Button/index.jsx';

const OutdoorAndConsumerInfo = ({ title, imageSrc }) => {
  return (
    <StyledHomeAndConsumer>
      <Image src={imageSrc} width={245} height={245} alt="HomeAndOutdoor-image" loading="lazy" />
      <div className="text">
        <h2>{title}</h2>
        <Button text="Source now" color="dark" variant="secondary" padding="10px" imageHidden />
      </div>
    </StyledHomeAndConsumer>
  )
}

export default OutdoorAndConsumerInfo;