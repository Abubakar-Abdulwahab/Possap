import React from "react";

const StatusButton = ({ row, value, setStatus, setstatusRow }) => {
  const handleStatus = (status) => {
    setStatus(status);
    setstatusRow(row);
  };

  return (
    <>
      <div className="dropdown action-label text-center">
        {value === "Approved" || value === "Deployed" ? (
          <span class="badge bg-success">{value}</span>
        ) : value === "Declined" || value === "Cancelled" ? (
          <span class="badge bg-danger">{value}</span>
        ) : (
          <span class="badge bg-warning">{value}</span>
        )}

        <div className="dropdown-menu dropdown-menu-right">
          <a onClick={() => handleStatus("Pending")} className="dropdown-item">
            <span class="badge bg-warning">{value}</span> Pending
          </a>
          <a onClick={() => handleStatus("Approved")} className="dropdown-item">
            <span class="badge bg-success">{value}</span> Approved
          </a>
          <a onClick={() => handleStatus("Declined")} className="dropdown-item">
            <span class="badge bg-danger">{value}</span> Declined
          </a>
        </div>
      </div>
    </>
  );
};

export default StatusButton;
