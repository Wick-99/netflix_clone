import React from "react";
import FormErrorMessage from "./FormErrorMessage";

const FormSelect = ({ label, name, register, errors, options = [], ...rest }) => {
   return (
      <div className="mb-3">
         <label className="form-label">{label}</label>
         <select
            className="form-select bg-secondary text-white border-0"
            {...register(name)}
            {...rest}
         >
            <option value="">Select {label}</option>
            {options.map((option, idx) => (
               <option key={idx} value={option.value || option.genres}>
                  {option.label || option.genres}
               </option>
            ))}
         </select>
         <FormErrorMessage message={errors[name]?.message} />
      </div>
   );
};

export default FormSelect;
