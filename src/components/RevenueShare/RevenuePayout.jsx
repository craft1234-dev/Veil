import React from "react";
import LineChartComponent from "./LineChartCompoennt";

export default function RevenuePayout() {
  return (
    <section
      id="payouts"
      className="my-4 my-lg-5 py-4 py-lg-5 position-relative container"
    >
      <div className="d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-5">
        <h3 className="h1 text-gradient text-start position-relative z-3 d-inline mb-4">
          Monthly Revenue &amp; Payouts
        </h3>
        <p className="mb-3 mb-lg-4 text-primary">
          Overview for the past 12 Months
        </p>
      </div>
      <div className="align-items-start justify-content-between gx-0 gx-lg-5 row">
        <div className="col-lg-8 col-12">
          <LineChartComponent />
        </div>
        <div className="col-lg-4 col-12">
          <table className="rounded-2 table table-dark table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th className="text-end">Payout</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cursor-pointer">
                <td>11/10/2023</td>
                <td className="text-end d-flex flex-row align-items-center justify-content-end">
                  <p className="mb-0">2.8 ETH</p>
                  <span className="small text-white-50 ms-2">$</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-center mt-3">
            <button type="button" className="btn btn-secondary" disabled="">
              Prev
            </button>
            <span className="mx-2 my-2">Page 1 of 1</span>
            <button type="button" className="btn btn-secondary">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
