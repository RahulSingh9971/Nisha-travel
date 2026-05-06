import checklistImage from "../../../assets/images/academic-checklist-section.png";

const commercialDocs = [
  "Invoice",
  "Bill of Supply",
  "Incorporation Certificate",
  "Commercial Lease Agreement",
  "Chamber of Commerce Certificate",
  "Commercial Affidavit",
];

const CommercialRequiredChecklist = () => {
  return (
    <section className="bg-[#EEF5FC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 overflow-hidden lg:grid-cols-[0.95fr_1.05fr]">
        <div className="h-full">
          <img
            src={checklistImage}
            alt="Commercial documents checklist"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-6 py-10 md:px-10 lg:px-16 lg:py-14">
          <h2 className="font-manrope text-[34px] leading-[1.15] md:text-[46px] font-extrabold tracking-[-0.03em]">
            <span className="block text-primary-red">Required Documents</span>
            <span className="block text-primary-navyblue">&amp; Checklist</span>
          </h2>

          <ul className="mt-8 space-y-3 text-[18px] font-medium text-primary-navyblue">
            {commercialDocs.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="pt-[2px] text-[12px]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CommercialRequiredChecklist;
