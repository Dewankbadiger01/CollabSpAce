import React, { useState } from "react";

const CreateWorkspaceModal = ({ onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    const newproject = {
      title: name.trim(),
      description: description.trim(),
    };

    // Save to localStorage
    const projects =
      JSON.parse(localStorage.getItem("project")) || [];

    projects.push(newproject);

    localStorage.setItem(
      "project",
      JSON.stringify(projects)
    );

    // Update Dashboard
    onCreate(newproject);

    // Close modal
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[450px] rounded-xl p-6 shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Create Workspace
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ×
          </button>
        </div>

        {/* Workspace Name */}
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Workspace Name
        </label>

        <input
          type="text"
          placeholder="Enter workspace name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 outline-none focus:border-blue-500"
        />

        {/* Description */}
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>

        <textarea
          placeholder="Optional description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none focus:border-blue-500"
          rows="3"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Create
          </button>

        </div>

      </div>
    </div>
  );
};

export default CreateWorkspaceModal;
