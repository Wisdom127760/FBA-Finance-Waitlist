import React from "react";
import FooterColumn from "./FooterColumn";
import StayTuned from "./StayTuned";
import FooterDivider from "./FooterDivider";
import FooterBottom from "./FooterBottom";
import LastFooter from "./LastFooter";

const Footer = () => {
  const footerColumns = [
    {
      title: "About",
      items: ["Features", "Templates", "Integrations", "Team"],
    },
    {
      title: "How It Works",
      items: ["Support", "Help Center", "Contact Us"],
    },
    {
      title: "Funding Options",
      items: ["Ebooks", "Infographics", "Tools", "Videos", "Podcasts"],
    },
    {
      title: "Blog",
      items: [
        "Credit analysis ?",
        "How Credit Works",
        "Stellar Kickstart Camp",
      ],
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center "
    >
      <footer className="flex overflow-hidden flex-col items-center pr-10 pb-16 pl-020 max-md:px-5">
        <div className="flex flex-wrap gap-10 items-start self-end w-full max-w-[1283px] max-md:max-w-full">
          <div className="flex-auto self-end mt-19 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-05 max-md:flex-col">
              {footerColumns.map((column, index) => (
                <FooterColumn
                  key={index}
                  title={column.title}
                  items={column.items}
                />
              ))}
            </div>
          </div>
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
