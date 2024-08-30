import React from "react";
import StayTuned from "./StayTuned";
import FooterDivider from "./FooterDivider";
import FooterBottom from "./FooterBottom";
import LastFooter from "./LastFooter";

const FooterColumn = ({ title, items }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="flex flex-col gap-2">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black-100 transition duration-300 ease-in-out transform hover:scale-105 hover:text-violet-400"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerColumns = [
    {
      title: "About",
      items: [
        {
          text: "What is FBA Finance all about?",
          url: "https://docs.fba.finance/introduction/quickstart",
        },
        {
          text: "The problem we're solving",
          url: "https://fbafin.com/problem",
        },
        {
          text: "Our mission and vision",
          url: "https://docs.fba.finance/introduction/our-mission-and-vision",
        },
        {
          text: "Features",
          url: "https://docs.fba.finance/introduction/features",
        },
      ],
    },
    {
      title: "How It Works",
      items: [
        {
          text: "Understanding ROSCAs",
          url: "https://docs.fba.finance/understanding-roscas/editor",
        },
        {
          text: "Traditional vs. FBA Finance’s ROSCAs",
          url: "https://docs.fba.finance/understanding-roscas/markdown",
        },
        {
          text: "Pool Management",
          url: "https://docs.fba.finance/pool-management/joining-existing-pools",
        },
        { text: "Tools", url: "https://docs.fba.finance/user-guide/tools" },
      ],
    },
    {
      title: "Funding Options",
      items: [
        {
          text: "FBA Pool",
          url: "https://docs.fba.finance/user-guide/fba-pool",
        },
        {
          text: "Marketplace",
          url: "https://docs.fba.finance/fba-finance-marketplace/overview-of-the-marketplace",
        },
        {
          text: "The FBA Algorithm",
          url: "https://docs.fba.finance/the-fba-algorithm/what-is-the-fba-algorithm",
        },
        {
          text: "Fees and Charges",
          url: "https://docs.fba.finance/fees-and-charges/overview-of-fee-structure",
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          text: "Education and Mentorship",
          url: "#",
        },
        { text: "FBA Affiliate Program", url: "https://fbafin.com/affiliate" },
        { text: "Legal & Compliance Center", url: "#" },
      ],
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full"
    >
      <footer className="flex overflow-hidden flex-col items-center px-10 py-16 w-full max-w-7xl">
        <div className="flex flex-wrap gap-010  items-start justify-between w-full">
          {footerColumns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              items={column.items}
            />
          ))}
          <StayTuned />
        </div>
        <FooterDivider />
        <FooterBottom />
        <FooterDivider />
        <LastFooter />
      </footer>
    </section>
  );
};

export default Footer;
