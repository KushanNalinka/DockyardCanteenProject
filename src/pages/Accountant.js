// import React from 'react';
// import { Line, Bar } from 'react-chartjs-2';
// import 'chart.js/auto';
// import Navbar from "../components/AccountNavbar"

// const Dashboard = () => {
//   // Sample data for the charts
//   const summaryData = {
//     revenue: 20000,
//     expenses: 12000,
//     profit: 8000,
//   };

//   const chartData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         label: 'Revenue',
//         data: [3000, 4000, 3500, 5000, 4500, 6000],
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       },
//       {
//         label: 'Expenses',
//         data: [2000, 2500, 3000, 3500, 3200, 4000],
//         borderColor: 'rgba(255, 99, 132, 1)',
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       },
//     ],
//   };

//   return (
//     <>
//     <Navbar/ >
    
//     <div className="p-6">
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-semibold mb-4">Summary</h2>
//           <div className="flex justify-between mb-2">
//             <span>Revenue:</span>
//             <span>${summaryData.revenue}</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span>Expenses:</span>
//             <span>${summaryData.expenses}</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span>Profit:</span>
//             <span>${summaryData.profit}</span>
//           </div>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
//           {/* Example recent transactions */}
//           <ul>
//             <li className="border-b py-2">Transaction 1: $500</li>
//             <li className="border-b py-2">Transaction 2: $200</li>
//             <li className="border-b py-2">Transaction 3: $1000</li>
//           </ul>
//         </div>
//       </div>
//       <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
//         <div className="mb-6">
//           <Line data={chartData} />
//         </div>
//         <div>
//           <Bar data={chartData} />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Dashboard;
/*import React, { useState, useEffect } from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Navbar from "../components/AccountNavbar";

const Dashboard = () => {
  const [statusCounts, setStatusCounts] = useState({});
  const [monthlySales, setMonthlySales] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2024); // Default to 2024
  const [selectedIncomeYear, setSelectedIncomeYear] = useState(2024); // Default for income view

  useEffect(() => {
    // Fetch status counts
    fetch("http://localhost:5255/api/Orders/statusCounts")
      .then(response => response.json())
      .then(data => setStatusCounts(data));

    // Fetch monthly sales
    fetch(`http://localhost:5255/api/Orders/monthlySales`)
      .then(response => response.json())
      .then(data => setMonthlySales(data.filter(sale => sale.year >= 2024)));

    // Fetch total purchased amount
    fetch(`http://localhost:5255/api/Purchased/totalAmount`)
      .then(response => response.json())
      .then(data => setIncomeData(data));
  }, []);

  // Prepare data for the doughnut chart
  const doughnutChartData = {
    labels: ['Not Yet Approved', 'Pending', 'Approved'],
    datasets: [
      {
        data: [statusCounts.notYetApproved || 0, statusCounts.pending || 0, statusCounts.approved || 0],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
        hoverBackgroundColor: ['#FF7F50', '#66CDAA', '#4682B4'],
      },
    ],
  };

  const doughnutChartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Order Status Distribution',
        font: {
          size: 18,
        },
      },
    },
  };

  // Prepare data for the line chart
  const allMonths = Array.from({ length: 12 }, (_, i) => i + 1);
  const filteredSales = allMonths.map(month => ({
    month,
    totalSales: monthlySales.find(sale => sale.year === selectedYear && sale.month === month)?.totalSales || 0,
  }));

  const totalIncomeYear = filteredSales.reduce((total, sale) => total + sale.totalSales, 0);
  const currentMonth = new Date().getMonth() + 1;
  const currentMonthIncome = filteredSales.find(sale => sale.month === currentMonth)?.totalSales || 0;

  const lineChartData = {
    labels: filteredSales.map(sale => `Month ${sale.month}`),
    datasets: [
      {
        label: `Total Sales in ${selectedYear}`,
        data: filteredSales.map(sale => sale.totalSales),
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const lineChartOptions = {
    plugins: {
      title: {
        display: true,
        text: `Monthly Sales Overview (${selectedYear})`,
        font: {
          size: 18,
        },
      },
    },
  };

  // Prepare data for the bar chart
  const allMonthsArray = Array.from({ length: 12 }, (_, i) => i + 1);
  const incomeByMonth = allMonthsArray.map(month => ({
    month,
    totalAmount: incomeData.find(data => data.year === selectedIncomeYear && data.month === month)?.totalAmount || 0,
  }));

  const barChartData = {
    labels: incomeByMonth.map(item => `Month ${item.month}`),
    datasets: [
      {
        label: `Total Income in ${selectedIncomeYear}`,
        data: incomeByMonth.map(item => item.totalAmount),
        backgroundColor: '#4BC0C0',
        borderColor: '#4BC0C0',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Total Earned Income from Canteen',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
        },
        beginAtZero: true,
      },
    },
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleIncomeYearChange = (event) => {
    setSelectedIncomeYear(parseInt(event.target.value));
  };

  const incomeFilteredSales = monthlySales.filter(sale => sale.year === selectedIncomeYear);
  const incomeYearTotal = incomeFilteredSales.reduce((total, sale) => total + sale.totalSales, 0);

  return (
    <>
      <Navbar />

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Order Status Overview</h2>
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Monthly Sales Overview</h2>
            <select
              className="mb-4 p-2 border rounded"
              value={selectedYear}
              onChange={handleYearChange}
            >
              {[2024, 2025, 2026].map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Total Earned Income</h2>
            <select
              className="mb-4 p-2 border rounded"
              value={selectedIncomeYear}
              onChange={handleIncomeYearChange}
            >
              {[2024, 2025, 2026].map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>

        <div className="bg-blue-100 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-medium">Total Pending Orders</h3>
              <p className="text-2xl">{statusCounts.pending || 0}</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-medium">Total Not Yet Approved Orders</h3>
              <p className="text-2xl">{statusCounts.notYetApproved || 0}</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-medium">Total Income of the Year</h3>
              <p className="text-2xl">Rs.{incomeYearTotal}</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-medium">Current Month ({new Date().toLocaleString('default', { month: 'long' })}) Income</h3>
              <p className="text-2xl">Rs.{currentMonthIncome}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;*/
