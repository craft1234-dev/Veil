import React from "react";
import "./RevenueShare.css";

export default function RevenueShareHeader() {
  return (
    <header className="c-token-section mb-0 border-bottom border-1">
      <div className="position-relative container">
        <div className="align-items-center justify-content-between gy-4 row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="d-flex flex-column justify-content-start align-items-start">
              <p className="h2 text-primary">Introducing our</p>
              <h1 className="h1 text-gradient text-start position-relative z-3 d-inline mb-4">
                Revenue Share Program
              </h1>
              <p className="mb-3 mb-lg-4">
                Join our revenue-sharing program and earn a share of our
                exchange and token fee profits based on your $Veil Token
                ownership.
              </p>
              <div className="d-flex flex-flex justify-content-start align-items-start gap-2">
                <a
                  role="button"
                  tabIndex="0"
                  href="/token"
                  className="text-center d-flex flex-row align-items-center justify-content-center mt-0 text-nowrap fw-bold px-3 px-md-4 py-3 rounded-3 btn btn-primary"
                >
                  About Token
                </a>
                <a
                  role="button"
                  tabIndex="0"
                  href="https://etherscan.io/address/0x4406D9D8Eb6acF6A90c13C0977C21D290dC6c8F2"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-center fw-bold px-3 px-md-4 py-3 rounded-3 mb-0 btn btn-primary"
                >
                  View RevShare Wallet
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="w-100 card">
              <div className="px-5 card-header">
                <p className="h4 mb-0 text-center">Total Paid Out So Far</p>
              </div>
              <div className="p-3 p-lg-4 px-lg-5 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                <p className="h1 text-primary mb-0 text-center">79.71 ETH</p>
                <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                  250.2K USD
                </p>
              </div>
              <div className="card-footer">
                <p className="small text-uppercase text-white-50 mb-0 text-center">
                  Last Payout:
                  <a href="/revenue-share#payouts">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="ms-2"
                    >
                      <g
                        strokeWidth="1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="0.5" y1="8" x2="15.5" y2="8"></line>
                        <polyline points="10.5 3 15.5 8 10.5 13"></polyline>
                      </g>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
