import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/AccountNavbar"

const PurchasedTable = () => {
  const [purchasedRecords, setPurchasedRecords] = useState([]);

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

  return (
    <div className="container mx-auto p-4">
        <Navbar />
      <h2 className="text-2xl font-semibold mb-4">Purchased Records</h2>
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
          {purchasedRecords.map((record) => (
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
    </div>
  );
};

export default PurchasedTable;