// import React, { useState, useEffect } from 'react';
// import { Doughnut, Line, Bar } from 'react-chartjs-2';
// import 'chart.js/auto';
// import Navbar from "../components/AccountNavbar";

// const Dashboard = () => {
//   const [statusCounts, setStatusCounts] = useState({});
//   const [monthlySales, setMonthlySales] = useState([]);
//   const [canteenIncome, setCanteenIncome] = useState([]);
//   const [selectedYear, setSelectedYear] = useState(2024); // Default to 2024
//   const [selectedIncomeYear, setSelectedIncomeYear] = useState(2024); // Default for income view
//   const [selectedCanteenIncomeYear, setSelectedCanteenIncomeYear] = useState(2024); // Default for canteen income view

//   useEffect(() => {
//     // Fetch status counts
//     fetch("http://localhost:5255/api/Orders/statusCounts")
//       .then(response => response.json())
//       .then(data => setStatusCounts(data));

//     // Fetch monthly sales
//     fetch("http://localhost:5255/api/Orders/monthlySales")
//       .then(response => response.json())
//       .then(data => setMonthlySales(data.filter(sale => sale.year >= 2024)));

//     // Fetch total earned income from the canteen
//     fetch("http://localhost:5255/api/Purchased/totalAmount")
//       .then(response => response.json())
//       .then(data => setCanteenIncome(data));
//   }, []);

//   // Prepare data for Doughnut Chart
//   const doughnutChartData = {
//     labels: ['Not Yet Approved', 'Pending', 'Approved'],
//     datasets: [
//       {
//         data: [statusCounts.notYetApproved, statusCounts.pending, statusCounts.approved],
//         backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
//         hoverBackgroundColor: ['#FF7F50', '#66CDAA', '#4682B4'],
//       },
//     ],
//   };

//   const doughnutChartOptions = {
//     responsive: true,
//     maintainAspectRatio: true,
//     plugins: {
//       title: {
//         display: true,
//         text: 'Order Status Distribution',
//         font: {
//           size: 18,
//         },
//       },
//     },
//   };

