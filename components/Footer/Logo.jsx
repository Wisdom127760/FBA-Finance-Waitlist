import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
      <div className="flex gap-1 items-center  text-lg font-bold text-indigo-600 whitespace-nowrap max-md:mt-10">
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo_fba.svg"
            alt="logo"
            width={120}
            height={30}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
