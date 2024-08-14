import React, { useState } from 'react';
import axios from 'axios';

const RoleEditPopup = ({ user, onClose, fetchUsersWithRoles, setMessage }) => {
  const [editRole, setEditRole] = useState(user.role);

  const handleEditRoleSubmit = async () => {
    try {
      const response = await axios.post('https://localhost:7269/api/Account/edit-role', { username: user.username, role: editRole });
      setMessage(response.data.message);
      fetchUsersWithRoles();  // Refresh the table after editing role
      onClose();  // Close the popup after successful edit
    } catch (err) {
      setMessage('Error editing role');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <h3 className="text-xl font-bold mb-4">Edit Role for {user.username}</h3>
        <input
          type="text"
          value={editRole}
          onChange={(e) => setEditRole(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="New Role"
        />
        <div className="flex justify-end">
          <button
            onClick={handleEditRoleSubmit}
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 mr-2"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleEditPopup;
