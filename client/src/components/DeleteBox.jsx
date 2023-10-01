import React from 'react';

const DeleteBox = ({ isVisible, onConfirm, onCancel }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-700 p-4 rounded shadow-lg max-w-6xl"> 
        <p className="mb-4 text-white">
          Are you sure you want to delete your account?
        </p>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-red-600 text-white rounded"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-900 text-white rounded"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBox;
