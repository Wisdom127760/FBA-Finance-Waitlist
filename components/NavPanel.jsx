import React from "react";
import Image from "next/image";

function NavPanel() {
  const navItems = [
    { label: "About Us", hasDropdown: false },
    { label: "How It Works", hasDropdown: false },
    { label: "Ecosystem", hasDropdown: true },
    { label: "Blog", hasDropdown: false },
    { label: "Contact", hasDropdown: false },
  ];

  return (
    <nav className="flex overflow-hidden flex-col justify-center self-stretch px-9 py-6 bg-white rounded-[44px] text-zinc-800 max-md:px-5 max-md:max-w-full">
      <ul className="flex flex-wrap gap-7 items-start max-md:max-w-full">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href="#" className="flex gap-1 items-center">
              {item.label}
              {item.hasDropdown && (
                <Image
                  loading="lazy"
                  src="/assets/images/dropdown.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[19px]"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavPanel;
