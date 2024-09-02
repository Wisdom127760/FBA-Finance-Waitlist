import React from "react";
import Logo from "./Logo";
//import Address from "./Address";
//import TryFBAFinance from "./TryFBAFinance";
//import GetStartedButton from "./GetStartedButton";
import FooterCallToAction from "./FooterCallToAction";

const FooterBottom = () => {
  return (
    <div className=" mt-014 w-full max-w-[1225px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-50 max-md:flex-col max-md:gap-4">
        <Logo />
        {/* <Address /> */}
        {/* <TryFBAFinance />
        <GetStartedButton /> */}
        <div className="px-42" />
        <FooterCallToAction />
      </div>
    </div>
  );
};

export default FooterBottom;
