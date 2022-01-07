import { ErrorMessage } from 'formik'
import React from 'react'

const TextField = ({getFieldProps, touched, errors, val }) => {
    console.log(val)
    return (
        <>
        <label for="validationCustom01" class="form-label text-left">
          {val}
        </label>
        <input
          {...getFieldProps(val)}
          className={ "form-control " +
            (touched[val] && errors[val]
              ? "is-invalid"
              : touched[val] && !errors[val] ? "is-valid" : "")
          }
          id="validationCustom01"
        />
         <ErrorMessage name={val} component="div" className="invalid-feedback" />
        {touched[val] && !errors[val] && 
        <div class="valid-feedback">Looks good!</div>
        
        }
      </>
    )
}

export default TextField
