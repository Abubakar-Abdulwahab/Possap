import { ErrorMessage } from "formik";
import propTypes from "prop-types";
import React from "react";

const SelectField = ({ getFieldProps, touched, errors, val, values }) => {
  return (
    <div className={val.col}>
      <label htmlFor={val.name} class="form-label text-left">
        {val.label}
      </label>
      <select
        {...getFieldProps(val.name)}
        className={
          "form-select " +
          (touched[val.name] && errors[val.name]
            ? "is-invalid"
            : touched[val.name] && !errors[val.name]
            ? "is-valid"
            : "")
        }
        id={val.name}
      >
        <option selected disabled value="">
          Choose...
        </option>
        {val.options &&
          val.options.map((i) => (
            <option value={i.toLowerCase()}>{i}</option>
          ))}
      </select>
      <ErrorMessage
        name={val.name}
        component="div"
        className="invalid-feedback"
      />
      {touched[val.name] && !errors[val.name] && (
        <div className="valid-feedback">Looks good!</div>
      )}
    </div>
  );
};
SelectField.propTypes = {
  getFieldProps: propTypes.func,
  touched: propTypes.object,
  errors: propTypes.object,
  val: propTypes.object,
};

export default SelectField;
