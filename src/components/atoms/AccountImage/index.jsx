/* eslint-disable @next/next/no-img-element */
import { StyledAvatar } from "./style";

const AccountImage = () => {
  return (
    <StyledAvatar>
      <img src="/assets/Avatar.jpg" alt="avatar" loading="lazy"/>
    </StyledAvatar>
  );
};

export default AccountImage;
