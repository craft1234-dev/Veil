import React from "react";

export default function RevenueIncome() {
  return (
    <div className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div className="d-flex flex-column align-items-start align-items-sm-center justify-content-start justify-content-sm-center mb-4">
        <h3 className="h1 text-gradient text-primary text-start text-md-center position-relative z-3 d-inline mb-4">
          Our Revenue Income
        </h3>
        <p className="text-primary text-start text-md-center">
          Overview for Revenue generated from Veil Exchange &amp; Token Fees
        </p>
      </div>
      <div className="align-items-center justify-content-center mb-3 mb-lg-4 gy-3 gy-lg-0 row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="w-100 card">
            <div className="px-4 card-header">
              <p className="h5 mb-0 text-center">Revenue from Exchange</p>
            </div>
            <div className="p-3 p-lg-4 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
              <p className="h1 text-primary mb-0 text-center">3.38 ETH</p>
              <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                $ USD
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="w-100 card">
            <div className="px-4 card-header">
              <p className="h5 mb-0 text-center">Revenue from Token Fees</p>
            </div>
            <div className="p-3 p-lg-4 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
              <p className="h1 text-primary mb-0 text-center">ETH</p>
              <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                $ USD
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="align-items-center justify-content-center row">
        <div className="col-lg-8 col-md-12 col-12">
          <div className="w-100 card">
            <div className="px-4 card-header">
              <p className="h5 mb-0 text-center">Total Revenue</p>
            </div>
            <div className="p-3 p-lg-4 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
              <p className="h1 text-primary mb-0 text-center">3.38 ETH</p>
              <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                $ USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
