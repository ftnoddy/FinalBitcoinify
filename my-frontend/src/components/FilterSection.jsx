import React, { useState } from 'react';

const FilterSection = ({ onFilter }) => {
  const [date, setDate] = useState('');
  const [days, setDays] = useState('');
  const [dateRange, setDateRange] = useState('');

  const handleFilter = () => {
    onFilter({ date, days, dateRange });
  };

  return (
    <div className="filter-section mb-4 p-4 border border-gray-300 rounded-lg flex items-center space-x-4">
      <div className="filter-item">
        <label className="block text-sm font-medium text-gray-700">Filter by Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="filter-item">
        <label className="block text-sm font-medium text-gray-700">Filter by Days</label>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="filter-item">
        <label className="block text-sm font-medium text-gray-700">Date Range</label>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select</option>
          <option value="7days">Last 7 Days</option>
          <option value="1month">Last Month</option>
          <option value="6months">Last 6 Months</option>
          <option value="1year">Last 1 Year</option>
          <option value="all">All</option>
        </select>
      </div>
      <div className="filter-item">
        <button
          onClick={handleFilter}
          className="mt-6 inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