//   // Prepare data for Line Chart
//   const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   const filteredSales = monthNames.map((monthName, i) => {
//     const month = i + 1;
//     return {
//       month,
//       totalSales: monthlySales.find(sale => sale.year === selectedYear && sale.month === month)?.totalSales || 0,
//     };
//   });

//   const totalIncomeYear = filteredSales.reduce((total, sale) => total + sale.totalSales, 0);
//   const currentMonth = new Date().getMonth() + 1;
//   const currentMonthIncome = filteredSales.find(sale => sale.month === currentMonth)?.totalSales || 0;

//   const lineChartData = {
//     labels: filteredSales.map(sale => monthNames[sale.month - 1]), // Use real month names
//     datasets: [
//       {
//         label: `Total Sales in ${selectedYear}`,
//         data: filteredSales.map(sale => sale.totalSales),
//         borderColor: '#FF6384',
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       },
//     ],
//   };

//   const lineChartOptions = {
//     responsive: true,
//     maintainAspectRatio: true,
//     plugins: {
//       title: {
//         display: true,
//         text: `Monthly Sales Overview (${selectedYear})`,
//         font: {
//           size: 18,
//         },
//       },
//     },
//   };

//   // Prepare data for Bar Chart
//   const canteenIncomeMonthlyData = monthNames.map((monthName, i) => {
//     const month = i + 1;
//     const monthData = canteenIncome.find(item => item.year === selectedCanteenIncomeYear && item.month === month);
//     return {
//       monthName,
//       totalAmount: monthData ? monthData.totalAmount : 0,
//     };
//   });

//   const barChartData = {
//     labels: canteenIncomeMonthlyData.map(income => income.monthName),
//     datasets: [
//       {
//         label: `Canteen Income in ${selectedCanteenIncomeYear}`,
//         data: canteenIncomeMonthlyData.map(income => income.totalAmount),
//         backgroundColor: 'rgba(54, 162, 235, 0.6)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
//         hoverBorderColor: 'rgba(54, 162, 235, 1)',
//       },
//     ],
//   };

//   const barChartOptions = {
//     responsive: true,
//     maintainAspectRatio: true,
//     plugins: {
//       title: {
//         display: true,
//         text: `Total Earned Income from Canteen (${selectedCanteenIncomeYear})`,
//         font: {
//           size: 18,
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           callback: (value) => `Rs.${value}`, // Add currency symbol
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(parseInt(event.target.value));
//   };

//   const handleIncomeYearChange = (event) => {
//     setSelectedIncomeYear(parseInt(event.target.value));
//   };

//   const handleCanteenIncomeYearChange = (event) => {
//     setSelectedCanteenIncomeYear(parseInt(event.target.value));
//   };

//   // Compute income totals
//   const incomeFilteredSales = monthlySales.filter(sale => sale.year === selectedIncomeYear);
//   const incomeYearTotal = incomeFilteredSales.reduce((total, sale) => total + sale.totalSales, 0);

//   const filteredCanteenIncome = canteenIncome.filter(income => income.year === selectedCanteenIncomeYear);
//   const canteenIncomeYearTotal = filteredCanteenIncome.reduce((total, income) => total + income.totalAmount, 0);

//   return (
//     <>
//       <Navbar />

//       <div className="p-6">
//         {/* Charts in one line */}
//         <div className="flex flex-wrap gap-4 mb-6">
//           <div className="bg-white shadow-lg rounded-lg p-4 flex-1 min-w-[300px] h-[300px] relative">
//             <h2 className="text-lg font-semibold mb-2">Order Status Overview</h2>
//             <div className="h-full">
//               <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg p-4 flex-1 min-w-[300px] h-[300px] relative">
//             <h2 className="text-lg font-semibold mb-2">Monthly Sales Overview</h2>
//             <select
//               className="mb-2 p-1 border rounded text-sm"
//               value={selectedYear}
//               onChange={handleYearChange}
//             >
//               {[2024, 2025, 2026].map(year => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//             <div className="h-full">
//               <Line data={lineChartData} options={lineChartOptions} />
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg p-4 flex-1 min-w-[300px] h-[300px] relative">
//             <h2 className="text-lg font-semibold mb-2">Year-Wise Canteen Income</h2>
//             <select
//               className="mb-2 p-1 border rounded text-sm"
//               value={selectedCanteenIncomeYear}
//               onChange={handleCanteenIncomeYearChange}
//             >
//               {[2024, 2025, 2026].map(year => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//             <div className="h-full">
//               <Bar data={barChartData} options={barChartOptions} />
//             </div>
//           </div>
//         </div>

