import React from "react";
import Link from "next/link";

const AuthorInfo = ({ name, title, link }) => {
  // Split the title by the first comma
  const [titleBeforeComma, titleAfterComma] = title.split(",");

  return (
    <div>
      <h4 className="text-white font-bold">{name}</h4>
      <p className="text-indigo-200 text-sm">
        {titleBeforeComma},{/* Render the part after the comma as a link */}
        {titleAfterComma && link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {titleAfterComma}
          </Link>
        ) : (
          titleAfterComma // Just render the text if no link is provided
        )}
      </p>
    </div>
  );
};

export default AuthorInfo;
