import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-4 text-purple-500">
        📜 Privacy Policy
      </h1>
      <p className="text-gray-300 mb-6">
        Effective Date: <strong>March 2025</strong>{" "}
      </p>

      <p className="text-white mb-4">
        Welcome to EduMeet! We value your trust and are committed to protecting
        your privacy. This Privacy Policy outlines how we collect, use, and
        safeguard your personal information when you use our platform. By
        accessing and using EduMeet, you agree to the terms of this policy.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        📊 Information We Collect
      </h2>
      <ul className=" mb-4">
        <li>
          <strong>🔹Personal Information:</strong> Name, email address, profile
          picture, and contact information.
        </li>
        <li>
          <strong>🔹Usage Data:</strong> Course progress, interactions, and
          preferences.
        </li>
        <li>
          <strong>🔹Device & Technical Information:</strong> IP address, browser
          type, operating system, and referral sources.
        </li>
        <li>
          <strong>🔹Cookies & Tracking:</strong> To enhance user experience and
          track analytics.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        🎯 How We Use Your Information
      </h2>
      <ul className="mb-3">
        <li>🔹Provide and improve our services.</li>
        <li>🔹Personalize your learning experience.</li>
        <li>🔹Ensure platform security and prevent fraud.</li>
        <li>🔹Communicate important updates and offers.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        🔐 Data Protection & Security
      </h2>
      <p className="text-white mb-4">
        We implement security measures like encryption, two-factor
        authentication (2FA), and regular audits to protect your data. However,
        no system is 100% secure. We advise users to use strong passwords and
        keep login credentials private.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        🔄 Sharing & Third-Party Services
      </h2>
      <ul className=" mb-4">
        <li>🔹We do not sell your personal data.</li>
        <li>
          🔹Some third-party services (e.g., analytics, payment processing) may
          collect data as part of their operations.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        ✅ Your Rights & Choices
      </h2>
      <ul className="mb-4">
        <li>🔹Access, update, or delete your personal information.</li>
        <li>🔹Opt out of certain data collection practices.</li>
        <li>🔹Contact us for any privacy concerns.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        📅 Updates to This Policy
      </h2>
      <p className="text-white mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        communicated through the platform.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        📩 Contact Us
      </h2>
      <p className="text-white mb-4">
        For any questions regarding this policy, please contact us at{" "}
        <a
          href="mailto:edumeetlearn@gmail.com"
          className="text-yellow underline"
        >
          edumeetlearn@gmail.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
