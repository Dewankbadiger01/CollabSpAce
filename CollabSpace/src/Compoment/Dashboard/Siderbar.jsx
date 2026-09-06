import React from "react";

const Sidebar = () => {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Workspace",
      path: "/workspace",
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6">

      <h1 className="text-2xl font-bold mb-10">
        Collab<span className="text-blue-600">Space</span>
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className="w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {item.name}
          </button>
        ))}
      </nav>

    </aside>
  );
};

export default Sidebar;