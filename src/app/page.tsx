/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { useState, useRef } from 'react';
import FormInput from '@/components/FormInput';

const Home = () => {
  // create ref object
  // merefrensi ke html tujuan
  const passwordRef = useRef<HTMLInputElement>(null);

  // declare useState
  // const [count, setCount] = React.useState<number>(0);
  const [count, setCount] = useState<number>(0); //return [value, (paramValue) => {array[0]=value}]
  const [inputValue, setInputValue] = useState<string>('');

  const onIncrement = () => {
    // memperbarui data pada state 'count' melalui setCount
    setCount(count + 1);
  };

  const onHandleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  // state for form-data
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>();
  const [email, setEmail] = useState<string>('');

  // set value to state
  // const onHandleName = (e: any) => {
  //   setName(e.target.value);
  // };
  // const onHandleAge = (e: any) => {
  //   setAge(e.target.value);
  // };
  // const onHandleEmail = (e: any) => {
  //   setEmail(e.target.value);
  // };

  // store datas
  const [data, setData] = useState<any[]>([]);

  const onSave = () => {
    // spread ope
    // setData([...data, { name, age, email }]);

    // temp method
    // const temp = [...data];
    // temp.push({ name, age, email });
    // setData(temp);

    if (passwordRef.current) {
      console.log('ref from pw input', passwordRef.current.value);
    }
  };
  console.log(data);

  const printData = () => {
    return data.map((e, i) => {
      return (
        <tr key={i} className="border-2 border-collapse text-center">
          <td className="border-2 border-collapse">{i + 1}</td>
          <td className="border-2 border-collapse">{e.name}</td>
          <td className="border-2 border-collapse">{e.age}</td>
          <td className="border-2 border-collapse">{e.email}</td>
          <td className="border-2 border-collapse flex gap-2 items-center justify-center">
            <button className="bg-green-500">edit</button>
            <button className="bg-red-500">delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="w-1/2 m-auto">
      <h1 className="text-5xl text-center uppercase">Manajemen Data</h1>
      <div className="hidden">
        {/* display data from state */}
        <h1 className="text-9xl">{count}</h1>
        <button type="button" className="bg-gray-300 p-2 rounded-md shadow-md" onClick={onIncrement}>
          Increment
        </button>
        {/* <input
          type="text"
          placeholder="Type something"
          className="p-2 border"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        /> */}
        <input type="text" placeholder="Type something" className="p-2 border" onChange={onHandleInput} />
        <span>{inputValue}</span>
      </div>
      <div id="form-data" className="flex flex-col gap-3">
        {/* <FormInput type="text" label="Full Name" placeholder="Type your name" onChange={onHandleName} /> */}
        <FormInput type="text" label="Full Name" placeholder="Type your name" onChange={(e) => setName(e.target.value)} />
        {/* <FormInput type="number" label="Age" placeholder="Type your age" onChange={onHandleAge} /> */}
        <FormInput type="number" label="Age" placeholder="Type your age" onChange={(e) => setAge(e.target.value)} />
        {/* <FormInput type="text" label="Email" placeholder="Type your email" onChange={onHandleEmail} /> */}
        <FormInput type="text" label="Email" placeholder="Type your email" onChange={(e) => setEmail(e.target.value)} />
        <FormInput type="password" label="Password" placeholder="Type your Password" onChange={(e) => setEmail(e.target.value)} ref={passwordRef} />
        <button type="button" className="bg-slate-300 p-2 rounded-md" onClick={onSave}>
          Save
        </button>
      </div>
      <table className="w-full mt-2">
        <thead>
          <tr className="border-2 border-collapse">
            <th className="border-2 border-collapse">no</th>
            <th className="border-2 border-collapse">name</th>
            <th className="border-2 border-collapse">age</th>
            <th className="border-2 border-collapse">email</th>
            <th className="border-2 border-collapse">action</th>
          </tr>
        </thead>
        <tbody>{printData()}</tbody>
      </table>
    </div>
  );
};

export default Home;
// react hooks kumpulan fungsi bawaan untuk membantu kita
//  useState mereturn array [0] value [1] setvalue
