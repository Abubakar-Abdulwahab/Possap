import React from "react";
import { useForm } from "react-hook-form";
import FilterForm from "./filter-form";
import $ from "jquery";

const FilterModal = ({ template, setformValue, setsubmitted }) => {
  console.log("template", template);
  const { control, register, handleSubmit, setValue, formState, reset } =
    useForm();
  let handleform = {
    register: register,
    errors: formState,
    control: control,
    setValue: setValue,
  };

  const onSubmit = (data) => {
    let newObj = {};
    template.Fields.forEach((temp) => {
      for (const dt in data) {
        if (temp.name === dt) {
          newObj[temp.name] = data[dt];
        }
      }
    });
    setformValue(newObj);
    setsubmitted(true);
    reset();
    $("#FilterModal").modal("toggle");
  };

  console.log("form", setformValue);

  return (
    <>
      <div
        class="modal fade"
        id="FilterModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Filters
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                  <FilterForm template={template} handleform={handleform} />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
