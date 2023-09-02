/* eslint-disable @next/next/no-img-element */
import { ButtonComponent } from "./style";

const Button = ({
  type,
  variant,
  color,
  borderColor,
  onClick,
  size,
  text,
  width,
  imageSrc,
  imageHidden,
  padding,
  gap,
  order
}) => {
  return (
    <ButtonComponent as='button'
      type={type ? type : "button"}
      variant={variant}
      color={color}
      borderColor={borderColor}
      onClick={onClick}
      size={size}
      width={width}
      padding={padding}
      gap={gap}
    >
      <img
        src={imageSrc}
        alt="image"
        className={`${imageHidden ? "image__hidden" : order ? "order" : ""}`}
      />
      {text}
    </ButtonComponent>
  );
};

export default Button;
