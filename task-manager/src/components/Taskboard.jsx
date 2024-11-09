import React from 'react';
import Sidebar from './Sidebar';
import Column from './Column';

const TaskBoard = () => {
  const tasks = {
    todo: [
      { id: 1, priority: 'Low', title: 'Brainstorming', description: 'Brainstorming brings team members\' diverse experience into play.', deadline: '12/5/24' },
      { id: 2, priority: 'High', title: 'Research', description: 'User research helps you to create an optimal product for users.', deadline: '12/5/24' },
      { id: 3, priority: 'High', title: 'Wireframes', description: 'Low fidelity wireframes include the most basic content and visuals.', deadline: '12/5/24' },
    ],
    inProgress: [
      { id: 4, priority: 'Low', title: 'Onboarding Illustrations', deadline: '12/5/24' },
      { id: 5, priority: 'Low', title: 'Moodboard', deadline: '12/5/24' },
    ],
    done: [
      { id: 6, title: 'Mobile App Design', deadline: '12/5/24' },
      { id: 7, title: 'Design System', description: 'It just needs to adapt the UI from what you did before.', deadline: '12/5/24' },
    ]
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex gap-4 p-4">
        <Column title="To Do" tasks={tasks.todo} />
        <Column title="On Progress" tasks={tasks.inProgress} />
        <Column title="Done" tasks={tasks.done} />
      </div>
    </div>
  );
};

export default TaskBoard;
