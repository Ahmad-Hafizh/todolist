'use client';
import React, { useEffect, useState } from 'react';
// use effect
// mengeksekusi function pada saat tertentu
// 3 mode
// 1. eksekutor function saat pertama kali di load
// 2. menajalankan fungsi tiap ada state yg berubah
// 3. menajalankan fungsi tiap ada state yg tertentu berubah

// for example
// load data from database

const List = () => {
  const [data, setData] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [isTrue, setIsTrue] = useState<boolean>(false);

  // model penggunaan useEffect
  // syntax : useEffect(callbackFn, dependencies?[])
  // 1. useEffect hanya akan menjalankan fungsi pada saat pertama kali render page
  useEffect(() => {
    console.log('use effect run first ');
  }, []);

  // 2. useEffect akan menjalankan fungsi callback setiap kali ada state yang berubah -- tanpa array dependencies
  useEffect(() => {
    console.log('use effect run every changes');
  });

  // 3. useEffect hanya akan menjalankan fungsi callback jika state yang ditentukan berubah
  useEffect(() => {
    alert('useEffect only run when state data changes');
  }, [count]);

  return (
    <div>
      <h1>List Page</h1>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          setIsTrue(!isTrue);
        }}
        className="uppercase border p-2"
      >
        {isTrue ? 'true' : 'false'}
      </button>
    </div>
  );
};

export default List;
