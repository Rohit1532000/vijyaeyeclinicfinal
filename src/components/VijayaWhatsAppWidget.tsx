import React, { useState, useEffect, useRef, ChangeEvent, FormEvent, MouseEvent } from "react";
import clinicLogo from "../assets/logow.jpg";
import "./VijayaWhatsAppWidget.css";

const WA_TARGET_NUMBER = "919739302523";

type ViewState = "hidden" | "card" | "form" | "pill";

interface FormData {
  name: string;
  countryCode: string;
  phone: string;
  treatment: string;
}

interface FormErrors {
  name: string;
  phone: string;
  treatment: string;
}

// All Countries from International Pages
const COUNTRY_LIST = [
  { code: "+91", label: "IN +91", name: "India" },
  { code: "+973", label: "BH +973", name: "Bahrain" },
  { code: "+880", label: "BD +880", name: "Bangladesh" },
  { code: "+267", label: "BW +267", name: "Botswana" },
  { code: "+855", label: "KH +855", name: "Cambodia" },
  { code: "+251", label: "ET +251", name: "Ethiopia" },
  { code: "+233", label: "GH +233", name: "Ghana" },
  { code: "+62", label: "ID +62", name: "Indonesia" },
  { code: "+964", label: "IQ +964", name: "Iraq" },
  { code: "+254", label: "KE +254", name: "Kenya" },
  { code: "+965", label: "KW +965", name: "Kuwait" },
  { code: "+856", label: "LA +856", name: "Laos" },
  { code: "+265", label: "MW +265", name: "Malawi" },
  { code: "+960", label: "MV +960", name: "Maldives" },
  { code: "+95", label: "MM +95", name: "Myanmar" },
  { code: "+977", label: "NP +977", name: "Nepal" },
  { code: "+234", label: "NG +234", name: "Nigeria" },
  { code: "+968", label: "OM +968", name: "Oman" },
  { code: "+63", label: "PH +63", name: "Philippines" },
  { code: "+974", label: "QA +974", name: "Qatar" },
  { code: "+966", label: "SA +966", name: "Saudi Arabia" },
  { code: "+221", label: "SN +221", name: "Senegal" },
  { code: "+252", label: "SO +252", name: "Somalia" },
  { code: "+94", label: "LK +94", name: "Sri Lanka" },
  { code: "+255", label: "TZ +255", name: "Tanzania" },
  { code: "+971", label: "AE +971", name: "UAE" },
  { code: "+1", label: "US +1", name: "USA" },
  { code: "+44", label: "UK +44", name: "United Kingdom" },
  { code: "+84", label: "VN +84", name: "Vietnam" },
  { code: "+967", label: "YE +967", name: "Yemen" },
  { code: "+263", label: "ZW +263", name: "Zimbabwe" },
];

