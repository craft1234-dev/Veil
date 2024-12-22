import React from "react";

export default function RevenueSharingView() {
  return (
    <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div className="align-items-center justify-content-center m-auto text-center row">
        <div className="col-xl-7 col-lg-8 col-md-12 col-12">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="h2 text-primary text-center">Revenue Sharing</p>
            <h2 className="h1 text-gradient text-center position-relative z-3 d-inline mb-4">
              How does it work?
            </h2>
            <p className="mb-2">
              Our revenue sharing program comes from the distributed profits
              from our Veil Token taxes and our exchange processing. We allocate
              20% of all revenue back to our revenue sharing program. This
              program will airdrop holders* of the Veil Token every 72 hours,
              with the funds that are generated into the RevShare wallet.
            </p>
            <p className="mb-3 mb-lg-4 fst-italic text-white-50 small">
              *Eligibility: Veil Token Holders holding at-least 1,000,000 Veil
              Tokens.
            </p>
            <a
              role="button"
              tabIndex="0"
              href="https://etherscan.io/address/0xB9c1a0E52DaeeAf235f3FDFAE0119EAEcaADbd9D"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-center fw-bold px-3 px-md-4 py-3 rounded-3 mb-0 btn btn-primary"
            >
              View RevShare Wallet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
