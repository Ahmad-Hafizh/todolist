/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
interface IFormInput {
  label?: string;
  type: string;
  placeholder?: string;
  // untuk passing function
  onChange?: (e: any) => void;
}
// yang awal yg wajib diisi
const FormInput: React.FunctionComponent<IFormInput> = ({ type, label, placeholder, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="font-bold">
        {label}
      </label>
      <input type={type} placeholder={placeholder} className="border border-gray-300 p-2 rounded-md shadow-sm" onChange={onChange} />
    </div>
  );
};

export default FormInput;
