/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  const [data, setData] = useState<any[]>([]);
  const [checked, setChecked] = useState<any[]>([]);
  const [task, setTask] = useState<string>('');
  // const [count, setCount] = useState<number>(0);

  const onHandleDelete = (i: number) => {
    const newData = data.filter((e, idx) => {
      if (idx !== i) {
        return e;
      }
    });
    setData(newData);
  };
  const onHandleCheck = (i: number) => {
    const newData = data.map((e, idx) => {
      if (idx === i) {
        e.isChecked = !e.isChecked;
      }
      return e;
    });
    setData(newData);
    findChecked();
  };

  const findChecked = () => {
    const newChecked = data.filter((e) => {
      if (e.isChecked === true) {
        return e;
      }
    });
    setChecked(newChecked);
  };
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-start py-12">
      <h1 className="text-2xl">My ToDo List</h1>
      <div className="w-full h-[70%] mt-10 mx-auto flex justify-center">
        <div className="w-[60%] flex flex-col justify-start items-center gap-2">
          {data.map((e, i) => {
            return (
              <TodoCard
                task={e.task}
                key={i}
                onDelete={() => {
                  onHandleDelete(i);
                }}
                onChecked={() => {
                  onHandleCheck(i);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="border-t w-full flex flex-col justify-start items-center h-[30%]">
        <div className="w-[50%] mt-10 flex flex-col items-center gap-4">
          <p className="text-2xl">Done : {checked.length}</p>
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="input-task">Add todo</label>
            <input type="text" placeholder="type the task" name="input-task" className="w-full border-2 p-2 rounded-md" onChange={(e) => setTask(e.target.value)} />
            <button onClick={() => setData([...data, { isChecked: false, task }])} className="border-2 p-2 rounded-md bg-slate-600 text-white">
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
