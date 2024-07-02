import ServiceHomeCard from "@/components/cards/service-Home-card";
import { Divide } from "lucide-react";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* -----------------------------------MAIN------------------------------------------------------ */}

      <div className="h-[93vh] bg-orange text-white flex flex-col gap-10 items-center p-40">
        <p className="font-bold text-[45px]">About Us</p>
        <p className="text-center text-[25px] mx-[5rem] ">
          Bertology envisions being the go-to destination for discerning
          automobile enthusiasts, setting the standard for innovation and
          excellence in the car accessories industry. We aspire to continuously
          evolve, adapting to the dynamic needs of our tech-savvy audience while
          remaining true to our commitment to quality and uniqueness.
        </p>
      </div>

      {/* -----------------------------------OFFERS------------------------------------------------------ */}

      <div className="flex flex-col p-3">
        <div className="text-center font-bold text-[45px]">WHAT WE OFFER</div>
        <div className="flex flex-col gap-6">
          <ServiceHomeCard title="TITLE 1" description="DESCRIPTION 1" />
          <ServiceHomeCard
            title="TITLE 2"
            description="DESCRIPTION 2"
            reverse={true}
          />
          <ServiceHomeCard title="TITLE 3" description="DESCRIPTION 3" />
          <ServiceHomeCard
            title="TITLE 4"
            description="DESCRIPTION 4"
            reverse={true}
          />
          <ServiceHomeCard title="TITLE 6" description="DESCRIPTION 5" />
          <ServiceHomeCard
            title="TITLE 7"
            description="DESCRIPTION 6"
            reverse={true}
          />
        </div>
      </div>
      {/* -----------------------------------CONTACT/ADDITIONAL INFO------------------------------------------------------ */}
      <div className="h-[50vh]"></div>
    </div>
  );
};

export default AboutUs;
