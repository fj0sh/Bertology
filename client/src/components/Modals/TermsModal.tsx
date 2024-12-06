"use client";
import React, { useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import Button from "../button/OrangeButton";

interface modalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal = (props: modalProps) => {
  const { isOpen, onClose } = props;
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  return (
    <ModalContainer width="45rem" height="50rem">
      <div className="p-6 space-y-6 text-gray-800 w-full h-full overflow-y-scroll">
        <div className="border border-asphalt p-4 flex flex-col gap-4 rounded-md text-white">
          <h1 className="text-2xl font-bold text-orangeRed">
            Terms and Conditions
          </h1>
          <p>
            Welcome to Bertology{"'"}s Car Accessories Booking System. By
            accessing or using the services provided through this system, you
            agree to comply with and be bound by the following terms and
            conditions. Please read these terms carefully before using our
            platform.
          </p>

          <section>
            <h2 className="text-xl font-semibold">1. General Terms</h2>
            <div className="pl-4 space-y-4">
              <h3 className="font-semibold">1.1 Acceptance of Terms</h3>
              <p>
                By accessing and using the Bertology Car Accessories Booking
                System, you agree to abide by these Terms and Conditions, along
                with any applicable laws, regulations, and privacy policies. If
                you do not agree with any of the terms, you are prohibited from
                using the Platform.
              </p>

              <h3 className="font-semibold">1.2 Eligibility</h3>
              <p>
                You must be at least 18 years old to use the services provided
                by Bertology. By using this Platform, you confirm that you meet
                this eligibility requirement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Booking Process</h2>
            <div className="pl-4 space-y-4">
              <h3 className="font-semibold">2.1 Reservations and Bookings</h3>
              <p>
                The Platform allows users to browse and book a variety of car
                accessories, goods, and services. Upon booking, you will receive
                a confirmation of your order, which will outline the details of
                your reservation, including availability, service dates, and
                prices.
              </p>

              <h3 className="font-semibold">2.2 Availability</h3>
              <p>
                All bookings are subject to the availability of the selected
                goods and services. We make reasonable efforts to ensure that
                the items listed on the Platform are in stock and services are
                available as per the schedule, but we do not guarantee
                availability at all times.
              </p>

              <h3 className="font-semibold">2.3 Pricing and Payments</h3>
              <p>
                Prices for car accessories and services are clearly listed on
                the Platform. Payment for the goods and services must be made in
                full at the time of booking, unless otherwise stated. Accepted
                payment methods include credit cards, debit cards, and other
                online payment gateways. Bertology reserves the right to modify
                pricing at any time without prior notice.
              </p>

              <h3 className="font-semibold">2.4 Changes to Bookings</h3>
              <p>
                You may modify or cancel your booking through the Platform,
                subject to the terms of our cancellation policy. Please refer to
                the Cancellation and Refund Policy for more details.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
            <div className="pl-4 space-y-4">
              <h3 className="font-semibold">3.1 Accurate Information</h3>
              <p>
                You agree to provide accurate and complete information during
                the booking process, including but not limited to, your name,
                contact information, vehicle details, and preferences for
                accessories and services.
              </p>

              <h3 className="font-semibold">3.2 User Account</h3>
              <p>
                If you create an account on the Platform, you are responsible
                for maintaining the confidentiality of your account login
                credentials and for any activities that occur under your
                account. Bertology is not responsible for unauthorized access or
                misuse of your account due to your failure to maintain the
                security of your credentials.
              </p>
            </div>
          </section>

          {/* Add other sections in the same pattern */}

          <section>
            <h2 className="text-xl font-semibold">10. Contact Information</h2>
            <div className="pl-4 space-y-2">
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us at:
              </p>
              <p>
                Email:
                <a
                  href="mailto:umaranshobi2424@gmail.com"
                  className="text-blue-500 underline"
                >
                  umaranshobi2424@gmail.com
                </a>
              </p>
              <p>
                Phone:
                <a href="tel:+639617590889" className="text-blue-500 underline">
                  09617590889
                </a>
              </p>
              <p>Address: Lahug Cebu City</p>
            </div>
          </section>

          <p>
            By using Bertology{"'"}s Car Accessories Booking System, you
            acknowledge that you have read, understood, and agreed to these
            Terms and Conditions.
          </p>
        </div>
        <button
          className={`p-2 text-white rounded-md bg-orangeRed`}
          // disabled={!agreed}
          onClick={onClose}
        >
          Continue
        </button>
        {/* <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <input type="checkbox" onClick={() => setAgreed((prev) => !prev)} />
            <p>I have read and agree to the terms and conditions</p>
          </div>
          
        </div> */}
      </div>
    </ModalContainer>
  );
};

export default TermsModal;
