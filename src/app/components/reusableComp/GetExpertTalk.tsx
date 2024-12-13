"use client";

import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import Button from "../Button";

interface GetExpertTalkProps {
  onClose: () => void;
  className?: string; // Add className prop
}

// Define types for form data
interface FormData {
  name: string;
  email: string;
  contact: string;
  country: string;
  whatsapp: string;
}
const servicesList = [
  "DeFi Development Services",
  "NFT Marketplace Development",
  "Web3 Integration Services",
  "DAO Development Services",
  "Custom Blockchain Solution",
  "Cryptocurreny Development",
  "Gamify Development",
  "AI Solutions",
  "Other Inquiry",
];

const GetExpertTalk: React.FC<GetExpertTalkProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    country: "",
    whatsapp: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({}); // Errors for specific fields

  const validateForm = () => {
    const errors: Partial<FormData> = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Contact validation (10-digit number)
    const contactPattern = /^[0-9]{10}$/;
    if (!formData.contact) {
      errors.contact = "Contact number is required";
    } else if (!contactPattern.test(formData.contact)) {
      errors.contact = "Contact must be a 10-digit number";
    }

    // Country validation
    if (!formData.country.trim()) {
      errors.country = "Country is required";
    }

    // WhatsApp validation (optional)
    const whatsappPattern = /^[0-9]{10}$/;
    if (formData.whatsapp && !whatsappPattern.test(formData.whatsapp)) {
      errors.whatsapp = "WhatsApp number must be a 10-digit number";
    }

    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // No validation errors, submit the form
      console.log("Form data:", formData);
    } else {
      // Set validation errors
      setFormErrors(errors);
    }
    onClose(); // Close popup on submit
  };

  // Service Selection
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [formError, setFormError] = useState("");

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedServices([...selectedServices, value]);
    } else {
      setSelectedServices(
        selectedServices.filter((service) => service !== value)
      );
    }
  };

  const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      setFormError("Please select at least one service.");
    } else {
      setFormError("");
      console.log("Selected Services:", selectedServices);
      // Submit logic here
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm pt-[700px] px-4 md:px-0 md:pt-0 overflow-auto md:overflow-hidden">
      <div className="relative w-full md:w-[60%] flex flex-col justify-center items-center p-2 md:p-4 ">
        {/* Close Icon */}
        <div
          className="absolute top-[-2px] left-[-2px] cursor-pointer bg-lightgreen px-2 py-2 rounded-full text-white"
          onClick={onClose}
        >
          <RiCloseLargeFill size={20} />
        </div>
        <div
          className="w-full flex flex-col justify-center items-center p-0 md:p-4 bg-[#ffffff]"
          style={{
            boxShadow:
              "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
          }}
        >
          <p className="text-xl md:text-2xl font-bold text-[#000000] pt-5 md:pt-0">
            Request Your Query
          </p>
          <p className="text-md md:text-lg font-medium pt-3 text-center text-[#000000] ">
            Discuss your project with us. We are waiting to serve you Better
          </p>

          <div className="w-[90%] mt-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 w-full">
                {/* Name Field */}
                <div className="mb-4 w-full md:w-[50%]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#F5F5F5] border-b border-[#C9C9C9] placeholder-[#818181]"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm">{formErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-4 w-full md:w-[50%]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#F5F5F5] border-b border-[#C9C9C9] placeholder-[#818181]"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 w-full">
                {/* Contact Field */}
                <div className="mb-4 w-full md:w-[50%]">
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#F5F5F5] border-b border-[#C9C9C9] placeholder-[#818181]"
                  />
                  {formErrors.contact && (
                    <p className="text-red-500 text-sm">{formErrors.contact}</p>
                  )}
                </div>

                {/* Country Field */}
                <div className="mb-4 w-full md:w-[50%]">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#F5F5F5] border-b border-[#C9C9C9] placeholder-[#818181] "
                  />
                  {formErrors.country && (
                    <p className="text-red-500 text-sm">{formErrors.country}</p>
                  )}
                </div>
              </div>

              {/* WhatsApp Field */}
              <div className="mb-4">
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Whatsapp/Telegram"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b bg-[#F5F5F5] border-[#C9C9C9] placeholder-[#818181] "
                />
                {formErrors.whatsapp && (
                  <p className="text-red-500 text-sm">{formErrors.whatsapp}</p>
                )}
              </div>

              <div className="w-[100%] mt-2">
                <div
                  className="w-[100%] max-w-full bg-white p-4"
                  style={{
                    boxShadow:
                      "0 2px 20px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
                  }}
                >
                  <h2 className="text-xl font-bold text-left mb-6 text-[#000000]">
                    Select Our Services
                  </h2>
                  <form onSubmit={handleSubmit1}>
                    <div className="flex flex-wrap justify-between gap-3 md:gap-6">
                      {servicesList.map((service, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 bg-white shadow-md p-3 rounded-lg w-full md:w-[31%]"
                          style={{
                            boxShadow:
                              "0 2px 20px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
                          }}
                        >
                          <input
                            type="checkbox"
                            id={`service-${index}`}
                            value={service}
                            onChange={handleCheckboxChange}
                            className="h-3 w-3 border-gray-300 focus:ring-blue-500 rounded-xl"
                          />
                          <label
                            htmlFor={`service-${index}`}
                            className="text-sm text-[#868585] whitespace-nowrap truncate"
                          >
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* Error Message */}
                    {formError && (
                      <p className="text-red-500 text-sm mt-4">{formError}</p>
                    )}
                  </form>
                </div>
              </div>

              {/* Project Description Field */}
              <div className="mb-4 mt-6">
                <textarea
                  name="description"
                  placeholder="Project Description"
                  rows={4}
                  className="w-full p-3 border-b bg-[#F5F5F5] border-[#C9C9C9] placeholder-[#818181] resize-none"
                />
              </div>

              <div className="text-center pb-5 ">
                  <Button buttonText="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetExpertTalk;