export const VijayaWhatsAppWidget: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>("hidden");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    countryCode: "+91",
    phone: "",
    treatment: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    phone: "",
    treatment: "",
  });

  // 2-Second Delay Slide-In
  useEffect(() => {
    const timer = setTimeout(() => {
      setViewState("card");
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Close custom dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCountrySelect = (code: string) => {
    setFormData((prev) => ({ ...prev, countryCode: code }));
    setIsCountryDropdownOpen(false);
  };

  const handleCloseToPill = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setViewState("pill");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;
    const newErrors: FormErrors = {
      name: "",
      phone: "",
      treatment: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
      valid = false;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 6 || cleanPhone.length > 14) {
      newErrors.phone = "Please enter a valid contact number";
      valid = false;
    }

    if (!formData.treatment) {
      newErrors.treatment = "Please select a treatment";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    const message =
      `*New Consultation Inquiry - Vijaya Eye Clinic*\n` +
      `*Patient Name:* ${formData.name.trim()}\n` +
      `*Contact Number:* ${formData.countryCode} ${formData.phone.trim()}\n` +
      `*Treatment Required:* ${formData.treatment}`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=${WA_TARGET_NUMBER}&text=${encodedMsg}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const selectedCountry = COUNTRY_LIST.find((c) => c.code === formData.countryCode) || COUNTRY_LIST[0];

  return (
    <div
      id="vijaya-wa-widget"
      className={isVisible ? "wa-widget-visible" : "wa-widget-hidden"}
    >
      {/* STATE 1: INITIAL FLOATING CARD */}
      {viewState === "card" && (
        <div className="wa-state-wrapper">
          <div className="wa-popup-card" onClick={() => setViewState("form")}>
            <div className="wa-card-header">
              <div className="wa-avatar-wrap">
                <img
                  src={clinicLogo}
                  alt="Vijaya Eye Clinic Logo"
                  className="wa-custom-icon-img"
                />
              </div>
              <span className="wa-header-title">Chat with us!</span>
            </div>
            <div className="wa-card-body">
              <div className="wa-avatar-mini">
                <img
                  src={clinicLogo}
                  alt="Vijaya Eye Clinic Logo"
                  className="wa-custom-icon-img"
                />
              </div>
              <div className="wa-info-col">
                <div className="wa-brand-name">Vijaya Eye Clinic</div>
                <div className="wa-status-text">
                  <span className="wa-dot"></span> Online
                </div>
              </div>
              <div className="wa-badge">Whatsapp</div>
            </div>
          </div>

          <div className="wa-btn-container">
            <button
              type="button"
              className="wa-bottom-cut-btn"
              onClick={handleCloseToPill}
              title="Close"
            >
              <span className="wa-cross-icon"></span>
            </button>
          </div>
        </div>
      )}

      {/* STATE 2: EXPANDED FORM POPUP */}
      {viewState === "form" && (
        <div className="wa-state-wrapper">
          <div className="wa-popup-card">
            <div className="wa-card-header">
              <div className="wa-avatar-wrap">
                <img
                  src={clinicLogo}
                  alt="Vijaya Eye Clinic Logo"
                  className="wa-custom-icon-img"
                />
              </div>
              <span className="wa-header-title">Chat with us!</span>
            </div>

            <div className="wa-form-body">
              <div className="wa-profile-header">
                <div className="wa-avatar-mini">
                  <img
                    src={clinicLogo}
                    alt="Vijaya Eye Clinic Logo"
                    className="wa-custom-icon-img"
                  />
                </div>
                <div className="wa-info-col">
                  <div className="wa-brand-name">Vijaya Eye Clinic</div>
                  <div className="wa-status-text">
                    <span className="wa-dot"></span> Online
                  </div>
                </div>
                <div className="wa-badge">Whatsapp</div>
              </div>

              <p className="wa-disclaimer">
                Form details won't reach us until you send a WhatsApp message!
              </p>

              <form onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <div className="wa-field-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name*"
                    className={`wa-input ${errors.name ? "wa-invalid" : ""}`}
                  />
                  <div className="wa-error-msg">{errors.name}</div>
                </div>

                {/* Contact Number with Scrollable Compact Country Selector */}
                <div className="wa-field-group">
                  <div className="wa-phone-row">
                    <div className="wa-country-wrapper" ref={dropdownRef}>
                      <button
                        type="button"
                        className="wa-country-trigger"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      >
                        <span>{selectedCountry.label}</span>
                        <svg className="wa-caret-svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>

                      {isCountryDropdownOpen && (
                        <div className="wa-country-dropdown-list">
                          {COUNTRY_LIST.map((item) => (
                            <div
                              key={item.code + item.name}
                              className={`wa-country-item ${
                                formData.countryCode === item.code ? "wa-active-country" : ""
                              }`}
                              onClick={() => handleCountrySelect(item.code)}
                            >
                              <span className="wa-country-name">{item.name}</span>
                              <span className="wa-country-code-tag">{item.code}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Contact Number*"
                      className={`wa-input wa-phone-input ${
                        errors.phone ? "wa-invalid" : ""
                      }`}
                    />
                  </div>
                  <div className="wa-error-msg">{errors.phone}</div>
                </div>

                {/* Treatments Dropdown */}
                <div className="wa-field-group">
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className={`wa-input wa-treatment-select ${
                      errors.treatment ? "wa-invalid" : ""
                    }`}
                  >
                    <option value="">Select Treatment*</option>
                    <option value="Comprehensive Ophthalmology">Comprehensive Ophthalmology</option>
                    <option value="Cataract Treatment">Cataract Treatment</option>
                    <option value="LASIK & Refractive Treatment">LASIK & Refractive Treatment</option>
                    <option value="Glaucoma Treatment">Glaucoma Treatment</option>
                    <option value="Diabetic Eye Care">Diabetic Eye Care</option>
                    <option value="Squint Eye Treatment">Squint Eye Treatment</option>
                    <option value="Pediatric Ophthal Treatment">Pediatric Ophthal Treatment</option>
                    <option value="Oculoplasty Treatment">Oculoplasty Treatment</option>
                    <option value="Cornea Treatment">Cornea Treatment</option>
                    <option value="Retina Treatment">Retina Treatment</option>
                    <option value="Myopia Treatment">Myopia Treatment</option>
                    <option value="Vitrectomy Surgery">Vitrectomy Surgery</option>
                    <option value="Optometry">Optometry</option>
                  </select>
                  <div className="wa-error-msg">{errors.treatment}</div>
                </div>

                <button type="submit" className="wa-submit-btn">
                  Inquire on WhatsApp
                  <svg className="wa-send-svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.18 8.18 0 0 1-5.82 2.41c-1.46 0-2.88-.39-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="wa-btn-container">
            <button
              type="button"
              className="wa-bottom-cut-btn"
              onClick={handleCloseToPill}
              title="Close"
            >
              <span className="wa-cross-icon"></span>
            </button>
          </div>
        </div>
      )}

      {/* STATE 3: CLOSED PILL BUTTON */}
      {viewState === "pill" && (
        <div className="wa-pill-btn" onClick={() => setViewState("form")}>
          <span className="wa-pill-text">Chat with us!</span>
          <div className="wa-pill-icon-wrap">
            <svg className="wa-pill-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.18 8.18 0 0 1-5.82 2.41c-1.46 0-2.88-.39-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default VijayaWhatsAppWidget;