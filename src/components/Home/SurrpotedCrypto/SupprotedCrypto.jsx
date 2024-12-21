import React from "react";
import "./SupportedCrypto.css";

const cryptoLogos = [
  { alt: "Bitcoin", src: "/assets/tokens/btc.svg" },
  { alt: "Ethereum", src: "/assets/tokens/eth.svg" },
  { alt: "BNB Smart Chain", src: "/assets/tokens/bnb.svg" },
  { alt: "Solana", src: "/assets/tokens/sol.svg" },
  { alt: "Uniswap", src: "/assets/tokens/uni.svg" },
  { alt: "Cardano", src: "/assets/tokens/ada.svg" },
  { alt: "BinanceUSD(ERC20)", src: "/assets/tokens/busd.svg" },
  { alt: "Dai", src: "/assets/tokens/dai.svg" },
  { alt: "Dogecoin", src: "/assets/tokens/doge.svg" },
  { alt: "Bitcoin", src: "/assets/tokens/btc.svg" },
  { alt: "Ethereum", src: "/assets/tokens/eth.svg" },
  { alt: "BNB Smart Chain", src: "/assets/tokens/bnb.svg" },
  { alt: "Solana", src: "/assets/tokens/sol.svg" },
  { alt: "Uniswap", src: "/assets/tokens/uni.svg" },
  { alt: "Cardano", src: "/assets/tokens/ada.svg" },
  { alt: "BinanceUSD(ERC20)", src: "/assets/tokens/busd.svg" },
  { alt: "Dai", src: "/assets/tokens/dai.svg" },
  { alt: "Dogecoin", src: "/assets/tokens/doge.svg" },
  { alt: "Bitcoin", src: "/assets/tokens/btc.svg" },
  { alt: "Ethereum", src: "/assets/tokens/eth.svg" },
  { alt: "BNB Smart Chain", src: "/assets/tokens/bnb.svg" },
  { alt: "Solana", src: "/assets/tokens/sol.svg" },
  { alt: "Uniswap", src: "/assets/tokens/uni.svg" },
  { alt: "Cardano", src: "/assets/tokens/ada.svg" },
  { alt: "BinanceUSD(ERC20)", src: "/assets/tokens/busd.svg" },
  { alt: "Dai", src: "/assets/tokens/dai.svg" },
  { alt: "Dogecoin", src: "/assets/tokens/doge.svg" },
];

export default function SupportedCrypto() {
  return (
    <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
        <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
          Supported Crypto
        </h4>
      </div>
      <div className="c-supportedLogos-wrapper">
        <div className="c-supportedLogos d-flex">
          {cryptoLogos.map((logo, index) => (
            <img
              key={`logo-${index}`}
              alt={logo.alt}
              loading="lazy"
              width="80"
              height="80"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
