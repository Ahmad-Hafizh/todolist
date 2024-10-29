/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
interface IFormInput {
  label?: string;
  type: string;
  placeholder?: string;
  // untuk passing function
  onChange?: (e: any) => void;
  ref?: any;
}
// yang awal yg wajib diisi
const FormInput: React.FunctionComponent<IFormInput> = ({ type, label, placeholder, onChange, ref }) => {
  // const [visible, setVisible] = useState<string>(type === 'password' ? 'password' : 'text');
  // const [isPassword, setIsPassword] = useState<boolean>(type === 'password' ? true : false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (type === 'password') {
    let icon;
    let activeType;
    if (isVisible) {
      icon = <IoEye />;
      activeType = 'text';
    } else {
      icon = <IoEyeOff />;
      activeType = 'password';
    }

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-bold">
          {label}
        </label>
        <div className="w-full h-auto flex justify-center items-center gap-2  relative">
          {/* <input type={type === 'text' ? type : visible} placeholder={placeholder} className="w-full border p-2 border-gray-300 rounded-md shadow-sm" onChange={onChange} /> */}
          <input type={activeType} placeholder={placeholder} className="w-full border p-2 border-gray-300 rounded-md shadow-sm" onChange={onChange} ref={ref} />
          {/* <button
            style={isPassword ? { display: 'block' } : { display: 'none' }}
            onClick={() => {
              setVisible(visible === 'password' ? 'text' : 'password');
              setIsPassword(true);
            }}
            className="p-2 absolute right-0"
          >
            {visible === 'password' ? <IoEye /> : <IoEyeOff />}
          </button> */}
          <button
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            className="p-2 absolute right-0"
          >
            {icon}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-bold">
          {label}
        </label>
        <div className="w-full h-auto flex justify-center items-center gap-2  relative">
          <input type={type} placeholder={placeholder} className="w-full border p-2 border-gray-300 rounded-md shadow-sm" onChange={onChange} />
        </div>
      </div>
    );
  }
};

export default FormInput;
