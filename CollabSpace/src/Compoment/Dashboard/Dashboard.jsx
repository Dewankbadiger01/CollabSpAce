import React from "react";
import Sidebar from "./Siderbar";
import Recentsproject from "./Recentsproject";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar />
      <main className="flex-1 p-10">

        <div className="mb-8">
          <h1 className="text-4xl font-sans ">
            Welcome back, Dewank!!
          </h1>

          <p className="mt-2 text-lg text-blue-600">
            Here's what's happening with your workspaces.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 max-w-3xl">

          {/* Workspace Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-500">
              Active Workspaces
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              12
            </h2>

            <p className="mt-2 text-sm text-green-600">
              +2 this month
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-500">
              Team Members
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              24
            </h2>

            <p className="mt-2 text-sm text-blue-600">
              5 active now
            </p>
            
          </div>

        </div>
<Recentsproject/>
      </main>
    </div>
  );
};

export default Dashboard;