import AboutUsInfoCard from "@/components/cards/AboutUsInfoCard";
import OffersCard from "@/components/cards/OffersCard";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-background">
      {/* -----------------------------------MAIN------------------------------------------------------ */}

      <div className=" h-screen text-white flex justify-center">
        <div className="relative w-1/2 flex flex-col pt-[10%]">
          <div>
            <p className="font-bold text-[70px] text-center">
              <span className="text-orangePrimary">About</span> Us
            </p>
            <Image
              src="/images/ClientCarIMG.png"
              width={1000}
              height={1000}
              alt="Car Image"
              className="absolute -right-44"
            ></Image>
          </div>
        </div>
        <div className="w-1/2 text-center p-[15px] z-30 text-[27px] pt-[10%]">
          <span className="text-orangePrimary"> Bertology </span>envisions being
          the go-to destination for discerning automobile enthusiasts, setting
          the standard for innovation and excellence in the car accessories
          industry. We aspire to continuously evolve, adapting to the dynamic
          needs of our tech-savvy audience while remaining true to our
          commitment to quality and uniqueness.
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
        <div className="flex flex-col gap-6 p-3 px-[12rem]">
          <OffersCard
            image={"/images/service-images/image2.jpg"}
            title="Home Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nisi quis ex blandit vulputate. Vivamus ornare auctor mauris vel condimentum. Aliquam suscipit tortor quis ante vehicula cursus. Quisque eu ex venenatis, sagittis dui eu, ultricies urna. Duis facilisis dui eget quam molestie placerat. Praesent enim diam, auctor volutpat massa eget, fringilla porta risus. Aliquam sodales ligula sit amet pellentesque varius. Fusce sollicitudin eu odio eget elementum. Quisque egestas sagittis tortor eget laoreet. Pellentesque tortor risus, congue in condimentum at, sodales ut sem. Quisque viverra, dui in tempor tincidunt, nunc erat semper quam, quis luctus augue ex et nunc."
            reverse={true}
          />
          <OffersCard
            image={"/images/service-images/image3.jpg"}
            title="Expert Technician"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nisi quis ex blandit vulputate. Vivamus ornare auctor mauris vel condimentum. Aliquam suscipit tortor quis ante vehicula cursus. Quisque eu ex venenatis, sagittis dui eu, ultricies urna. Duis facilisis dui eget quam molestie placerat. Praesent enim diam, auctor volutpat massa eget, fringilla porta risus. Aliquam sodales ligula sit amet pellentesque varius. Fusce sollicitudin eu odio eget elementum. Quisque egestas sagittis tortor eget laoreet. Pellentesque tortor risus, congue in condimentum at, sodales ut sem. Quisque viverra, dui in tempor tincidunt, nunc erat semper quam, quis luctus augue ex et nunc."
          />
          <OffersCard
            image={"/images/service-images/image4.jpg"}
            title="Safe Assurance"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nisi quis ex blandit vulputate. Vivamus ornare auctor mauris vel condimentum. Aliquam suscipit tortor quis ante vehicula cursus. Quisque eu ex venenatis, sagittis dui eu, ultricies urna. Duis facilisis dui eget quam molestie placerat. Praesent enim diam, auctor volutpat massa eget, fringilla porta risus. Aliquam sodales ligula sit amet pellentesque varius. Fusce sollicitudin eu odio eget elementum. Quisque egestas sagittis tortor eget laoreet. Pellentesque tortor risus, congue in condimentum at, sodales ut sem. Quisque viverra, dui in tempor tincidunt, nunc erat semper quam, quis luctus augue ex et nunc."
            reverse={true}
          />
          <OffersCard
            image={"/images/service-images/image5.jpg"}
            title="Experienced Mechanics"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nisi quis ex blandit vulputate. Vivamus ornare auctor mauris vel condimentum. Aliquam suscipit tortor quis ante vehicula cursus. Quisque eu ex venenatis, sagittis dui eu, ultricies urna. Duis facilisis dui eget quam molestie placerat. Praesent enim diam, auctor volutpat massa eget, fringilla porta risus. Aliquam sodales ligula sit amet pellentesque varius. Fusce sollicitudin eu odio eget elementum. Quisque egestas sagittis tortor eget laoreet. Pellentesque tortor risus, congue in condimentum at, sodales ut sem. Quisque viverra, dui in tempor tincidunt, nunc erat semper quam, quis luctus augue ex et nunc."
          />
          <OffersCard
            image={"/images/service-images/image6.jpg"}
            title="Fast Transaction"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nisi quis ex blandit vulputate. Vivamus ornare auctor mauris vel condimentum. Aliquam suscipit tortor quis ante vehicula cursus. Quisque eu ex venenatis, sagittis dui eu, ultricies urna. Duis facilisis dui eget quam molestie placerat. Praesent enim diam, auctor volutpat massa eget, fringilla porta risus. Aliquam sodales ligula sit amet pellentesque varius. Fusce sollicitudin eu odio eget elementum. Quisque egestas sagittis tortor eget laoreet. Pellentesque tortor risus, congue in condimentum at, sodales ut sem. Quisque viverra, dui in tempor tincidunt, nunc erat semper quam, quis luctus augue ex et nunc."
            reverse={true}
          />
        </div>
      </div>
      {/* -----------------------------------CONTACT/ADDITIONAL INFO------------------------------------------------------ */}
      <div className="flex justify-center items-center w-full h-[70vh] ">
        <AboutUsInfoCard />
      </div>
    </div>
  );
};

export default AboutUs;
