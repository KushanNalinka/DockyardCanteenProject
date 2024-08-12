import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  // Sample data for the charts
  const summaryData = {
    revenue: 20000,
    expenses: 12000,
    profit: 8000,
  };

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [3000, 4000, 3500, 5000, 4500, 6000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Expenses',
        data: [2000, 2500, 3000, 3500, 3200, 4000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Revenue:</span>
            <span>${summaryData.revenue}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Expenses:</span>
            <span>${summaryData.expenses}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Profit:</span>
            <span>${summaryData.profit}</span>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          {/* Example recent transactions */}
          <ul>
            <li className="border-b py-2">Transaction 1: $500</li>
            <li className="border-b py-2">Transaction 2: $200</li>
            <li className="border-b py-2">Transaction 3: $1000</li>
          </ul>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
        <div className="mb-6">
          <Line data={chartData} />
        </div>
        <div>
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
