import React from 'react';
import Taskcard from './Taskcard';

const Column = ({ title, tasks }) => (
  <div className="flex-1 bg-gray-50 p-4 rounded-md">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {tasks.map(task => (
      <Taskcard key={task.id} task={task} />
    ))}
  </div>
);

export default Column;
