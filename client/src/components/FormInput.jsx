import React from "react";
import FormErrorMessage from "./FormErrorMessage";

const FormInput = ({
   label,
   name,
   register,
   errors,
   type,
   placeholder = "",
   className = "",
   ...rest
}) => {
   return (
      <div className="mb-3">
         {label && (
            <label htmlFor={name} className="form-label">
               {label}
            </label>
         )}
         <input
            id={name}
            type={type}
            placeholder={placeholder}
            className={`form-control bg-secondary text-white border-0 ${
               errors[name] ? "is-invalid" : ""
            } ${className}`}
            {...register(name)}
            {...rest}
         />
         <FormErrorMessage message={errors[name]?.message} />
      </div>
   );
};

export default FormInput;
