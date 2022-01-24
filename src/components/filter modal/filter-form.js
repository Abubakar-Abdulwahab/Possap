import React, { useEffect, useState, useCallback } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

const FilterForm = ({ template, handleform }) => {
  let { register, errors, control, setValue } = handleform;
  const onEditorStateChange = (editorState, name) => {
    // console.log(editorState);
    // console.log(name);
    setValue(name, editorState);
  };
  const displayFields = (fields) => {
    console.log(fields);
    return (
      fields &&
      fields?.map((field) => {
        let { type, title, name, required } = field;
        // console.log(type, title, name, required);
        switch (type) {
          case "date":
            return (
              <div className="col-sm-6 mx-3">
                <div className="form-group">
                  <label htmlFor={name} className="col-form-label">
                    {title}{" "}
                    <span style={required ? { color: "red" } : {}}>*</span>
                  </label>
                  <input
                    {...register(name)}
                    className="form-control"
                    type="date"
                  />
                </div>
                {errors[name] && <small>{errors[name].message}</small>}
              </div>
            );

          case "select":
            let { options, full } = field;
            return (
              <div class={full ? "col-sm-12 mx-3" : "col-sm-6 mx-3"} key={name}>
                <div className="form-group">
                  <label htmlFor={name}>
                    {title}
                    <span style={required ? { color: "red" } : {}}>*</span>
                  </label>
                  <Controller
                    name={name}
                    control={control}
                    render={({ value, onChange }) => (
                      <>
                        {console.log(value)}
                        <Select
                          onChange={(state) =>
                            onEditorStateChange(state.value, name)
                          }
                          options={options}
                        />
                      </>
                    )}
                  />
                </div>
              </div>
            );

          default:
            return (
              <div>
                <span>Invalid Field</span>
              </div>
            );
        }
      })
    );
  };

  let { title, Fields } = template;
  console.log("field", Fields);
  console.log("templateeeee", template);

  return <>{displayFields(Fields)}</>;
};

export default FilterForm;
