import Image from "next/image";
import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <div className="flex gap-3">
      <ul className="flex gap-5">
        <li>
          <Link href="https://t.me/rangatechnologies">
            <Image
              src="/assets/social/telegram.png"
              alt="telegram-icon"
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li>
          <Link href="https://wa.me/message/XEABYADPSDL2D1">
            <Image
              src={"/assets/social/WhatsApp.png"}
              alt="twitter-icon"
              width={40}
              height={40}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
