// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/AccountNavbar"

// const PurchasedTable = () => {
//   const [purchasedRecords, setPurchasedRecords] = useState([]);

//   useEffect(() => {
//     fetchPurchasedRecords();
//   }, []);

//   const fetchPurchasedRecords = async () => {
//     try {
//       const response = await axios.get("http://localhost:5255/api/Purchased");
//       setPurchasedRecords(response.data);
//     } catch (error) {
//       console.error("Error fetching purchased records:", error);
//     }
//   };

//   const deleteRecord = async (purchasedId) => {
//     try {
//       await axios.delete(`http://localhost:5255/api/Purchased/${purchasedId}`);
//       setPurchasedRecords((prevRecords) =>
//         prevRecords.filter((record) => record.purchasedId !== purchasedId)
//       );
//     } catch (error) {
//       console.error("Error deleting record:", error);
//     }
//   };

//   return (
//     <>
//     <Navbar />
//     <div className="container mx-auto p-4">
       
//       <h2 className="text-2xl font-semibold mb-4">Purchased Records</h2>
//       <table className="min-w-full bg-white shadow-md rounded-lg">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Purchased ID</th>
//             <th className="py-2 px-4 border-b">Service Number</th>
//             <th className="py-2 px-4 border-b">Service User Name</th>
//             <th className="py-2 px-4 border-b">Order Date</th>
//             <th className="py-2 px-4 border-b">Total Amount</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {purchasedRecords.map((record) => (
//             <tr key={record.purchasedId}>
//               <td className="py-2 px-4 border-b">{record.purchasedId}</td>
//               <td className="py-2 px-4 border-b">{record.serviceNumber}</td>
//               <td className="py-2 px-4 border-b">{record.serviceUserName}</td>
//               <td className="py-2 px-4 border-b">
//                 {new Date(record.orderedDate).toLocaleDateString()}
//               </td>
//               <td className="py-2 px-4 border-b">${record.totalAmount}</td>
//               <td className="py-2 px-4 border-b">
//                 <button
//                   className="bg-red-500 text-white py-1 px-2 rounded"
//                   onClick={() => deleteRecord(record.purchasedId)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// };

// export default PurchasedTable;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/AccountNavbar";
import { FaSearch } from "react-icons/fa";

const PurchasedTable = () => {
  const [purchasedRecords, setPurchasedRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    fetchPurchasedRecords();
  }, []);

  const fetchPurchasedRecords = async () => {
    try {
      const response = await axios.get("http://localhost:5255/api/Purchased");
      setPurchasedRecords(response.data);
    } catch (error) {
      console.error("Error fetching purchased records:", error);
    }
  };

  const deleteRecord = async (purchasedId) => {
    try {
      await axios.delete(`http://localhost:5255/api/Purchased/${purchasedId}`);
      setPurchasedRecords((prevRecords) =>
        prevRecords.filter((record) => record.purchasedId !== purchasedId)
      );
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  const filteredRecords = purchasedRecords.filter((record) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      record.purchasedId.toLowerCase().includes(searchValue) ||
      record.serviceNumber.toLowerCase().includes(searchValue) ||
      record.serviceUserName.toLowerCase().includes(searchValue) ||
      new Date(record.orderedDate).toLocaleDateString().includes(searchValue) ||
      record.totalAmount.toString().includes(searchValue)
    );
  });

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Purchased Records</h2>
        <div className="flex items-center mt-16">
          <input
            type="text"
            placeholder="Search records..."
            className="p-2 border rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="ml-2 text-gray-500" />
        </div>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Purchased ID</th>
              <th className="py-2 px-4 border-b">Service Number</th>
              <th className="py-2 px-4 border-b">Service User Name</th>
              <th className="py-2 px-4 border-b">Order Date</th>
              <th className="py-2 px-4 border-b">Total Amount</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((record) => (
              <tr key={record.purchasedId}>
                <td className="py-2 px-4 border-b">{record.purchasedId}</td>
                <td className="py-2 px-4 border-b">{record.serviceNumber}</td>
                <td className="py-2 px-4 border-b">{record.serviceUserName}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(record.orderedDate).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">${record.totalAmount}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded"
                    onClick={() => deleteRecord(record.purchasedId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 text-white py-1 px-4 rounded"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="bg-blue-500 text-white py-1 px-4 rounded"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PurchasedTable;
