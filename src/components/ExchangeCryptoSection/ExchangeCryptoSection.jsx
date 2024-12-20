import React from "react";
import CryptoSelection from "./CryptoSelection/CryptoSelection";
import "./ExchangeCryptoSection.css";
import WalletAddressForm from "./WalletAddressForm/WalletAddressForm";

export default function ExchangeCryptoSection() {
  return (
    <section
      className="c-exchange__section my-4 my-lg-5 py-4 py-lg-5"
      id="exchange"
    >
      <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
        <h3 className="h1 text-gradient text-center position-relative z-3 d-inline">
          Exchange Crypto
        </h3>
      </div>
      <form
        id="exchangeForm"
        className="position-relative m-auto container-md mb-4 mb-lg-5"
      >
        <CryptoSelection />
        <WalletAddressForm />
        <div
          className="d-flex flex-row align-items-center justify-content-start my-3 my-lg-4"
          style={{ transform: "none" }}
        >
          <div className="mb-0">
            <div className="">
              <input required="" type="checkbox" className="form-check-input" />
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <p className="opacity-75 mb-0 ms-2">
            By using the site and creating an exchange, you agree to our
            <a className="text-primary" href="/tos">
              Terms of Services
            </a>
          </p>
        </div>
        <div tabindex="0" style={{ transform: "none" }}>
          <button
            type="submit"
            value="Submit"
            className="btn btn-primary w-100 py-3 fs-5 fw-bold btn btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="me-2"
              style={{ transform: "rotate(175.65deg)" }}
            >
              <g
                stroke-linecap="square"
                stroke-linejoin="miter"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
              >
                <polyline points="7.929 18.659 2.237 17.073 2.966 22.87"></polyline>
                <path
                  d="M23,12A11,11,0,0,1,2.237,17.073"
                  stroke-linecap="butt"
                ></path>
                <polyline points="16.071 5.341 21.763 6.927 21.034 1.13"></polyline>
                <path
                  d="M1,12A11,11,0,0,1,21.763,6.927"
                  stroke-linecap="butt"
                ></path>
              </g>
            </svg>
            Exchange
          </button>
        </div>
        <p className="opacity-75 text-center mt-3 mt-lg-4">
          Already have an order number?
          <a
            className="ms-2 text-muted text-decoration-underline"
            href="/#track"
          >
            Track your order
          </a>
        </p>
      </form>
    </section>
  );
}
