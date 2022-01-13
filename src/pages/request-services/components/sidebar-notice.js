import React from "react";

export const SidebarNotice = () => {
  return (
    <div className="shadow-none  p-5 mb-5 rounded notice__bg">
      <h2 className="form__title text-center">Please Note:</h2>
      <ul>
        <li className="mb-3">
          The Nigeria Police Force reserves the right to approve or deny your
          request based on its guidelines or availability of resources.
        </li>
        <li className="mb-3">
          If approved, you will be required to pay a fee for this service
          (non-refundable application and processing).
        </li>
        <li className="mb-3">
          Approved request requires at least 24 hours for processing and
          issuance.
        </li>
        <li>
          Enquiries can be made through the following info@possap.gov.ng or
          call: 09132879000.
        </li>
      </ul>
    </div>
  );
};
