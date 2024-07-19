import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaArrowUp, FaDownload } from 'react-icons/fa';
import FilterSection from './FilterSection';
import Footer from '../model/Footer';

const TransactionTable = () => {
  const [, setFilters] = useState({ date: '', days: '' });

  const handleFilter = (filterValues) => {
    setFilters(filterValues);
    // Implement filtering logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="card border border-gray-300 p-4 rounded-lg flex flex-col flex-grow">
        <FilterSection onFilter={handleFilter} />
        <div className="card-header mb-4">
          <h2 className="card-title text-xl font-semibold">Transaction History</h2>
          <p className="card-description text-gray-600">View your recent cryptocurrency transactions.</p>
        </div>
        <div className="card-content overflow-x-auto flex-grow">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 text-left">Date <FaArrowUp /></th>
                <th className="border-b p-2 text-left">Coin <FaArrowUp /></th>
                <th className="border-b p-2 text-left">Type <FaArrowUp /></th>
                <th className="border-b p-2 text-left">Transaction ID <FaArrowUp /></th>
                <th className="border-b p-2 text-left">Amount <FaArrowUp /></th>
                <th className="border-b p-2 text-left">Status <FaArrowUp /></th>
                <th className="border-b p-2 text-left">Download <FaArrowUp /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-2">2023-05-01</td>
                <td className="border-b p-2">Bitcoin</td>
                <td className="border-b p-2">Buy</td>
                <td className="border-b p-2">123456789</td>
                <td className="border-b p-2">0.05</td>
                <td className="border-b p-2"><span className="inline-block px-2 py-1 text-sm text-white bg-green-500 rounded">Completed</span></td>
                <td className="border-b p-2"><button className="text-blue-500 hover:text-blue-700"><FaDownload /></button></td>
              </tr>
              <tr>
                <td className="border-b p-2">2023-04-28</td>
                <td className="border-b p-2">Ethereum</td>
                <td className="border-b p-2">Sell</td>
                <td className="border-b p-2">987654321</td>
                <td className="border-b p-2">0.02</td>
                <td className="border-b p-2"><span className="inline-block px-2 py-1 text-sm text-black bg-yellow-300 rounded">Pending</span></td>
                <td className="border-b p-2"><button className="text-blue-500 hover:text-blue-700"><FaDownload /></button></td>
              </tr>

              <tr>
                <td className="border-b p-2">2023-05-01</td>
                <td className="border-b p-2">Bitcoin</td>
                <td className="border-b p-2">Buy</td>
                <td className="border-b p-2">123456789</td>
                <td className="border-b p-2">0.05</td>
                <td className="border-b p-2"><span className="inline-block px-2 py-1 text-sm text-white bg-green-500 rounded">Completed</span></td>
                <td className="border-b p-2"><button className="text-blue-500 hover:text-blue-700"><FaDownload /></button></td>
              </tr>
              <tr>
                <td className="border-b p-2">2023-04-28</td>
                <td className="border-b p-2">Ethereum</td>
                <td className="border-b p-2">Sell</td>
                <td className="border-b p-2">987654321</td>
                <td className="border-b p-2">0.02</td>
                <td className="border-b p-2"><span className="inline-block px-2 py-1 text-sm text-black bg-yellow-300 rounded">Pending</span></td>
                <td className="border-b p-2"><button className="text-blue-500 hover:text-blue-700"><FaDownload /></button></td>
              </tr>

              {/* Add more transactions as needed */}
            </tbody>
          </table>
        </div>
        <div className="card-footer flex items-center justify-between mt-4">
          <div className="text-sm text-gray-600">Showing 5 of 12 transactions</div>
          <div className="flex">
            <button className="border rounded-full p-2 mx-1 hover:bg-gray-200">
              <FaChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </button>
            <button className="border rounded-full p-2 mx-1 hover:bg-gray-200">
              <FaChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TransactionTable;