//         {/* Other content below charts */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div className="bg-white shadow-lg rounded-lg p-4">
//             <h2 className="text-lg font-semibold mb-2">Canteen Income Overview</h2>
//             <select
//               className="mb-2 p-1 border rounded text-sm"
//               value={selectedCanteenIncomeYear}
//               onChange={handleCanteenIncomeYearChange}
//             >
//               {[2024, 2025, 2026].map(year => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//             <div className="bg-white shadow p-4 rounded">
//               <h3 className="text-md font-medium">Total Earned Income from Canteen</h3>
//               <p className="text-xl">Rs.{canteenIncomeYearTotal}</p>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg p-4">
//             <h2 className="text-lg font-semibold mb-2">Key Metrics</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-md font-medium">Total Pending Orders</h3>
//                 <p className="text-xl">{statusCounts.pending}</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-md font-medium">Total Not Yet Approved Orders</h3>
//                 <p className="text-xl">{statusCounts.notYetApproved}</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-md font-medium">Total Income of the Year</h3>
//                 <select
//                   className="mb-2 p-1 border rounded text-sm"
//                   value={selectedIncomeYear}
//                   onChange={handleIncomeYearChange}
//                 >
//                   {[2024, 2025, 2026].map(year => (
//                     <option key={year} value={year}>
//                       {year}
//                     </option>
//                   ))}
//                 </select>
//                 <p className="text-xl">Rs.{incomeYearTotal}</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="text-md font-medium">Current Month ({new Date().toLocaleString('default', { month: 'long' })}) Income</h3>
//                 <p className="text-xl">Rs.{currentMonthIncome}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Navbar from "../components/AccountNavbar";
import Account from "../assets/images/Accountant-Hero-1.jpg";

