import Logo from ".././assets/images/logo.png";
import Phone from ".././assets/images/phone.png";
import Mail from ".././assets/images/mail.png";
import MapPin from ".././assets/images/address.webp";
import Facebook from ".././assets/images/f.png";
import Instagram from ".././assets/images/i.png";
import Music from ".././assets/images/t.webp";
import Youtube from ".././assets/images/y.webp";
import Twitter from ".././assets/images/x.webp";
import { Link } from "react-router-dom";

const isExternalLink = (href = "") =>
  href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

const SocialIcon = ({ href, children }) =>
  isExternalLink(href) ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary-navyblue/20 hover:text-[#06213F] transition-colors"
    >
      {children}
    </a>
  ) : (
    <Link
      to={href}
      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary-navyblue/20 hover:text-[#06213F] transition-colors"
    >
      {children}
    </Link>
  );

const FooterLink = ({ href, children }) => (
  <li>
    {isExternalLink(href) ? (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-gray-300 hover:text-primary-white transition-colors"
      >
        {children}
      </a>
    ) : (
      <Link
        to={href}
        className="text-gray-300 hover:text-primary-white transition-colors"
      >
        {children}
      </Link>
    )}
  </li>
);

export default function Footer() {
  const quickLinks1 = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about/who-we-are" },
    { name: "Services", href: "/ourcoreservices" },
    { name: "Jobs Abroad", href: "/jobs" },
    { name: "Recruitment", href: "/recruitment" },
  ];

  const quickLinks2 = [
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/policies/privacy-policy" },
    { name: "Terms Of Service", href: "/policies/terms-conditions" },
    { name: "Refund Policy", href: "/policies/refund-policy" },
  ];

  const services1 = [
    { name: "Overseas Recruitment", href: "/recruitment" },
    { name: "Visa Stamping & Assistance", href: "/visa-services" },
    { name: "Emigration & PCC Services", href: "/ourcoreservices" },
    { name: "Document Attestation & Apostille", href: "/attestationdocument" },
  ];

  const services2 = [
    { name: "Air Ticketing & Holiday Packages", href: "/ourcoreservices" },
    { name: "Healthcare Licensing", href: "/ourcoreservices" },
    { name: "Study Abroad Programs", href: "/study-abroad-page" },
  ];

  return (
    <footer className="font-manrope bg-[#002661] text-primary-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        {/* Top Section: Logo and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-8 md:mb-0">
            <img
              src={Logo}
              alt="Nisa Travel Agency Logo"
              className="h-[75px]"
            />
            <div>
              <div className="flex marker:selection:gap-2">
                <h1 className="text-[24px] font-medium font-renfrew text-primary-white">
                  Nisa Travel Agency
                </h1>
                <span className="pl-2 font-light text-s ">™</span>
              </div>
              <p className="font-gilroy text-xs text-gray-400">
                An Overseas Workforce Solutions Provider
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <SocialIcon href="https://www.facebook.com/nisatravels">
              <img src={Facebook} alt="Facebook" className="w-5 h-auto" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/nisatravels">
              <img src={Instagram} alt="Instagram" className="w-5 h-auto" />
            </SocialIcon>
            <SocialIcon href="https://www.tiktok.com/@nisatravels">
              <img src={Music} alt="Music" className="w-5 h-auto" />
            </SocialIcon>{" "}
            {/* TikTok */}
            <SocialIcon href="https://www.youtube.com/@nisatravels">
              <img src={Youtube} alt="Youtube" className="w-5 h-auto" />
            </SocialIcon>
            <SocialIcon href="https://x.com/nisatravels">
              <img src={Twitter} alt="Twitter" className="w-5 h-auto" />
            </SocialIcon>{" "}
            {/* X */}
          </div>
        </div>

        {/* Middle Section: Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-sm">
          <div className="flex items-start space-x-4">
            <img src={Phone} alt="Phone" className="w-6 h-auto" />
            <div>
              <p className="text-gray-400">Tel</p>
              <a href="tel:01141050464" className="text-gray-200 hover:underline">
                011-4105-0464
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src={Mail} alt="Mail" className="w-6 h-auto" />
            <div>
              <p className="text-gray-400">Mail</p>
              <a
                href="mailto:hello@nisatravels.com"
                className="text-gray-200 hover:underline"
              >
                hello@nisatravels.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src={MapPin} alt="MapPin" className="w-6 h-auto" />
            <div>
              <p className="text-gray-400">Address</p>
              <p className="text-gray-200 leading-relaxed">
                Room No. 317, TF, South Ex Plaza II, Leelaram Market, South Ex
                Part II, New Delhi 110049, INDIA.
              </p>
              <div className="flex flex-wrap gap-2 mt-2 text-[16px] uppercase text-gray-200 font-medium">
                <a
                  href="https://maps.app.goo.gl/zLKifqUJjs1iTbiM9"
                  target="_blank"
                  className=" hover:text-blue-300"
                >
                  New Delhi
                </a>
                <span className="">|</span>
                <a
                  href="https://maps.app.goo.gl/72xRyUbRxyjBr2Dg9"
                  target="_blank"
                  className=" hover:text-blue-300"
                >
                  Mumbai
                </a>
                <span className="">|</span>
                <a
                  href="https://maps.app.goo.gl/G9h3kmJC4eNFbhBr6"
                  target="_blank"
                  className=" hover:text-blue-300"
                >
                  Kochi
                </a>
                <span className="">|</span>
                <a
                  href="https://maps.app.goo.gl/zTgWTVvEvE4R93ad8"
                  target="_blank"
                  className=" hover:text-blue-300"
                >
                  Kerala
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4 text-primary-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks1.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-primary-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks2.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-primary-white">Services</h3>
            <ul className="space-y-3">
              {services1.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-primary-white">Services</h3>
            <ul className="space-y-3">
              {services2.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#D0D5DD] pt-6 text-center text-xs text-[#FFFFFF]">
          <p>Nisa Travel Agency © 2025 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
