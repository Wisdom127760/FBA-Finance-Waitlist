"use client";
import dynamic from "next/dynamic";

const NavPanelClient = dynamic(() => import("./NavPanel"), { ssr: false });

const NavPanelWrapper = (props) => {
  return <NavPanelClient {...props} />;
};

export default NavPanelWrapper;
