import { ErrorMessage } from "formik";
import propTypes from "prop-types";
import React, {useState, useEffect} from "react";
import NaijaStates from 'naija-state-local-government';
const StateLGA = ({ getFieldProps,setFieldValue, touched, errors, val, values }) => {

  return (
    <div className={val.col}>
      <label htmlFor={val.name} class="form-label text-left">
        {val.label}
      </label>
        
        <select
             {...getFieldProps(val.name)}
             onChange={(option) => {
                 setFieldValue(val.name, option.target.value);
               }}
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
             {(val.options && val.name === 'state') &&
               val.options.map((i) => <option value={i}>{i}</option>)}
             {( val.name === 'lga') &&
               NaijaStates.lgas(values.state).lgas.map((i) => <option value={i}>{i}</option>)}
 
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
StateLGA.propTypes = {
  getFieldProps: propTypes.func,
  touched: propTypes.object,
  errors: propTypes.object,
  val: propTypes.object,
};

export default StateLGA;
