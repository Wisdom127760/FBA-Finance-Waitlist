import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavPanel = ({ onLinkClick }) => {
  const navItems = [
    {
      label: "About Us",
      hasDropdown: false,
      id: "about-us",
      externalLink: false,
    },
    {
      label: "How It Works",
      hasDropdown: false,
      id: "how-it-works",
      externalLink: false,
    },
    {
      label: "Documentation",
      hasDropdown: false,
      id: "https://docs.fba.finance/",
      externalLink: true,
    },
    // {
    //   label: "Blog",
    //   hasDropdown: false,
    //   id: "https://fba-blog-git-main-tegaeths-projects.vercel.app/",
    //   externalLink: true,
    // },
    {
      label: "Contact",
      hasDropdown: false,
      id: "contact",
      externalLink: false,
    },
  ];

  const handleClick = (e, item) => {
    if (onLinkClick) {
      onLinkClick();
    }

    if (!item.externalLink) {
      e.preventDefault();
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="flex overflow-hidden flex-col justify-center self-stretch px-9 py-6 bg-white rounded-[44px] text-zinc-800 max-md:px-5 max-md:max-w-full">
      <ul className="flex flex-wrap gap-7 items-start max-md:max-w-full">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.externalLink ? item.id : `#${item.id}`}
              className="flex gap-1 items-center transition duration-300 ease-in-out transform hover:scale-105 hover:text-violet-400"
              onClick={(e) => handleClick(e, item)}
              target={item.externalLink ? "_blank" : undefined}
              rel={item.externalLink ? "noopener noreferrer" : undefined}
            >
              {item.label}
              {item.hasDropdown && (
                <Image
                  src="/assets/images/dropdown.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[19px] transition duration-300 ease-in-out transform hover:scale-105 hover:text-violet-400"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPanel;
