import React from "react";
import ChartComponent from "../DonutChart/ChartComponent";

export default function RevenuAllocation() {
  return (
    <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div className="align-items-center justify-content-between row">
        <div className="col-lg-5 col-md-12 col-12">
          <div className="d-flex flex-column justify-content-start align-items-start mb-4 mb-lg-5">
            <p className="h2 text-primary">Breakdown</p>
            <h2 className="h1 text-gradient text-start position-relative z-3 d-inline mb-4">
              Our Revenue Allocation
            </h2>
            <p className="mb-3 mb-lg-4">
              Our Veil revenue is generated from the exchange processes &amp;
              fees from the $Veil token. This is distributed to certain
              allocations for the upkeep of the platform, and distributed
              sharing. Here is the list of our allocations for each category.
            </p>
            <div className="w-100 mt-3 mt-lg-4 card">
              <div className="p-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom card-body">
                <p className="mb-0 fs-5">Marketing:</p>
                <p className="mb-0 fs-5 fw-bold text-danger">30%</p>
              </div>
            </div>
            <div className="w-100 mt-2 mt-lg-2 card">
              <div className="p-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom card-body">
                <p className="mb-0 fs-5">Revenue Share:</p>
                <p className="mb-0 fs-5 fw-bold text-success">20%</p>
              </div>
            </div>
            <div className="w-100 mt-2 mt-lg-2 card">
              <div className="p-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom card-body">
                <p className="mb-0 fs-5">Team:</p>
                <p className="mb-0 fs-5 fw-bold text-primary">20%</p>
              </div>
            </div>
            <div className="w-100 mt-2 mt-lg-2 card">
              <div className="p-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom card-body">
                <p className="mb-0 fs-5">Development:</p>
                <p className="mb-0 fs-5 fw-bold text-info">15%</p>
              </div>
            </div>
            <div className="w-100 mt-2 mt-lg-2 card">
              <div className="p-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom card-body">
                <p className="mb-0 fs-5">Treasury:</p>
                <p className="mb-0 fs-5 fw-bold text-warning">15%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7 col-md-12 col-12">
          <ChartComponent />
        </div>
      </div>
    </section>
  );
}
