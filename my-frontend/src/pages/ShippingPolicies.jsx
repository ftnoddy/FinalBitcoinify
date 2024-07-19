import React from 'react';

const ShippingPolicies = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8">Shipping Policies</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Delivery Time</h2>
            <p className="text-gray-700">
              It will take a minimum of 5 minutes to get the desired cryptocurrency delivered to your wallet address once the payment is done. In case of any technical errors or unwanted circumstances, the desired cryptocurrency will be delivered to you within a maximum of 72 hours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">Shipping Fee</h2>
            <p className="text-gray-700">
              A minimal sum of money will be charged for shipping the cryptocurrency to the customer’s wallet address, which will be included in the purchase amount.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Delivery Method</h2>
            <p className="text-gray-700">
              The desired cryptocurrency will be delivered to you electronically via your wallet address.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Cancellation</h2>
            <p className="text-gray-700">
              The cryptocurrencies from Bitcoinify brought to you by iWebGenics are non-refundable.
            </p>
            <p className="text-gray-700 mt-2">
              After the cryptocurrency is delivered to your desired wallet address, we will not be held liable for any instance.
            </p>
            <p className="text-gray-700 mt-2">
              We are liable for delivering the ordered cryptocurrencies to the right wallet address of the recipient.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicies;
