import icon1 from "../../../assets/images/sicon1.svg"
import icon2 from "../../../assets/images/sicon2.svg"
import icon3 from "../../../assets/images/sicon3.svg"
import icon4 from "../../../assets/images/sicon4.svg"
import icon5 from "../../../assets/images/sicon5.svg"

interface MEAProps {
  title?: string;
  description?: string;
  features?: Array<{ title: string; description: string }>;
}

function NisaTravelAgency({ title, description, features = [] }: MEAProps) {
  // Local icons ka array
  const localIcons = [icon1, icon2, icon3, icon4, icon5];

  // Agar API se features nahi aa rahe, toh section render nahi hoga
  if (!features || features.length === 0) return null;

  return (
    <section className="bg-primary-lightblue font-manrope md:pt-8 md:pb-16 py-10">
      <div className="max-w-7xl mx-auto lg:px-8 md:px-12 px-4">
        <div className="grid lg:grid-cols-2 gap-5 mb-10 justify-between items-center">
          <h1 className="md:text-4xl text-3xl font-extrabold tracking-wide leading-10">
            {/* <span className="font-medium font-renfrew text-primary-red">Nisa Travel Agency</span>
            <span className="font-extrabold  block text-primary-gray ">is Registered &amp;</span>
            <span className="font-extrabold  text-primary-gray">Authorized by MEA</span> */}
            <span className="font-medium font-renfrew text-primary-red block">
              {title?.includes("Nisa Travel Agency") ? "Nisa Travel Agency" : ""}
            </span>
            <span className="font-extrabold block text-primary-gray">
              {title?.replace("Nisa Travel Agency", "") || "is Registered & Authorized by MEA"}
            </span>
          </h1>
          <div className=" flex justify-end">
            <p className="max-w-xl text-primary-gray text-[16px] leading-7 font-medium">
              {description}
            </p>
          </div>
        </div>
    {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-2">
             {/* Icon pick logic: Agar 5 se zyada features hain toh icons repeat honge */}
              <img 
                src={localIcons[index % localIcons.length]} 
                alt={item.title} 
                className="w-auto h-14" 
              />
              <h3 className="font-extrabold md:pt-[24px] pt-[18px] text-[22px] text-primary-gray">
                {item.title}
              </h3>
              <p className="text-primary-gray text-[16px] leading-7 font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NisaTravelAgency;