const Dashboard = () => {
  const [statusCounts, setStatusCounts] = useState({});
  const [monthlySales, setMonthlySales] = useState([]);
  const [canteenIncome, setCanteenIncome] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2024); // Default to 2024
  const [selectedIncomeYear, setSelectedIncomeYear] = useState(2024); // Default for income view
  const [selectedCanteenIncomeYear, setSelectedCanteenIncomeYear] = useState(2024); // Default for canteen income view

  useEffect(() => {
    // Fetch status counts
    fetch("http://localhost:5255/api/Orders/statusCounts")
      .then(response => response.json())
      .then(data => setStatusCounts(data));

    // Fetch monthly sales
    fetch("http://localhost:5255/api/Orders/monthlySales")
      .then(response => response.json())
      .then(data => setMonthlySales(data.filter(sale => sale.year >= 2024)));

    // Fetch total earned income from the canteen
    fetch("http://localhost:5255/api/Purchased/totalAmount")
      .then(response => response.json())
      .then(data => setCanteenIncome(data));
  }, []);

  // Prepare data for Doughnut Chart
  const doughnutChartData = {
    labels: ['Not Yet Approved', 'Pending', 'Approved'],
    datasets: [
      {
        data: [statusCounts.notYetApproved, statusCounts.pending, statusCounts.approved],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
        hoverBackgroundColor: ['#FF7F50', '#66CDAA', '#4682B4'],
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: 'Order Status Distribution',
        font: {
          size: 18,
        },
      },
    },
  };

  // Prepare data for Line Chart
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const filteredSales = monthNames.map((monthName, i) => {
    const month = i + 1;
    return {
      month,
      totalSales: monthlySales.find(sale => sale.year === selectedYear && sale.month === month)?.totalSales || 0,
    };
  });

  const totalIncomeYear = filteredSales.reduce((total, sale) => total + sale.totalSales, 0);
  const currentMonth = new Date().getMonth() + 1;
  const currentMonthIncome = filteredSales.find(sale => sale.month === currentMonth)?.totalSales || 0;

  const lineChartData = {
    labels: filteredSales.map(sale => monthNames[sale.month - 1]), // Use real month names
    datasets: [
      {
        label: `Total Sales in ${selectedYear}`,
        data: filteredSales.map(sale => sale.totalSales),
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: `Monthly Sales Overview (${selectedYear})`,
        font: {
          size: 18,
        },
      },
    },
  };

  // Prepare data for Bar Chart
  const canteenIncomeMonthlyData = monthNames.map((monthName, i) => {
    const month = i + 1;
    const monthData = canteenIncome.find(item => item.year === selectedCanteenIncomeYear && item.month === month);
    return {
      monthName,
      totalAmount: monthData ? monthData.totalAmount : 0,
    };
  });

  const barChartData = {
    labels: canteenIncomeMonthlyData.map(income => income.monthName),
    datasets: [
      {
        label: `Canteen Income in ${selectedCanteenIncomeYear}`,
        data: canteenIncomeMonthlyData.map(income => income.totalAmount),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: `Total Earned Income from Canteen (${selectedCanteenIncomeYear})`,
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `Rs.${value}`, // Add currency symbol
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleIncomeYearChange = (event) => {
    setSelectedIncomeYear(parseInt(event.target.value));
  };

  const handleCanteenIncomeYearChange = (event) => {
    setSelectedCanteenIncomeYear(parseInt(event.target.value));
  };

  // Compute income totals
  const incomeFilteredSales = monthlySales.filter(sale => sale.year === selectedIncomeYear);
  const incomeYearTotal = incomeFilteredSales.reduce((total, sale) => total + sale.totalSales, 0);

  const filteredCanteenIncome = canteenIncome.filter(income => income.year === selectedCanteenIncomeYear);
  const canteenIncomeYearTotal = filteredCanteenIncome.reduce((total, income) => total + income.totalAmount, 0);

  

  return (
    <>
      <Navbar />

      <div className="p-6 mt-16">
        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
          <div className="bg-white shadow-lg rounded-lg p-2 "
            style={{
              backgroundImage: `url(${Account})`,
              backgroundSize: 'cover', // Adjusts the image to cover the entire div
              backgroundPosition: 'center', // Centers the image
            }}>
           
            <select
              className="mb-2 p-1 border rounded text-sm"
              value={selectedCanteenIncomeYear}
              onChange={handleCanteenIncomeYearChange}
            >
              {[2024, 2025, 2026].map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-md font-medium">Total Earned Income from Canteen</h3>
              <p className="text-xl">Rs.{canteenIncomeYearTotal}</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white shadow p-4 rounded">
                <h3 className="text-md font-medium">Total Pending Orders</h3>
                <p className="text-xl">{statusCounts.pending}</p>
              </div>
              <div className="bg-white shadow p-4 rounded">
                <h3 className="text-md font-medium">Total Not Yet Approved Orders</h3>
                <p className="text-xl">{statusCounts.notYetApproved}</p>
              </div>
              <div className="bg-white shadow p-4 rounded">
                <h3 className="text-md font-medium">Total Income of the Year</h3>
                <select
                  className="mb-2 p-1 border rounded text-sm"
                  value={selectedIncomeYear}
                  onChange={handleIncomeYearChange}
                >
                  {[2024, 2025, 2026].map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <p className="text-xl">Rs.{incomeYearTotal}</p>
              </div>
              <div className="bg-white shadow p-4 rounded">
                <h3 className="text-md font-medium">Current Month ({new Date().toLocaleString('default', { month: 'long' })}) Income</h3>
                <p className="text-xl">Rs.{currentMonthIncome}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <select
              className="mb-2 p-1 border rounded text-sm"
              value={selectedYear}
              onChange={handleYearChange}
            >
              {[2024, 2025, 2026].map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <select
              className="mb-2 p-1 border rounded text-sm"
              value={selectedCanteenIncomeYear}
              onChange={handleCanteenIncomeYearChange}
            >
              {[2024, 2025, 2026].map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
