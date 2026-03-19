import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { API_CONFIG } from "../../../config/apiConfig";

const FaTimesIcon = FaTimes as React.ElementType;

interface JobApplyPopupProps {
  jobId: number;
  jobTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

const JobApplyPopup: React.FC<JobApplyPopupProps> = ({ jobId, jobTitle, isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const [formData, setFormData] = useState({
    profession: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_code: '+91',
    phone: '',
    passport_no: '',
    passport_expiry: '', // HTML date YYYY-MM-DD format initially
    father_name: '',
    mother_name: '',
    date_of_birth: '', // HTML date YYYY-MM-DD
    age: '',
    gender: '',
    religion: '',
    nationality: '',
    highest_qualification: '',
    experience_years: '',
    current_job_title: '',
    current_location: '',
    cover_letter: '',
  });

  const [files, setFiles] = useState<{
    resume: File | null;
    passport: File | null;
    photo: File | null;
  }>({
    resume: null,
    passport: null,
    photo: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: [] }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: selectedFiles } = e.target;
    if (selectedFiles && selectedFiles.length > 0) {
      setFiles((prev) => ({ ...prev, [name]: selectedFiles[0] }));
      setFieldErrors((prev) => ({ ...prev, [name]: [] }));
    }
  };

  const formatDateToDDMMYYYY = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);
    setFieldErrors({});

    const submitData = new FormData();

    // Append text fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        if (key === 'passport_expiry' || key === 'date_of_birth') {
          submitData.append(key, formatDateToDDMMYYYY(value));
        } else {
          submitData.append(key, value.toString());
        }
      }
    });

    // Append files
    if (files.resume) submitData.append('resume', files.resume);
    if (files.passport) submitData.append('passport', files.passport);
    if (files.photo) submitData.append('photo', files.photo);

    try {
      const fetchHeaders: Record<string, string> = { ...API_CONFIG.HEADERS };
      delete fetchHeaders['Content-Type'];
      // Also delete lowercase in case it exists
      delete fetchHeaders['content-type'];

      const response = await fetch(`${API_CONFIG.BASE_URL}/jobs/${jobId}/apply`, {
        method: 'POST',
        headers: fetchHeaders,
        body: submitData,
        // The browser automatically sets Content-Type to multipart/form-data with the correct boundary
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccessMsg(result.message || 'Application submitted successfully!');
        // Reset form or close after a delay
        setTimeout(() => {
          onClose();
          setSuccessMsg(null);
        }, 3000);
      } else {
        if (result.errors) {
          setFieldErrors(result.errors);
          setErrorMsg('Please fix the errors below.');
        } else {
          setErrorMsg(result.message || 'Something went wrong.');
        }
      }
    } catch (err) {
      setErrorMsg('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderFieldError = (fieldName: string) => {
    if (fieldErrors[fieldName] && fieldErrors[fieldName].length > 0) {
      return (
        <span className="text-red-500 text-xs mt-1 block">
          {fieldErrors[fieldName][0]}
        </span>
      );
    }
    return null;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 font-manrope">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Apply for Job</h2>
            <p className="text-sm text-gray-500 mt-1">{jobTitle}</p>
          </div>
          <button type="button" onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition">
            <FaTimesIcon size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {successMsg && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg font-medium">
              ✅ {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg font-medium break-words">
              ❌ {errorMsg}
            </div>
          )}

          <form id="applyJobForm" onSubmit={handleSubmit} className="space-y-8">

            {/* Basic Info */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Basic Info <span className="text-red-500 text-sm font-normal">*Required</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profession *</label>
                  <input name="profession" value={formData.profession} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" placeholder="e.g. Software Engineer" />
                  {renderFieldError('profession')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" placeholder="your@email.com" />
                  {renderFieldError('email')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input name="first_name" value={formData.first_name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('first_name')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input name="last_name" value={formData.last_name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('last_name')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Code *</label>
                  <input name="phone_code" value={formData.phone_code} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" placeholder="+91" />
                  {renderFieldError('phone_code')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" placeholder="Phone without code" />
                  {renderFieldError('phone')}
                </div>
              </div>
            </section>

            {/* Passport Info */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Passport Info <span className="text-red-500 text-sm font-normal">*Required</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passport No *</label>
                  <input name="passport_no" value={formData.passport_no} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('passport_no')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passport Expiry *</label>
                  <input type="date" name="passport_expiry" value={formData.passport_expiry} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('passport_expiry')}
                </div>
              </div>
            </section>

            {/* Personal Info */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Personal Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name</label>
                  <input name="father_name" value={formData.father_name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('father_name')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Name</label>
                  <input name="mother_name" value={formData.mother_name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('mother_name')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('date_of_birth')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input type="number" name="age" value={formData.age} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('age')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none bg-white">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {renderFieldError('gender')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
                  <input name="religion" value={formData.religion} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('religion')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                  <input name="nationality" value={formData.nationality} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('nationality')}
                </div>
              </div>
            </section>

            {/* Professional Details */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Professional Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification</label>
                  <input name="highest_qualification" value={formData.highest_qualification} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" placeholder="e.g. B.Tech" />
                  {renderFieldError('highest_qualification')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience Years</label>
                  <input name="experience_years" value={formData.experience_years} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" placeholder="e.g. 3-5 years" />
                  {renderFieldError('experience_years')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Job Title</label>
                  <input name="current_job_title" value={formData.current_job_title} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('current_job_title')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Location</label>
                  <input name="current_location" value={formData.current_location} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" />
                  {renderFieldError('current_location')}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                  <textarea name="cover_letter" value={formData.cover_letter} onChange={handleInputChange} rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none" placeholder="Maximum 2000 characters"></textarea>
                  {renderFieldError('cover_letter')}
                </div>
              </div>
            </section>

            {/* Attachments */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Attachments</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF/DOC/DOCX - max 5MB)</label>
                  <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-primary-red hover:file:bg-red-100" />
                  {renderFieldError('resume')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passport (PDF/JPG/PNG - max 2MB)</label>
                  <input type="file" name="passport" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-primary-red hover:file:bg-red-100" />
                  {renderFieldError('passport')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Photo (JPG/PNG/WEBP - max 2MB)</label>
                  <input type="file" name="photo" accept=".jpg,.jpeg,.png,.webp" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-primary-red hover:file:bg-red-100" />
                  {renderFieldError('photo')}
                </div>
              </div>
            </section>

          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-white flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-6 py-2 border border-gray-300 rounded-full font-bold text-gray-700 hover:bg-gray-50 transition">
            Cancel
          </button>
          <button form="applyJobForm" type="submit" disabled={loading} className="px-8 py-2 bg-primary-red text-white font-bold rounded-full hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            {loading ? 'Submitting...' : 'Submit Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobApplyPopup;
