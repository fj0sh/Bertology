import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  name: string;
}

const LinkButton = (props: Props) => {
  const { href, name } = props;

  return (
    <Link
      href={href}
      className={`border-none text-white p-2 rounded-lg text-[20px] w-[150px] flex items-center justify-center bg-orangePrimary `}
    >
      {name}
    </Link>
  );
};

export default LinkButton;
