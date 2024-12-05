import AboutUsInfoCard from "@/components/cards/AboutUsInfoCard";
import OffersCard from "@/components/cards/OffersCard";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-background mt-16">
      {/* -----------------------------------MAIN------------------------------------------------------ */}

      <div className="realtive h-[95vh] text-white flex justify-end">
        <Image
          src="/images/aboutv5.svg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="background"
          className="z-10"
        />
        <div className="lg:w-1/2 flex flex-col items-center gap-5 py-[15px] lg:px[10rem] sm:px-[3rem] md:px[2rem]  z-30 text-[25px] lg:pt-[5%] md:pt-[10%] sm:pt-[20%] text-white">
          <p className="font-semibold text-[50px]">
            About <span className="text-orangeRed">Us</span>
          </p>
          <div className=" text-justify">
            <span className="text-orangePrimary font-semibold uppercase text-[30px]">
              {" "}
              Bertology{" "}
            </span>
            envisions being the go-to destination for discerning automobile
            enthusiasts, setting the standard for innovation and excellence in
            the car accessories industry. We aspire to continuously evolve,
            adapting to the dynamic needs of our tech-savvy audience while
            remaining true to our commitment to quality and uniqueness.
          </div>
        </div>
      </div>

      {/* -----------------------------------PROPRIETOR CARDS------------------------------------------------------ */}
      <div className="w-full h-full lg:flex mb-[10rem] justify-center">
        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] sm:justify-center md:justify-center lg:justify-end h-full py-10 flex items-center justify-end ">
          <Image
            src={"/images/owner.svg"}
            alt="Owner"
            sizes={"100%"}
            width={0}
            height={0}
            style={{ width: "60%", height: "60%" }}
          />
        </div>
        <div className="w-full h-full text-white text-[20px] flex flex-col gap-4 justify-center items-center my-auto">
          <p className="text-center font-semibold text-[30px]">
            The <span className="text-orangeRed"> Proprietor</span>
          </p>
          <p className="w-[70%]">
            <span className="text-orangeRed">Nilbert Umaran</span>, the
            visionary founder of Bertology, serves as our esteemed Head
            Technician. His expertise and dedication have been instrumental in
            shaping. Bertology into a premier destination for automotive
            enthusiasts. With a keen understanding of modern car enthusiasts
            {"'"} needs, Nilbert Umaran is the driving force behind our
            commitment to excellence and innovation.
          </p>
        </div>
      </div>
      {/* -----------------------------------OFFERS------------------------------------------------------ */}

      <div className="flex flex-col p-3 ">
        <div className="relative flex flex-col items-center text-center font-bold text-[45px] text-white">
          <hr className="border-orangePrimary w-full absolute top-[50%] border-t-[5px]" />
          <p className="bg-background p-3 w-fit z-10">
            WHAT WE <span className="text-orangePrimary"> OFFER </span>
          </p>
        </div>
        <div className="flex flex-col gap-6 p-3 lg:px-[12rem] sm:px-[3rem] md:px-[2rem]">
          <OffersCard
            image={"/images/service-images/image2.jpg"}
            title="Check-Ups "
            description="Provides home service with check-ups to ensure that customers’ vehicles are not only serviced but also regularly inspected for optimal performance and safety. This comprehensive offering combines convenience with preventive maintenance."
            reverse={true}
          />
          <OffersCard
            image={"/images/service-images/image3.jpg"}
            title="Home Service"
            description="Offers convenient home service options for customers who prefer car maintenance, installations, and troubleshooting to be done at their location. This service ensures accessibility, efficiency, and customer satisfaction without the need to visit a workshop."
          />
          <OffersCard
            image={"/images/service-images/image4.jpg"}
            title="Troubleshooting"
            description="Expert troubleshooting services to diagnose and resolve issues with car systems and accessories. This service ensures that customers receive quick and reliable solutions to maintain optimal performance."
            reverse={true}
          />
          <OffersCard
            image={"/images/service-images/image5.jpg"}
            title="3-Months Warranty"
            description="
Bertology offers a 3-month warranty from the date of purchase or service completion, ensuring customer satisfaction and trust, provided customers present the receipt or warranty card as proof."
          />
          <OffersCard
            image={"/images/service-images/image6.jpg"}
            title="New Items"
            description="Guarantees that all products sold through its booking system are brand new and of high quality. This policy aims to provide transparency, ensure customer confidence, and maintain trust in the services offered."
            reverse={true}
          />
        </div>
      </div>
      {/* -----------------------------------CONTACT/ADDITIONAL INFO------------------------------------------------------ */}
      <div
        className="flex justify-center items-center w-full h-[70vh] "
        id="contactUs"
      >
        <AboutUsInfoCard />
      </div>
    </div>
  );
};

export default AboutUs;
