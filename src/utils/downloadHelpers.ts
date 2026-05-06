import Swal from "sweetalert2";

interface DownloadGateOptions {
  fileUrl: string;
  title?: string;
  fileName?: string;
  successMessage?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10,15}$/;

const extractFileName = (fileUrl: string, fallback = "download-file") => {
  try {
    const pathname = new URL(fileUrl, window.location.origin).pathname;
    const lastSegment = pathname.split("/").pop();
    return lastSegment && lastSegment.trim() ? lastSegment : fallback;
  } catch {
    return fallback;
  }
};

const triggerBrowserDownload = (fileUrl: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const openLeadCaptureDownload = async ({
  fileUrl,
  title = "Download Brochure",
  fileName,
  successMessage = "Your file is ready.",
}: DownloadGateOptions) => {
  const { value: formValues } = await Swal.fire({
    title,
    html: `
      <div style="display:flex;flex-direction:column;gap:12px;margin-top:16px;">
        <input id="swal-input-name" class="swal2-input" placeholder="Your Name" style="margin:0;width:100%;">
        <input id="swal-input-email" type="email" class="swal2-input" placeholder="Your Email" style="margin:0;width:100%;">
        <input id="swal-input-phone" type="tel" class="swal2-input" placeholder="Contact Number" style="margin:0;width:100%;">
      </div>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: "Submit & Download",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#E74C3C",
    cancelButtonColor: "#002661",
    preConfirm: () => {
      const name = (document.getElementById("swal-input-name") as HTMLInputElement)?.value.trim();
      const email = (document.getElementById("swal-input-email") as HTMLInputElement)?.value.trim();
      const phone = (document.getElementById("swal-input-phone") as HTMLInputElement)?.value.trim();

      if (!name || !email || !phone) {
        Swal.showValidationMessage("Please enter name, email, and contact number.");
        return false;
      }

      if (!emailRegex.test(email)) {
        Swal.showValidationMessage("Please enter a valid email address.");
        return false;
      }

      if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
        Swal.showValidationMessage("Please enter a valid contact number.");
        return false;
      }

      return { name, email, phone };
    },
  });

  if (!formValues) return;

  // If needed later, we can send formValues to an API here before download.
  triggerBrowserDownload(fileUrl, fileName ?? extractFileName(fileUrl));

  await Swal.fire({
    title: "Downloaded!",
    text: successMessage,
    icon: "success",
    confirmButtonColor: "#002661",
  });
};

export const handleWakalaDownload = async (fileUrl: string) =>
  openLeadCaptureDownload({
    fileUrl,
    title: "Download Saudi Wakala",
    fileName: extractFileName(fileUrl, "NTA_Wakala.jpg"),
    successMessage: "Your document has been downloaded successfully.",
  });
