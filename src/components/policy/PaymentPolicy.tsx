import React from "react";

const PaymentPolicy: React.FC = () => {
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:py-24 md:py-16 py-10 ">
      <h1 className="md:text-4xl text-3xl text-center font-extrabold text-primary-red md:mb-5 mb-2">
        Refund & Cancellation Policy
      </h1>
      {/* Title & Tagline */}
      <div className="grid lg:grid-cols-2 md:gap-12 gap-6 md:py-16 py-8">
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Accepted Payment Methods
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            We accept payments through: - Bank Transfer - UPI / Online Wallets -
            Credit & Debit Cards - Cash (for in-person services)
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Payment Terms
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            Full or partial payment may be required before service initiation,
            depending on the type of service. All prices are quoted in INR
            unless specified otherwise.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Confirmation
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            Services will be processed only after payment confirmation. A
            receipt will be issued for every successful transaction.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Non-Payment
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            Failure to make payment on time may result in service delays or
            cancellations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentPolicy;
