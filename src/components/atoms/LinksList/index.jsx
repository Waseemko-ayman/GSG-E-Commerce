import React from "react";
import Link from "next/link";
import Image from "next/image";
import IconPerson from "../../../../public/assets/icon-person.png"
import IconChat from "../../../../public/assets/icon-chat.png"
import IconFavorite from "../../../../public/assets/icon-favorite.png"
import IconShoppingCart from "../../../../public/assets/icon-shopping-cart.png"
import "./style.css";

const LinksList = () => {
  return (
    <div className="links">
      <Link href="#">
        <Image
          src={IconPerson}
          width={20}
          height={19}
          alt=""
          loading="lazy"
        />
        <span>Profile</span>
      </Link>
      <Link href="#">
        <Image
          src={IconChat}
          width={20}
          height={19}
          alt=""
          loading="lazy"
        />
        <span>Message</span>
      </Link>
      <Link href="#">
        <Image
          src={IconFavorite}
          width={20}
          height={19}
          alt=""
          loading="lazy"
        />
        <span>Orders</span>
      </Link>
      <Link href="#">
        <Image
          src={IconShoppingCart}
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
