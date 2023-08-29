import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

const LinksList = () => {
  return (
    <div className="links">
      <Link href="#">
        <Image
          src="/assets/icon-person.png"
          width={20}
          height={19}
          alt=""
          loading="lazy"
        />
        <span>Profile</span>
      </Link>
      <Link href="#">
        <Image
          src="/assets/icon-chat.png"
          width={20}
          height={19}
          alt=""
          loading="lazy"
        />
        <span>Message</span>
      </Link>
      <Link href="#">
        <Image
          src="/assets/icon-favorite.png"
          width={20}
          height={19}
          alt=""
          loading="lazy"
        />
        <span>Orders</span>
      </Link>
      <Link href="/Cart">
        <Image
          src="/assets/icon-shopping-cart.png"
          width={20}
          height={19}
          alt=""
          loading="lazy"
        />
        <span>My card</span>
      </Link>
    </div>
  );
};

export default LinksList;
