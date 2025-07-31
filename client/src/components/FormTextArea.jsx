import React from "react";

const FormTextarea = ({ label, name, register, errors, rows = 2, ...rest }) => {
   return (
      <div className="mb-3">
         <label htmlFor={name} className="form-label">
            {label}
         </label>
         <textarea
            id={name}
            className={`form-control bg-secondary text-white border-0 ${
               errors[name] ? "is-invalid" : ""
            }`}
            rows={rows}
            {...register(name)}
            {...rest}
         />
         {errors[name] && (
            <div className="invalid-feedback">{errors[name].message}</div>
         )}
      </div>
   );
};

export default FormTextarea;
