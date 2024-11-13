import React, { useContext } from "react";
import { AlertContext } from "../context/alertContext";

const Alert = () => {
  const { state } = useContext(AlertContext)

  return (
    state !== null && (
      <div
        className="alert alert-danger d-flex align-items-center mt-3 w-100"
        role="alert"
      >
        <div>
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {state}
        </div>
      </div>
    )
  );
};

export default Alert;
