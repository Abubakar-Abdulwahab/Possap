import { ErrorMessage } from "formik";
import propTypes from "prop-types";
import React from "react";

const TextareaField = ({ getFieldProps, touched, errors, val }) => {
  return (
    <div className="col-md-12">
      <label htmlFor={val.name} class="form-label text-left">
        {val.label}
      </label>
      <textarea
        {...getFieldProps(val.name)}
        className={
          "form-control " +
          (touched[val.name] && errors[val.name]
            ? "is-invalid"
            : touched[val.name] && !errors[val.name]
            ? "is-valid"
            : "")
        }
        id={val.name}
      ></textarea>
      <ErrorMessage name={val.name} component="div" className="invalid-feedback" />
      {touched[val.name] && !errors[val.name] && (
        <div className="valid-feedback">Looks good!</div>
      )}
    </div>
  );
};
TextareaField.propTypes = {
  getFieldProps: propTypes.func,
  touched: propTypes.object,
  errors: propTypes.object,
  val: propTypes.object,
};

export default TextareaField;
