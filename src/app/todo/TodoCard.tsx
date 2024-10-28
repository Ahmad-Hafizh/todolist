/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
interface ITodoList {
  task: string;
  onChecked?: () => void;
  onDelete?: () => void;
}
const TodoCard: React.FC<ITodoList> = ({ onChecked, task, onDelete }) => {
  return (
    <div className="w-full h-7 grid grid-cols-[10%_80%_10%]">
      <input type="checkbox" onChange={onChecked} />
      <p className="text-left">{task}</p>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default TodoCard;
