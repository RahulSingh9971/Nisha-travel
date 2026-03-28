import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

interface Step {
  step: number;
  label: string;
  completed: boolean;
  date: string | null;
}

interface TrackingData {
  tracking_id: string;
  client_name: string;
  document_type: string;
  service_id: string;
  current_step: number;
  current_step_label: string;
  is_completed: boolean;
  steps: Step[];
  updated_at: string;
}

const ApplicationStatus: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const trackingData = location.state?.trackingData as TrackingData | undefined;

  useEffect(() => {
    if (!trackingData) {
      navigate('/track-application');
    }
  }, [trackingData, navigate]);

  if (!trackingData) return null;

  const FaCheckCircleIcon = FaCheckCircle as React.ElementType;

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-poppins px-4 py-16 mt-20">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-[42px] font-bold text-[#c20c15] mb-4">
          Application Status
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
          Use your application ID to securely track the status of your admission, document verification,
          and visa process all in one place. Our transparent tracking system ensures you're always
          informed at every step.
        </p>
      </div>

      <div className="w-full max-w-[800px] bg-[#f9fafb] rounded-[24px] p-8 md:p-12 shadow-sm border border-gray-100">
        {/* Header Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8 pb-8 border-b border-gray-200">
          <div className="text-[15px]">
            <span className="font-semibold text-[#1e293b]">Tracking ID:</span>{" "}
            <span className="text-gray-600">{trackingData.tracking_id}</span>
          </div>
          <div className="text-[15px]">
            <span className="font-semibold text-[#1e293b]">Client Name:</span>{" "}
            <span className="text-gray-600">{trackingData.client_name}</span>
          </div>
          <div className="text-[15px]">
            <span className="font-semibold text-[#1e293b]">Document Type:</span>{" "}
            <span className="text-gray-600">{trackingData.document_type}</span>
          </div>
          <div className="text-[15px]">
            <span className="font-semibold text-[#1e293b]">Service ID:</span>{" "}
            <span className="text-gray-600">{trackingData.service_id}</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-0 relative pl-4">
          <div className="absolute left-[24px] top-6 bottom-6 w-[2px] bg-gray-200"></div>
          
          {trackingData.steps.map((step, index) => (
            <div key={index} className="flex relative items-start gap-6 py-4">
              <div className="relative z-10 flex items-center justify-center bg-[#f9fafb] py-1">
                {step.completed ? (
                  <FaCheckCircleIcon className="text-green-500 w-[22px] h-[22px] bg-white rounded-full" />
                ) : (
                  <div className="w-[22px] h-[22px] rounded-full border-[3px] border-gray-300 bg-white"></div>
                )}
              </div>
              <div className="pt-1">
                <h3 className={`text-[16px] font-semibold ${step.completed ? 'text-[#1e293b]' : 'text-[#334155]'}`}>
                  {step.label}
                </h3>
                {step.date && (
                  <p className="text-sm text-gray-500 mt-1">{step.date}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
