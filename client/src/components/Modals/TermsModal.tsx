import React from "react";
import ModalContainer from "./modalContainer/ModalContainer";

const TermsModal = () => {
  return (
    <ModalContainer>
      <div className="terms-container p-4 bg-gray-50 text-gray-800 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          Terms and Conditions for Bertology Car Accessories Booking System
        </h1>
        <p className="mb-4">
          Welcome to Bertology's Car Accessories Booking System. By accessing or
          using the services provided through this system, you agree to comply
          with and be bound by the following terms and conditions. Please read
          these terms carefully before using our platform.
        </p>
        {/* Add the rest of your terms content here */}
        <h2 className="text-xl font-semibold mt-6 mb-2">1. General Terms</h2>
        <div className="ml-4">
          <h3 className="font-semibold mt-2">1.1 Acceptance of Terms</h3>
          <p className="mb-2">
            By accessing and using the Bertology Car Accessories Booking System
            (hereafter referred to as "the Platform"), you agree to abide by
            these Terms and Conditions, along with any applicable laws,
            regulations, and privacy policies. If you do not agree with any of
            the terms, you are prohibited from using the Platform.
          </p>
          <h3 className="font-semibold mt-2">1.2 Eligibility</h3>
          <p className="mb-2">
            You must be at least 18 years old to use the services provided by
            Bertology. By using this Platform, you confirm that you meet this
            eligibility requirement.
          </p>
        </div>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Booking Process</h2>
        <div className="ml-4">
          <h3 className="font-semibold mt-2">2.1 Reservations and Bookings</h3>
          <p className="mb-2">
            The Platform allows users to browse and book a variety of car
            accessories, goods, and services. Upon booking, you will receive a
            confirmation of your order, which will outline the details of your
            reservation, including availability, service dates, and prices.
          </p>
          <h3 className="font-semibold mt-2">2.2 Availability</h3>
          <p className="mb-2">
            All bookings are subject to the availability of the selected goods
            and services. We make reasonable efforts to ensure that the items
            listed on the Platform are in stock and services are available as
            per the schedule, but we do not guarantee availability at all times.
          </p>
          <h3 className="font-semibold mt-2">2.3 Pricing and Payments</h3>
          <p className="mb-2">
            Prices for car accessories and services are clearly listed on the
            Platform. Payment for the goods and services must be made in full at
            the time of booking, unless otherwise stated. Accepted payment
            methods include credit cards, debit cards, and other online payment
            gateways. Bertology reserves the right to modify pricing at any time
            without prior notice.
          </p>
          <h3 className="font-semibold mt-2">2.4 Changes to Bookings</h3>
          <p className="mb-2 text-red-500">
            You may modify or cancel your booking through the Platform, subject
            to the terms of our cancellation policy. Please refer to the
            Cancellation and Refund Policy for more details.
          </p>
        </div>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. User Responsibilities
        </h2>
      </div>
    </ModalContainer>
  );
};

export default TermsModal;
