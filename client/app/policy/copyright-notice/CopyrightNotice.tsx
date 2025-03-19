import React from "react";

const CopyrightNotice = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold mb-4 text-purple-500">
          ⚖️ Copyright Notice
        </h1>
        <p className="text-gray-300 mb-6">
          Effective Date: <strong>March 2025</strong>{" "}
        </p>

        <p className="text-white mb-4">
          Welcome to EduMeet! We value your trust and are committed to
          protecting your privacy. This CopyRight Policy outlines how we
          collect, use, and safeguard affiliated information when you use our
          platform. By accessing and using EduMeet, you agree to the terms of
          this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
          📊 Ownership
        </h2>
        <p className="mb-3">
          {" "}
          All content, designs, text, graphics, logos, images, software, and
          code on EduMeet are the property of EduMeet and are protected by
          copyright laws.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
          🚫 Restrictions
        </h2>
        <p className="mt-2">You may not:</p>
        <ul className="mb-3">
          <li>
            🔹Reproduce, distribute, or modify any content without permission.
          </li>
          <li>
            🔹Use EduMeet’s branding, logos, or assets for commercial purposes.
          </li>
          <li>🔹Copy or adapt the source code or design.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
          ⚖️ Fair Use & Attribution
        </h2>
        <p className="text-white mb-4">
          Some third-party content used on EduMeet (such as open-source
          libraries or external resources) remains the property of respective
          copyright holders and is used under appropriate licensing.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
          📩 Copyright Infringement
        </h2>
        <p>
          If you believe that your copyrighted work has been used on the EduMeet
          platform in a way that constitutes copyright infringement, we take
          such matters seriously and encourage you to report the issue
          immediately. To facilitate a swift and thorough investigation, please
          provide the following details in your complaint:
        </p>
        <ul className="mb-3">
          <li>
            <strong>🔹Your Contact Information</strong> – Include your full
            name, email address, phone number, and, if applicable, the
            organization you represent.
          </li>
          <li>
            <strong>🔹A Detailed Description of the Infringed Work</strong> –
            Clearly describe the copyrighted content that you believe has been
            misused, along with any relevant documentation proving ownership.
          </li>
          <li>
            <strong>🔹Location of the Infringing Content on EduMeet</strong> –
            Provide the exact URL or a detailed explanation of where the
            unauthorized content appears on our platform.
          </li>
          <li>
            <strong>🔹Proof of Ownership</strong> – Attach any supporting
            documents or links that verify your ownership of the copyrighted
            work or your authority to act on behalf of the owner.
          </li>

          <li>
            <strong>🔹A Statement of Good Faith</strong> – Include a declaration
            that you believe, in good faith, that the use of the material in
            question is not authorized by the copyright owner, its agent, or the
            law.
          </li>
          <li>
            <strong>🔹A Statement of Accuracy</strong> – Confirm that the
            information provided in your notice is accurate and that you are
            either the copyright owner or have the legal authority to act on
            their behalf.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
          🔄 Updates to This Notice
        </h2>
        <p className="mb-3">
          {" "}
          EduMeet reserves the right to update this copyright notice at any
          time. Any changes will be reflected on this page.
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
    </>
  );
};

export default CopyrightNotice;
