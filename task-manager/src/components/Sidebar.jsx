import React from 'react';

const Sidebar = () => (
  <div className="w-52 bg-gray-100 p-5">
    <div className="mb-6 flex justify-between">
      <span>Expired Tasks</span>
      <span>5</span>
    </div>
    <div className="mb-6 flex justify-between">
      <span>All Active Tasks</span>
      <span>7</span>
    </div>
    <div className="mb-6 flex justify-between">
      <span>Completed Tasks</span>
      <span>2/7</span>
    </div>
    <button className="w-full bg-black text-white py-2 mt-4 rounded-md">+ Add Task</button>
  </div>
);

export default Sidebar;
