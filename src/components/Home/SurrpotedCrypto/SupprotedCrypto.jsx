import React from "react";
import "./SupportedCrypto.css";

export default function SupprotedCrypto() {
  return (
    <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
        <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
          Supported Crypto
        </h4>
      </div>
      <div
        className="c-supportedLogos d-flex align-items-center overflow-hidden position-relative"
        style={{ NumberOfLogos: 162 }}
      >
        <div className="c-supportedLogos__logos d-flex">
          <img
            alt="Bitcoin"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/assets/tokens/btc.svg"
          />
          <img
            alt="Ethereum"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/assets/tokens/eth.svg"
          />
          <img
            alt="BNB Smart Chain"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/assets/tokens/bnb.svg"
          />
          <img
            alt="Solana"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/assets/tokens/sol.svg"
          />
          <img
            alt="Uniswap"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/assets/tokens/uni.svg"
          />
          <img
            alt="Cardano"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/assets/tokens/ada.svg"
          />
          <img
            alt="BinanceUSD(ERC20)"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/assets/tokens/busd.svg"
          />
          <img
            alt="Dai"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/assets/tokens/dai.svg"
          />
          <img
            alt="Dogecoin"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/assets/tokens/doge.svg"
          />
        </div>
      </div>
    </section>
  );
}
