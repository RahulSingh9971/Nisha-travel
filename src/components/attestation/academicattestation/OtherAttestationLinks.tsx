import { Link } from "react-router-dom";

interface LinkItem {
  label: string;
  to: string;
  variant?: "filled" | "outline";
}

interface OtherAttestationLinksProps {
  links?: LinkItem[];
}

const defaultLinks: LinkItem[] = [
  { label: "Personal or Private", to: "/attestationprivate", variant: "filled" },
  { label: "Commercial", to: "/attestationcommercial", variant: "outline" },
];

const OtherAttestationLinks = ({ links = defaultLinks }: OtherAttestationLinksProps) => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-10 lg:px-8 md:py-16">
        <h2 className="font-manrope text-[34px] leading-[1.15] md:text-[48px] font-extrabold tracking-[-0.03em]">
          <span className="block text-primary-navyblue">Checkout our other</span>
          <span className="block text-primary-red">Document Attestation</span>
        </h2>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                link.variant === "outline"
                  ? "inline-flex min-w-[170px] items-center justify-center rounded-full border-2 border-primary-navyblue px-8 py-4 text-center font-poppins text-[15px] font-bold uppercase text-primary-navyblue transition hover:bg-primary-navyblue hover:text-white"
                  : "inline-flex min-w-[250px] items-center justify-center rounded-full bg-primary-red px-8 py-4 text-center font-poppins text-[15px] font-bold uppercase text-white transition hover:bg-red-700"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherAttestationLinks;
