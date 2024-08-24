import React, { useState } from "react";
import Modal from "../../components/Modal";

const GoogleForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    country: "",
    interest: "",
    incop: "",
    launch: "",
    referal: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const content = await rawResponse.json();

    // Show the thank you message
    setShowThankYouMessage(true);

    // Reset the form data
    setFormData({
      businessName: "",
      country: "",
      interest: "",
      incop: "",
      launch: "",
      referal: "",
      comments: "",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowThankYouMessage(false);
  };

  return (
    <main className="bg-white min-h-screen flex items-center justify-center ">
      <div id="welcome" className="max-w-3xl mx-auto pt-0 text-center p-6">
        <img
          src="/assets/images/logo_fba.svg"
          alt="FBA Finance Logo"
          className="mx-auto mb-8 w-64"
        />

        <h1 className="text-4xl font-bold mb-4">
          <span className="inline-block mr-2">🎉</span>
          Exciting chance to access our platform early by sharing info.
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Join our early adopter community now!
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Start
        </button>

        <p className="mt-4 text-gray-500 flex items-center justify-center">
          <svg
            className="w-6 h-12 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Takes 2 minutes
        </p>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {!showThankYouMessage ? (
          <form className="py-4 space-y-4" onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="flex items-center justify-center">
              <input
                value={formData.businessName}
                onChange={handleInputChange}
                type="text"
                name="businessName"
                id="businessName"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Business Name"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                value={formData.country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                name="country"
                id="country"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Country"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                value={formData.interest}
                onChange={(e) => setInterest(e.target.value)}
                type="text"
                name="interest"
                id="interest"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Interest"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                value={formData.incop}
                onChange={(e) => setIncop(e.target.value)}
                type="text"
                name="incop"
                id="incop"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Incorporation"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                value={formData.launch}
                onChange={(e) => setLaunch(e.target.value)}
                type="text"
                name="launch"
                id="launch"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Launch"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                value={formData.referal}
                onChange={(e) => setReferal(e.target.value)}
                type="text"
                name="referal"
                id="referal"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Referral"
              />
            </div>
            <div className="flex items-center justify-center">
              <textarea
                value={formData.comments}
                onChange={(e) => setComments(e.target.value)}
                id="comments"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Comments"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <img
              src="/assets/images/logo_fba.svg"
              alt="Thank you"
              className="mx-auto mb-4"
            />
            <p className="text-xl font-semibold">
              Thanks for your interest in our platform!
            </p>
            <p>
              Join our early access community for updates. Share with friends to
              improve app experience.
            </p>
            <p className="mt-4">Stay tuned for more news!</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://x.com/FBA_finance"
                className="text-blue-600 hover:text-blue-800"
              >
                <img
                  src="assets/images/X_Icon.svg"
                  alt="X"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/fba-finance/posts/?feedView=all"
                className="text-blue-400 hover:text-blue-600"
              >
                <img
                  src="assets/images/mingcute_linkedin-fill.svg"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://discord.gg/DA9RTJPN"
                className="text-blue-700 hover:text-blue-900"
              >
                <img
                  src="assets/images/ic_baseline-discord.svg"
                  alt="Discord"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
};

export default GoogleForm;
