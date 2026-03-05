import { Link } from "react-router-dom";
import heroImg from "../.././assets/images/heroImg.png"

export default function HeroSection() {
    const heroStyle = {
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <section className="relative h-[300px] md:h-[480px] lg:h-[500px] xl:h-[calc(100vh-180px)]" style={{ backgroundImage: `url(${heroImg})`,backgroundSize: "cover",backgroundPosition: "center center" }}>

            <div className="relative max-w-7xl lg:px-6 md:px-12 mx-auto px-4 h-full flex xl:pt-[62px] pt-[52px]">
                <div className="xl:max-w-3xl max-w-2xl">
                    <p className="text-primary-white xl:text-[20px] md:text-[18px] text-[14px] mb-[3px] font-bold">
                        Serving Ministries, Employers & Jobseekers Across GCC, UK, EU & Africa
                    </p>

                    <h1 className="font-ibmplex text-[26px] md:text-[48px] lg:text-[50px] xl:text-[59px] font-bold text-primary-white xl:leading-[76px] lg:leading-[64px] md:leading-[54px] leading-[34px] md:mb-8 mb-6">
                        From India to the World
                        <br />
                        <span className="">Workforce Solutions</span>
                        <br />
                        <span className="">You Can Trust</span>
                    </h1>

                    <Link to="/visaservices" className="  bg-primary-red hover:bg-red-700 text-primary-white md:px-10 px-3 md:py-2 py-[6px] text-[16px] font-semibold font-poppins rounded-none">
                        APPLY VISA
                    </Link>
                </div>
            </div>
        </section>
    );
}