import checklistImage from "../../../assets/images/academic-checklist-section.png";

const leftColumnDocs = [
  "10th (SSC)",
  "HSE (12th)",
  "Diploma",
  "Degree",
  "Marksheets",
  "Transcript",
];

const rightColumnDocs = [
  "Migration Certificate",
  "Provisional Certificate",
  "Transfer Certificate",
];

const RequiredDocumentsChecklist = ({ data }: { data?: any }) => {
  return (
    <section className="bg-[#EEF5FC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 overflow-hidden lg:grid-cols-[0.95fr_1.05fr]">
        <div className="h-full">
          <img
            src={data?.document_checklist_section?.image_url || data?.legacy?.checklist_image_url || data?.checklist_image_url || checklistImage}
            alt="Required documents checklist"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-6 py-10 md:px-10 lg:px-16 lg:py-14">
          <h2 className="font-manrope text-[34px] leading-[1.15] md:text-[46px] font-extrabold tracking-[-0.03em]">
            <span className="block text-primary-red">Required Documents</span>
            <span className="block text-primary-navyblue">&amp; Checklist</span>
          </h2>

          {(data?.document_checklist_section?.content || data?.legacy?.checklist_content || data?.checklist_content) ? (
            <div 
              className="mt-8 text-[18px] font-medium text-primary-navyblue prose prose-li:marker:text-primary-navyblue prose-ul:space-y-2 prose-ul:pl-5"
              dangerouslySetInnerHTML={{ __html: data?.document_checklist_section?.content || data?.legacy?.checklist_content || data?.checklist_content }} 
            />
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-2 text-[18px] font-medium text-primary-navyblue md:grid-cols-2 md:gap-x-14">
              <ul className="space-y-3">
                {leftColumnDocs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="pt-[2px] text-[12px]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {rightColumnDocs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="pt-[2px] text-[12px]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RequiredDocumentsChecklist;
