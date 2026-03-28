import Swal from 'sweetalert2';

export const handleWakalaDownload = async (pdfUrl: string) => {
  const { value: formValues } = await Swal.fire({
    title: 'Download Wakala PDF',
    html: `
      <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;">
        <input id="swal-input-name" class="swal2-input" placeholder="Your Name" style="margin: 0; width: 100%;">
        <input id="swal-input-email" type="email" class="swal2-input" placeholder="Your Email" style="margin: 0; width: 100%;">
      </div>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Submit & Download',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#E74C3C',
    cancelButtonColor: '#002661',
    preConfirm: () => {
      const nameInput = document.getElementById('swal-input-name') as HTMLInputElement;
      const emailInput = document.getElementById('swal-input-email') as HTMLInputElement;
      
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      
      if (!name || !email) {
        Swal.showValidationMessage('Please enter both name and email');
        return false;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Swal.showValidationMessage('Please enter a valid email address');
        return false;
      }
      
      return { name, email };
    }
  });

  if (formValues) {
    // Optionally: Make an API call to save user details here if needed.
    
    // Trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'NTA_Wakala.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Success feedback
    Swal.fire({
      title: 'Downloaded!',
      text: 'Your document has been downloaded successfully.',
      icon: 'success',
      confirmButtonColor: '#002661'
    });
  }
};
