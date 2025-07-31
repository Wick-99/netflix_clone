import React from "react";

const FormErrorMessage = ({ message }) => {
   if (!message) return null;
   return <div className="invalid-feedback d-block mt-2">{message}</div>;
};

export default FormErrorMessage;
