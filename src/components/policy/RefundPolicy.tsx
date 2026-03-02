import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:py-24 md:py-16 py-10 ">
      <h1 className="md:text-4xl text-3xl text-center font-extrabold text-[#C40808] md:mb-5 mb-2">
        Refund & Cancellation Policy
      </h1>
      {/* Title & Tagline */}
      <div className="grid lg:grid-cols-2 md:gap-12 gap-6 md:py-16 py-8">
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
Service Cancellation          </h3>
          <p className="text-[14px] font-normal text-[#666666] tracking-wider ">
            If a client wishes to cancel a service, they must notify us in writing via hello@nisatravels.com before processing begins.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
          Non-Refundable Fees
          </h3>
          <p className="text-[14px] font-normal text-[#666666] tracking-wider ">
           Visa fees, embassy charges, attestation costs, and processing fees paid to external agencies are non-refundable once submitted.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
           Refund Eligibility
          </h3>
          <p className="text-[14px] font-normal text-[#666666] tracking-wider ">
           Refunds may be considered only for unprocessed services or overpayments, at the discretion of management.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
        No Refunds in Certain Cases
          </h3>
          <p className="text-[14px] font-normal text-[#666666] tracking-wider ">
        No refunds will be issued for: - Visa rejections by embassies - Delays due to incomplete documents - Customer’s voluntary withdrawal after service initiation
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
   Processing Time for Refunds
          </h3>
          <p className="text-[14px] font-normal text-[#666666] tracking-wider ">
         Approved refunds will be processed within 7–14 working days to the original payment method.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
         Contact for Refund Queries
          </h3>
          <p className="text-[14px] font-normal text-[#666666] tracking-wider ">
           For refund-related queries, please contact services@nisatravels.com or call our helpline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
