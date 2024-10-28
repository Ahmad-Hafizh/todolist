/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  const [data, setData] = useState<any[]>([]);
  const isChecked = false;
  const [task, setTask] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  const printData = () => {
    return data.map((e, i) => {
      if (e.isChecked) {
        setCount(count + 1);
      }

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
    });
  };

  const onHandleCheck = (i: number) => {
    data[i].isChecked = !data[i].isChecked;
    console.log(data[i]);
    printData();
  };
  const onHandleDelete = (i: number) => {
    data.splice(i, 1);
    console.log(data);

    printData();
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-start py-12">
      <h1 className="text-2xl">My ToDo List</h1>
      <div className="w-full h-[70%] mt-10 mx-auto flex justify-center">
        <div className="w-[60%] flex flex-col justify-start items-center gap-2">{printData()}</div>
      </div>

      <div className="border-t w-full flex flex-col justify-start items-center h-[30%]">
        <div className="w-[50%] mt-10 flex flex-col items-center gap-4">
          <p className="text-2xl">Done : {count}</p>
          <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor="input-task">Add todo</label>
            <input type="text" placeholder="type the task" name="input-task" className="w-full border-2 p-2 rounded-md" onChange={(e) => setTask(e.target.value)} />
            <button onClick={() => setData([...data, { isChecked, task }])} className="border-2 p-2 rounded-md bg-slate-600 text-white">
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
