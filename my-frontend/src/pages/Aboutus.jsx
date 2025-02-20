import React from 'react';

const Aboutpage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-300 text-center mb-8">About Us</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-teal-600 dark:text-teal-300 mb-4">Welcome to Bitcoinify</h2>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                Your global gateway to the world of cryptocurrencies. We specialize in providing a seamless and secure platform where customers from around the world can easily buy cryptocurrencies of their choice.
              </p>

              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                At Bitcoinify, our mission is to make cryptocurrency accessible to everyone, everywhere. We believe in the transformative power of blockchain technology and strive to empower individuals and businesses by offering a reliable and user-friendly platform for buying cryptocurrencies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-300 mb-4">What Sets Us Apart</h3>
              <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  <strong className="text-red-600 dark:text-red-300">Global Accessibility</strong>: Bitcoinify operates globally, allowing customers from different countries to access and purchase a wide range of cryptocurrencies easily.
                </li>
                <li className="mb-2">
                  <strong className="text-green-600 dark:text-green-300">User-Friendly Interface</strong>: Our platform is designed with simplicity in mind, ensuring that even beginners can navigate and use our services without difficulty.
                </li>
                <li className="mb-2">
                  <strong className="text-blue-600 dark:text-blue-300">Security and Trust</strong>: We prioritize the security of our users' funds and personal information. Bitcoinify employs state-of-the-art security measures to safeguard transactions and data integrity.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-300 mb-4">Why Choose Bitcoinify?</h3>
            <ul className="text-gray-700 dark:text-gray-400 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="mb-2">
                <strong className="text-orange-600 dark:text-orange-300">Wide Selection</strong>: Whether you're looking to buy Bitcoin, Ethereum, or other popular cryptocurrencies, Bitcoinify offers a diverse selection to meet your investment needs.
              </li>
              <li className="mb-2">
                <strong className="text-indigo-600 dark:text-indigo-300">Fast and Reliable Transactions</strong>: Our streamlined process ensures that transactions are processed quickly and efficiently, allowing you to buy cryptocurrencies in a matter of minutes.
              </li>
              <li className="mb-2">
                <strong className="text-teal-600 dark:text-teal-300">Supportive Customer Service</strong>: Our dedicated support team is available 24/7 to assist you with any questions or concerns you may have. We're committed to providing prompt and helpful customer service to enhance your experience with Bitcoinify.
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-red-600 dark:text-red-300 mb-4">Join Us Today</h3>
            <p className="text-gray-700 dark:text-gray-400">
              Join the global community of cryptocurrency enthusiasts who trust Bitcoinify for their digital asset transactions. Whether you're a seasoned investor or new to the world of cryptocurrencies, Bitcoinify is here to support your journey towards financial freedom and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
// 69854