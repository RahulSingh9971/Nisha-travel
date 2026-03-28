import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TrackApplication: React.FC = () => {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{tracking_id?: string[], phone?: string[]}>({});

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setFieldErrors({});

    try {
      const baseUrl = process.env.REACT_APP_API_BASE_URL || 'https://cms.nisatravels.com/api';
      const apiKey = process.env.REACT_APP_API_KEY || '7802a1979d7472728fe22f93ccaf3755';
      
      const response = await fetch(`${baseUrl}/track-application`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey
        },
        body: JSON.stringify({
          tracking_id: trackingId,
          phone: phone
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (response.status === 422 && result.errors) {
          setFieldErrors(result.errors);
        } else if (response.status === 404 && result.message) {
          setErrorMsg(result.message);
        } else {
          setErrorMsg(result.message || "Something went wrong. Please try again.");
        }
        return;
      }

      // Success
      navigate('/application-status', { state: { trackingData: result.data } });

    } catch (err) {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 bg-white font-poppins mt-24">
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-4xl md:text-[42px] font-bold text-[#c20c15] mb-4">
          Track your application here
        </h1>
        
        <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-[90%] mx-auto">
          Use your application ID to securely track the status of your admission, document verification,
          and visa process all in one place. Our transparent tracking system ensures you're always
          informed at every step.
        </p>

        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSearch}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div>
              <input 
                type="text" 
                placeholder="Enter Track ID" 
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className={`w-full border px-4 py-3 focus:outline-none focus:ring-1 transition-colors ${fieldErrors.tracking_id ? 'border-red-500 focus:border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-red-600 focus:ring-red-600'}`}
              />
              {fieldErrors.tracking_id && <p className="text-red-500 text-xs mt-1 text-left">{fieldErrors.tracking_id[0]}</p>}
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Mobile Number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full border px-4 py-3 focus:outline-none focus:ring-1 transition-colors ${fieldErrors.phone ? 'border-red-500 focus:border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-red-600 focus:ring-red-600'}`}
              />
              {fieldErrors.phone && <p className="text-red-500 text-xs mt-1 text-left">{fieldErrors.phone[0]}</p>}
            </div>
          </div>

          {errorMsg && (
            <div className="text-red-600 bg-red-50 py-3 px-4 border border-red-200 mt-4 text-sm">
              {errorMsg}
            </div>
          )}

          <div className="flex justify-center my-6">
            <div className="border border-gray-200 bg-[#f9f9f9] shadow-sm flex items-center justify-between p-3 w-[300px]">
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="recaptcha-mock" 
                  required
                  className="w-6 h-6 border-gray-300 rounded-sm focus:ring-red-500 text-red-600 bg-white"
                />
                <label htmlFor="recaptcha-mock" className="text-sm text-gray-700">I'm not a robot</label>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 opacity-70" />
                <span className="text-[10px] text-gray-500 mt-1">reCAPTCHA</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button 
              type="submit" 
              disabled={loading}
              className={`bg-[#c20c15] hover:bg-red-800 text-white font-semibold text-sm px-10 py-3 uppercase tracking-wider transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrackApplication;
