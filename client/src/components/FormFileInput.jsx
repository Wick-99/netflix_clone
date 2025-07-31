import React from "react";
import FormErrorMessage from "./FormErrorMessage";

const FormFileInput = ({ label, name, register, errors, accept = "image/*" }) => {
   return (
      <div className="mb-3">
         <label className="form-label">{label}</label>
         <input
            type="file"
            accept={accept}
            className="form-control bg-secondary text-white border-0"
            {...register(name, { required: true })}
         />
         <FormErrorMessage message={errors[name]?.message} />
      </div>
   );
};

export default FormFileInput;
