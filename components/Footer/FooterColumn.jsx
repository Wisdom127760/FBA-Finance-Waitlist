import React from "react";

const FooterColumn = ({ title, items }) => {
  return (
    <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start text-base whitespace-nowrap text-zinc-800 max-md:mt-10">
        <h3 className="text-lg font-semibold text-zinc-800">{title}</h3>
        {items.map((item, index) => (
          <div key={index} className={index === 0 ? "mt-8" : "mt-06"}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
