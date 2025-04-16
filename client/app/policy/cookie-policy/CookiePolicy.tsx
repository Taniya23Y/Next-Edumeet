import React from "react";

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-4 text-purple-500">
        🍪 Cookie Policy
      </h1>
      <p className="text-gray-300 mb-6">
        Effective Date: <strong>March 2025</strong>{" "}
      </p>

      <p className="text-white mb-4">
        EduMeet (“we,” “our,” or “us”) uses cookies and similar tracking
        technologies to enhance your experience, improve our services, and
        analyze user behavior. This Cookie Policy explains how we use cookies
        and how you can manage your preferences.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        🔍 What Are Cookies?
      </h2>
      <p className="mb-3">
        Cookies are small text files stored on your device (computer, tablet, or
        mobile) when you visit a website. They help us remember your
        preferences, improve functionality, and provide personalized content.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        🏷️ 2. Types of Cookies We Use
      </h2>
      <ul className="mb-3">
        <li>
          <strong>🔹Essential Cookies - </strong>functionalities such as user
          authentication, security, and accessibility.
        </li>
        <li>
          <strong>🔹Analytics & Performance Cookies - </strong>These cookies
          help us understand how users interact with EduMeet by collecting data
          on page views, navigation patterns, and errors. We use services like
          Google Analytics to analyze this information.
        </li>
        <li>
          <strong>🔹Customization Cookies - </strong>
          These cookies remember your preferences (such as language selection,
          theme settings, and saved login details) to provide a personalized
          experience.
        </li>
        <li>
          <strong>🔹Advertising Cookies - </strong>EduMeet may use advertising
          cookies to display relevant ads based on your browsing activity. These
          cookies help us show targeted promotions and measure ad effectiveness.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        🔄 3. How We Use Cookies
      </h2>
      <p className="mb-3">EduMeet uses cookies for the following purposes:</p>
      <ul className="mb-3">
        <li>🔹To ensure the website functions properly.</li>
        <li>🔹To remember user preferences and login details.</li>
        <li>🔹To analyze traffic and improve website performance.</li>
        <li>🔹To provide personalized content and recommendations.</li>
        <li>🔹To display relevant ads and measure marketing effectiveness.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        ⚙️ 4. Managing Your Cookie Preferences
      </h2>
      <p className="mb-3">
        You can manage or disable cookies through your browser settings.
        However, disabling certain cookies may affect your experience on
        EduMeet. Here’s how you can control cookies in different browsers:
      </p>
      <ul className="mb-3">
        <li>
          🔹Google Chrome – Go to Settings → Privacy & Security → Cookies and
          Site Data
        </li>
        <li>
          🔹Mozilla Firefox – Go to Options → Privacy & Security → Cookies and
          Site Data
        </li>
        <li>🔹Safari – Go to Preferences → Privacy → Manage Website Data</li>
        <li>
          🔹Microsoft Edge – Go to Settings → Site Permissions → Cookies and
          Site Data
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
        📩 Contact Us
      </h2>
      <p className="text-white mb-4">
        For any questions regarding this policy, please contact us at
        <a
          href="mailto:edumeetlearn@gmail.com"
          className="text-yellow pl-1 underline"
        >
          edumeetlearn@gmail.com
        </a>
      </p>
    </div>
  );
};

export default CookiePolicy;
