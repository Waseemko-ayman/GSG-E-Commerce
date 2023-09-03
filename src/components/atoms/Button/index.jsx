/* eslint-disable @next/next/no-img-element */
import { ButtonComponent } from "./style";

const Button = ({
  type,
  variant,
  color,
  borderColor,
  onClick,
  disabled,
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
      disabled={disabled}
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
