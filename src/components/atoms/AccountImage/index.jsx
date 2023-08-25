import Image from "next/image";
import accountImage from "../../../../public/assets/Avatar.jpg";

const AccountImage = () => {
  return (
    <div className="avatar">
      <Image
        src={accountImage}
        width={44}
        height={44}
        alt="landing-image"
        loading="lazy"
      />
    </div>
  );
};

export default AccountImage;
