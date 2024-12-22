import React from "react";
import "./VeilToken.css";
export default function VeilToken() {
  return (
    <header>
      <section className="c-token-section mb-0">
        <div className="container">
          <div className="justify-content-center justify-content-md-between align-items-center row">
            <div className="mb-5 mb-xl-0 me-0 me-md-5 col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-2">
                <h1 className="c-hero__title h1 text-center text-md-start position-relative z-3 d-inline">
                  <span className="text-gradient d-block">Introducing</span>
                  <span className="text-primary">$Veil Token</span>
                </h1>
              </div>
              <h2 className="fs-5 text-white text-center text-md-start fw-normal lh-lg mb-0 mb-4 mb-lg-4">
                Introducing our utility token to support the Veil exchange
                platform.
              </h2>
              <h3 className="fs-5 text-white text-center text-md-start fw-normal lh-lg mb-0 mb-4 mb-lg-4">
                Contract: 0xb244b3574a5627849fca2057e3854340def63071
              </h3>
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-start">
                <a
                  role="button"
                  tabIndex="0"
                  href="https://app.uniswap.org/swap?outputCurrency=0xB244b3574a5627849fca2057E3854340Def63071"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-center fw-bold px-3 px-md-4 py-3 rounded-3 me-0 me-md-4 mb-3 mb-md-0 btn btn-primary"
                >
                  Buy Token
                </a>
                <a
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-center text-decoration-underline link-offset-3"
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0xac9ae0eb05daee73bd964eaa0153b762d6455667"
                >
                  View Chart
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-12">
              <div className="d-flex justify-content-center align-items-center mb-2">
                <h1 className="h1 text-gradient text-center position-relative z-3 d-inline">
                  $Veil Tokenomics
                </h1>
              </div>
              <div className="d-flex flex-column justify-content-stretch border-0 rounded-0 list-group">
                <div className="p-3 bg-dark d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom list-group-item">
                  <p className="mb-0 fs-5 text-nowrap me-sm-5">
                    Token Taxes:&nbsp;
                    <span className="small opacity-50">(Buy/Sell)</span>
                  </p>
                  <p className="mb-0 fs-5 fw-bold text-primary">5% / 5%</p>
                </div>
                <div className="p-3 bg-dark d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom list-group-item">
                  <p className="mb-0 fs-5 text-nowrap me-sm-5">Total Supply:</p>
                  <p className="mb-0 fs-5 fw-bold text-primary c-tokenomics__total-supply">
                    1,000,000,000
                  </p>
                </div>
                <div className="p-3 bg-dark d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 list-group-item">
                  <p className="mb-0 fs-5 text-nowrap me-sm-5">
                    CEX Allocation:
                  </p>
                  <p className="mb-0 fs-5 fw-bold text-primary">80,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
