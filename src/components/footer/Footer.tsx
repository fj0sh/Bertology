import React from "react";

type Props = {
  className?: string;
};

const Footer = (props: Props) => {
  return (
    <div {...props}>
      <div>Logos</div>
      <div>Links</div>
      <div>Medias</div>
    </div>
  );
};

export default Footer;
