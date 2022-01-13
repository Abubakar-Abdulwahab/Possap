import React from "react";

export const statusBadge = ({ status }) => {
  return (
    <>
      <div>
        {status ? (
          <span class="badge bg-primary">Primary</span>
        ) : (
          <span class="badge bg-danger">Danger</span>
        )}
      </div>
    </>
  );
};
