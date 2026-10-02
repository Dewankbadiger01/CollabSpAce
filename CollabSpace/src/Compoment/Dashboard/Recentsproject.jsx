import React from "react";

const Recentsproject = ({
  recentproject = [],
  onCreateWorkspace,
}) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">

      {/* Recent Workspace */}
      <div className="rounded-2xl col-span-2 bg-white border border-gray-200 p-6 shadow-sm">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Recent Workspace
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Continue working on your projects
            </p>
          </div>

          <button className="text-sm text-blue-600 hover:text-blue-700">
            View all
          </button>
        </div>

        {/* Workspace List */}
        {recentproject.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-gray-500 text-lg">
              No recent workspaces
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {recentproject.map((workspace, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-slate-900">
                  {workspace.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {workspace.description || "No description"}
                </p>
              </div>
            ))}

          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        <h2 className="text-xl font-semibold text-slate-900">
          Quick Actions
        </h2>

        <p className="text-sm text-gray-500 mt-1 mb-6">
          Get started quickly
        </p>

        <div className="space-y-3">

          {/* Create Workspace */}
          <button
            onClick={onCreateWorkspace}
            className="w-full flex items-center gap-3 p-4 rounded-xl text-white bg-blue-500 hover:bg-blue-700 transition"
          >
            <span className="text-xl">+</span>
            Create Workspace
          </button>

          {/* Create Document */}
          <button
            className="w-full flex items-center gap-3 p-4 rounded-xl text-white bg-blue-500 hover:bg-blue-700 transition"
          >
            <span className="text-xl">+</span>
            Create Document
          </button>

          {/* Start Meeting */}
          <button
            className="w-full flex items-center gap-3 p-4 rounded-xl text-white bg-blue-500 hover:bg-blue-700 transition"
          >
            <span className="text-xl">+</span>
            Start Meeting
          </button>

        </div>
      </div>

    </div>
  );
};

export default Recentsproject;
