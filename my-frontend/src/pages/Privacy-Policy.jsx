import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8">Privacy Policy</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              Bitcoinify is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines the types of personal information we collect, how we use it, and your choices regarding your information. By using our services, you consent to the terms of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">2. Information We Collect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-gray-700">
                <h3 className="font-bold">Personal Information:</h3>
                <p>We may collect personal information such as your name, email address, phone number, and address when you register for an account or communicate with us.</p>
              </div>
              <div className="text-gray-700">
                <h3 className="font-bold">Financial Information:</h3>
                <p>We may collect information related to your transactions, such as Bitcoin wallet addresses and transaction history.</p>
              </div>
              <div className="text-gray-700">
                <h3 className="font-bold">Technical Information:</h3>
                <p>We automatically collect certain technical information when you visit our website or use our services, including your IP address, browser type, and device identifiers.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use your personal information for the following purposes:
              <ul className="list-disc ml-6 mt-2">
                <li>To provide and maintain our services, including processing transactions and verifying your identity.</li>
                <li>To communicate with you, respond to your inquiries, and provide customer support.</li>
                <li>To improve our services and develop new features.</li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy or as required by law.
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li><span className="font-bold">Service Providers:</span> We may share your information with third-party service providers who help us operate our business or provide services on our behalf.</li>
              <li><span className="font-bold">Legal Compliance:</span> We may disclose your information if required by law or in response to valid legal requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">5. Security of Your Information</h2>
            <p className="text-gray-700">
              We take reasonable measures to protect your personal information from unauthorized access and use. However, no method of transmission over the internet or electronic storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-red-600 mb-4">6. Your Choices</h2>
            <p className="text-gray-700">
              You have the right to access, update, and delete your personal information. You can also unsubscribe from marketing communications at any time by following the instructions in the emails we send you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or by other means.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
