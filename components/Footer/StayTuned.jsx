import React from "react";
import Image from "next/image";
import Link from "next/link";

const StayTuned = () => {
  return (
    <div className="flex flex-col self-start socials-start text-lg text-zinc-800">
      <div className="flex gap-1 items-start font-semibold">
        <div className="grow self-end mt-19 max-md:mt-10">Stay Tuned</div>
        <img
          loading="lazy"
          src="/assets/images/Vector_16.svg"
          className="object-contain shrink-0 self-start max-w-full aspect-[1.84] stroke-[4px] stroke-violet-400 w-[151px]"
          alt=""
        />
      </div>
      <div className="flex gap-9 self-start mt-8 whitespace-nowrap">
        <Link
          href="https://www.linkedin.com/company/fba-finance/"
          className="flex gap-2 flex-center transform hover:scale-105 hover:text-violet-400"
          target="_blank"
        >
          <Image
            src="/assets/images/mingcute_linkedin-fill.svg"
            alt="Reach us through our Linkedin page"
            width={32}
            height={32}
            className="object-contain"
          />
        </Link>
        <Link
          href="https://x.com/FBA_finance?t=HFkPHPPsLVB-gcWTAykD-A&s=09"
          className="flex gap-2 flex-center transform hover:scale-105 hover:text-violet-400"
          target="_blank"
        >
          <Image
            src="/assets/images/X_Icon.svg"
            alt="Reach us through our X page"
            width={24}
            height={24}
            className="object-contain"
          />
        </Link>
        <Link
          href="https://discord.gg/EVctyr6P"
          className="flex gap-2 flex-center transform hover:scale-105"
          //target="_blank"
        >
          <Image
            src="/assets/images/ic_baseline-discord.svg"
            alt="Join our Discord community"
            width={32}
            height={32}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default StayTuned;
