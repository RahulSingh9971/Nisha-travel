import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const MaintenancePopup: React.FC = () => {
  useEffect(() => {
    // Check if user has already seen the maintenance popup in this session
    const hasSeenMaintenance = sessionStorage.getItem('maintenancePopupSeen');
    if (!hasSeenMaintenance) {
      Swal.fire({
        title: '🚧 Site Under Maintenance',
        html: `
          <div style="text-align: center; padding: 20px;">
            <p style="font-size: 16px; margin-bottom: 20px; color: #333;">
              We are currently performing maintenance on our website to improve your experience.
            </p>
            <p style="font-size: 14px; margin-bottom: 20px; color: #666;">
              For immediate assistance, please contact us:
            </p>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 5px 0; font-weight: 600;">📧 Email: hello@nisatravels.com</p>
            </div>
            <p style="font-size: 14px; color: #888;">
              Thank you for your patience!
            </p>
          </div>
        `,
        icon: 'warning',
        iconColor: '#f39c12',
        showCancelButton: false,
        confirmButtonText: 'Continue to Site',
        confirmButtonColor: '#dc3545',
        allowOutsideClick: false,
        allowEscapeKey: false,
        backdrop: true,
        customClass: {
          popup: 'maintenance-popup',
          title: 'maintenance-title',
          htmlContainer: 'maintenance-content'
        }
      }).then((result: any) => { // result type can be inferred or use SweetAlertResult if imported
        if (result.isConfirmed) {
          sessionStorage.setItem('maintenancePopupSeen', 'true');
        }
      });
    }
  }, []);

  return null;
};

export default MaintenancePopup;
