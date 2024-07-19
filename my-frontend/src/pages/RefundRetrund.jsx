import React from 'react';

const RefundAndReturnPolicies = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-300 text-center mb-8">Refund/Return & Cancellation</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-teal-600 dark:text-teal-300 mb-4">Refund Policy</h2>
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-4">1. Conditions for Refunds</h3>
              <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  Refunds are typically not offered for cryptocurrency purchases due to the irreversible nature of blockchain transactions. Once a transaction is confirmed on the blockchain, it cannot be reversed.
                </li>
                <li className="mb-2">
                  However, refunds may be considered under exceptional circumstances, such as technical errors on the platform resulting in loss of funds.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-300 mb-4">2. Process for Refund Requests</h3>
              <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  Customers must submit a refund request through a designated customer support channel on the Bitcoinify platform.
                </li>
                <li className="mb-2">
                  The request should include transaction details, the reason for the refund, and any supporting documentation if applicable.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-red-600 dark:text-red-300 mb-4">3. Review and Approval</h3>
              <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  Each refund request will be reviewed by the Bitcoinify support team.
                </li>
                <li className="mb-2">
                  Refunds will only be approved if there is clear evidence of an error on the platform's part that resulted in financial loss to the customer.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-300 mb-4">4. Refund Method</h3>
              <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  Approved refunds will be processed back to the original payment method used by the customer.
                </li>
                <li className="mb-2">
                  For cryptocurrency purchases, refunds will be in the same cryptocurrency and amount as originally purchased.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-300 mb-4">5. Timeframe for Refunds</h3>
              <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  Refund processing times may vary depending on the complexity of the request and verification process.
                </li>
                <li className="mb-2">
                  Customers will be notified of the status of their refund request within a reasonable timeframe.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-green-600 dark:text-green-300 mb-4">Return Policy</h2>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-4">1. Crypto Purchase Confirmation</h3>
              <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  Upon completing a cryptocurrency purchase on Bitcoinify, customers confirm their transactions are accurate and final.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">2. Exchanges and Trading</h3>
              <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  Bitcoinify allows customers to trade and exchange cryptocurrencies freely once purchased. However, any gains or losses from trading activities are the customer's responsibility.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-300 mb-4">3. Security and Compliance</h3>
              <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  Customers are responsible for the security of their Bitcoinify account and ensuring compliance with local regulations regarding cryptocurrency transactions.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-4">4. Customer Support</h3>
              <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  Bitcoinify provides customer support for technical assistance and inquiries related to transactions and account management.
                </li>
                <li className="mb-2">
                  For issues related to account security or unauthorized transactions, customers should contact support immediately for assistance.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-300 mb-4">5. Modification of Policies</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-6">
              Bitcoinify reserves the right to modify its refund and return policies at any time, with changes communicated to customers through the platform or official communication channels.
            </p>

            <h3 className="text-xl font-semibold text-red-600 dark:text-red-300 mb-4">Additional Considerations</h3>
            <ul className="text-gray-700 dark:text-gray-400 mb-6 list-disc list-inside">
              <li className="mb-2">
                <strong className="text-green-600 dark:text-green-300">Legal Compliance</strong>: Ensure that the refund and return policies comply with relevant laws and regulations in jurisdictions where Bitcoinify operates.
              </li>
              <li className="mb-2">
                <strong className="text-blue-600 dark:text-blue-300">Customer Education</strong>: Provide clear explanations of the refund and return policies on the Bitcoinify website and in customer communications to manage expectations effectively.
              </li>
              <li className="mb-2">
                <strong className="text-orange-600 dark:text-orange-300">Transparency</strong>: Maintain transparency regarding transaction fees, exchange rates, and any other charges associated with cryptocurrency purchases on Bitcoinify.
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-300 mb-4">Cancellation</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-6">
              The cryptocurrencies from Bitcoinify brought to you by iWebGenics are non-refundable. After the cryptocurrency is delivered to your desired wallet address, we will not be held liable for any instance. We are liable for delivering the ordered cryptocurrencies to the right wallet address of the recipient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefundAndReturnPolicies;
