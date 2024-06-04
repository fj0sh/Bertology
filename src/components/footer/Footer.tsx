import React from "react";

type Props = {
  className?: string;
};

const Footer = (props: Props) => {
  return (
    <div className="flex w-full">
      <div className="w-[34%] text-center bg-slate-100">Logos</div>
      <div className="w-[34%] text-center bg-slate-300">Links</div>
      <div className="w-[34%] text-center bg-slate-400">Medias</div>
    </div>
  );
};

export default Footer;
