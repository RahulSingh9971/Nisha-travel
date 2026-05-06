import downloadwhite from "../assets/images/download-white.svg";
import { openLeadCaptureDownload } from "../utils/downloadHelpers";

interface FloatingDownloadCTAProps {
  fileUrl: string;
  label?: string;
}

const FloatingDownloadCTA: React.FC<FloatingDownloadCTAProps> = ({
  fileUrl,
  label = "Brochure",
}) => {
  if (!fileUrl) return null;

  return (
    <button
      type="button"
      onClick={() =>
        openLeadCaptureDownload({
          fileUrl,
          title: `Download ${label}`,
          successMessage: "Your document download has started successfully.",
        })
      }
      className="fixed right-0 top-1/2 z-[9998] flex -translate-y-1/2 rotate-180 items-center justify-center gap-2 rounded-l-md bg-primary-red px-3 py-4 text-primary-white shadow-2xl transition hover:bg-primary-navyblue"
      style={{ writingMode: "vertical-rl" }}
      aria-label={`Download ${label}`}
    >
      <img src={downloadwhite} alt="download icon" className="h-5 w-5 rotate-90" />
      <span className="text-xs font-bold uppercase tracking-[0.08em]">
        {label}
      </span>
    </button>
  );
};

export default FloatingDownloadCTA;
