/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  const [data, setData] = useState<any[]>([]);
  const [task, setTask] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [search, setSearch] = useState<string>('');

  const onHandleDelete = (i: number) => {
    const newData = data.filter((e, idx) => {
      if (idx !== i) {
        return e;
      }
    });
    setData(newData);
    findChecked(newData);
  };
  const onHandleCheck = (i: number) => {
    const newData = data.map((e, idx) => {
      if (idx === i) {
        e.isChecked = !e.isChecked;
      }
      return e;
    });
    setData(newData);
    findChecked(newData);
  };

  const findChecked = (newData: any) => {
    const newChecked = newData.filter((e: any) => {
      if (e.isChecked === true) {
        return e;
      }
    });
    // console.log(newChecked);
    setCount(newChecked.length);
  };

  console.log(search);

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-start py-12">
      <h1 className="text-2xl">My ToDo List</h1>

      <div className="w-full h-[70%] mt-10 mx-auto flex flex-col justify-start items-center">
        <input
          type="text"
          placeholder="search"
          className="w-[50%] border p-2 mb-5"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="w-[60%] flex flex-col justify-start items-center gap-2">
          {data.map((e, i) => {
            if (search === '') {
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
                  checkedDone={e.isChecked}
                />
              );
            } else if (e.task.includes(search)) {
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
                  checkedDone={e.isChecked}
                />
              );
            }
          })}
        </div>
      </div>

      <div className="border-t w-full flex flex-col justify-start items-center h-[30%]">
        <div className="w-[50%] mt-10 flex flex-col items-center gap-4">
          <p className="text-2xl">Done : {count}</p>
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
