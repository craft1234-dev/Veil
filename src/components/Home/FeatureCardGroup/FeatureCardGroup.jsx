import React from "react";

import "./FeatureCardGroup.css";
export default function FeatureCardGroup() {
  return (
    <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div
        className="d-flex justify-content-center align-items-center mb-4 mb-lg-5"
        style={{
          opacity:
            "0.880322, transform: translateY(15.6606px) scale(0.760644) translateZ(0px)",
        }}
      >
        <h2 className="h1 text-gradient text-center position-relative z-3 d-inline">
          We are all about privacy and security
        </h2>
      </div>
      <div className="row-cols-1 row-cols-md-1 row-cols-lg-3 gy-3 gy-lg-0 gx-0 gx-lg-4 position-relative z-3 row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <div
                style={{ transform: "translateY(-15.9587px) translateZ(0px)" }}
              >
                <img
                  alt="Privacy Driven"
                  loading="lazy"
                  width="184"
                  height="276"
                  decoding="async"
                  data-nimg="1"
                  className="c-features__image m-auto d-block my-3 my-lg-4"
                  style={{ color: "transparent" }}
                  srcset=""
                  src="/assets/features/privacy-driven.webp"
                />
              </div>
            </div>
            <div className="p-3 p-lg-4 card-body">
              <h3>Privacy-Driven</h3>
              <p className="text-muted mb-0">
                Anonymized exchange with no sign-ups or limits.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <div
                style={{ transform: "translateY(-15.9467px) translateZ(0px)" }}
              >
                <img
                  alt="Seamless Process"
                  loading="lazy"
                  width="260"
                  height="287"
                  decoding="async"
                  data-nimg="1"
                  className="c-features__image m-auto d-block my-3 my-lg-4"
                  style={{ color: "transparent" }}
                  srcset=""
                  src="/assets/features/seamless-process.webp"
                />
              </div>
            </div>
            <div className="p-3 p-lg-4 card-body">
              <h3>Seamless Exchange</h3>
              <p className="text-muted mb-0">
                Fast and effective exchange between wallets and
                cryptocurrencies.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <div
                style={{ transform: "translateY(-15.9467px) translateZ(0px)" }}
              >
                <img
                  alt="No Limits Wallet"
                  loading="lazy"
                  width="272"
                  height="222"
                  decoding="async"
                  data-nimg="1"
                  className="c-features__image m-auto d-block my-3 my-lg-4"
                  style={{ color: "transparent" }}
                  srcset=""
                  src="/assets/features/no-limits-wallet.webp"
                />
              </div>
            </div>
            <div className="p-3 p-lg-4 card-body">
              <h3>Zero Wallet Limits</h3>
              <p className="text-muted mb-0">
                No wallet or amount limitations on all exchanges through us!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="c-glow position-absolute top-50 start-50 translate-middle z-1"></div>
    </section>
  );
}
