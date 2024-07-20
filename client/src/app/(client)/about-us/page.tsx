import AboutUsInfoCard from "@/components/cards/AboutUsInfoCard";
import OffersCard from "@/components/cards/OffersCard";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black">
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

      <div className="flex flex-col p-3 bg-black ">
        <div className="text-center font-bold text-[45px] text-orange">
          WHAT WE OFFER
        </div>
        <div className="flex flex-col gap-6 p-3">
          <OffersCard title="Sleeping Reyver" description="DESCRIPTION 1" />
          <OffersCard
            title="Sleeping Reyver"
            description="DESCRIPTION 2"
            reverse={true}
          />
          <OffersCard title="Sleeping Reyver" description="DESCRIPTION 3" />
          <OffersCard
            title="Sleeping Reyver"
            description="DESCRIPTION 4"
            reverse={true}
          />
          <OffersCard title="Sleeping Reyver" description="DESCRIPTION 5" />
          <OffersCard
            title="Sleeping Reyver"
            description="DESCRIPTION 6"
            reverse={true}
          />
        </div>
      </div>
      {/* -----------------------------------CONTACT/ADDITIONAL INFO------------------------------------------------------ */}
      <div className="flex justify-center items-center w-full h-[70vh] bg-black ">
        <AboutUsInfoCard />
      </div>
    </div>
  );
};

export default AboutUs;
