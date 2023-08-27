import Image from "next/image";

const AccountImage = () => {
  return (
    <div className="avatar">
      <Image
        src="/assets/Avatar.jpg"
        width={44}
        height={44}
        alt="landing-image"
        loading="lazy"
      />
    </div>
  );
};

export default AccountImage;
