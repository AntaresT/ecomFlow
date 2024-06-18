import { FieldValues, UseFormRegister } from "react-hook-form";

interface ICheckboxProps {
  label: string;
  register: UseFormRegister<FieldValues>;
}

export default function Checkbox({label, register}: ICheckboxProps) {
 
  return (
    <div className="flex justify-start m-2 items-center">
      <input checked type="checkbox" className="w-4 h-4 text-blue-800  
      focus:ring-red-500 focus:ring-2" {...register("checkboxOption", {required: "yes"})} />
      <label className="ms-2 text-sm font-medium">
        {label}
      </label>
    </div>
  )
}