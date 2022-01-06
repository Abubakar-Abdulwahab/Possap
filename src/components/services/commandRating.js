import React from "react";

const CommandRating = () => {
  return (
    <div class="col-xl-4 col-md-6">
      <div class="card user-list">
        <div class="card-header">
          <h5>Top 5 Commands</h5>
        </div>
        <div class="card-block">
          <div class="row align-items-center justify-content-center mb-20">
            <div class="col-6">
              <h2 class="f-w-300 d-flex align-items-center float-left m-0">
                4.7 <i class="fas fa-star f-10 m-l-10 text-c-yellow"></i>
              </h2>
            </div>
            <div class="col-6">
              <h6 class="d-flex  align-items-center float-right m-0">
                0.4 <i class="fas fa-caret-up text-c-green f-22 m-l-10"></i>
              </h6>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <h6 class="align-items-center float-left">
                <i class="fas fa-star f-10 m-r-10 text-c-yellow"></i> Kubwa Area
                Command
              </h6>
              <h6 class="align-items-center float-right">384</h6>
              <div class="progress mt-5 mb-1" style={{ height: "6px" }}>
                <div
                  class="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="col-xl-12">
              <h6 class="align-items-center float-left">
                <i class="fas fa-star f-10 m-r-10 text-c-yellow"></i> Gwarimpa
                Area Command
              </h6>
              <h6 class="align-items-center float-right">145</h6>
              <div class="progress mt-5  mb-1" style={{ height: "6px" }}>
                <div
                  class="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "35%" }}
                  aria-valuenow="35"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="col-xl-12">
              <h6 class="align-items-center float-left">
                <i class="fas fa-star f-10 m-r-10 text-c-yellow"></i> Apo Area
                Command
              </h6>
              <h6 class="align-items-center float-right">24</h6>
              <div class="progress mt-5  mb-1" style={{ height: "6px" }}>
                <div
                  class="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="col-xl-12">
              <h6 class="align-items-center float-left">
                <i class="fas fa-star f-10 m-r-10 text-c-yellow"></i> Mabushi
                Area Command
              </h6>
              <h6 class="align-items-center float-right">1</h6>
              <div class="progress mt-5  mb-1" style={{ height: "6px" }}>
                <div
                  class="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "10%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="col-xl-12">
              <h6 class="align-items-center float-left">
                <i class="fas fa-star f-10 m-r-10 text-c-yellow"></i>Maitama
                Area Command
              </h6>
              <h6 class="align-items-center float-right">0</h6>
              <div class="progress mt-5  mb-1" style={{ height: "6px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "0" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandRating;
