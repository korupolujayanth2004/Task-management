import React from 'react';

const Taskcard = ({ task }) => (
  <div className={`bg-white rounded-md p-4 mb-4 shadow-md border-l-4 ${task.priority === 'High' ? 'border-red-400' : task.priority === 'Low' ? 'border-yellow-400' : 'border-green-400'}`}>
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold text-sm text-gray-700">{task.priority || 'Completed'}</span>
      <h4 className="text-md font-semibold">{task.title}</h4>
    </div>
    {task.description && <p className="text-sm text-gray-600 mb-2">{task.description}</p>}
    <span className="text-sm text-gray-500">Deadline: {task.deadline}</span>
  </div>
);

export default Taskcard;
