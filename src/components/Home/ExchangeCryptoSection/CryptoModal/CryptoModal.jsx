import React, { useState } from "react";
import {
  MDBBtn,
  MDBModalTitle,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBInputGroup,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useCrypto, useCryptoDispatch } from "../context/CryptoContext";

export default function CryptoModal() {
  const [searchQuery, setSearchQuery] = useState("");

  const cryptoList = [
    {
      name: "Bitcoin",
      shortName: "BTC",
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    },
    {
      name: "Ethereum",
      shortName: "ETH",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    },
    {
      name: "BNB Smart Chain",
      shortName: "BNBBSC",
      icon: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    },
    {
      name: "Solana",
      shortName: "SOL",
      icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
    },
    {
      name: "Uniswap",
      shortName: "UNI",
      icon: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
    },
    {
      name: "Cardano",
      shortName: "ADA",
      icon: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    },
  ];

  const filteredCryptos = cryptoList.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCryptoSelection = (crypto) => {
    dispatch({
      type: "change",
      payload: { ...crypto, transactionType: crypto.transactionType },
    });
  };

  const crypto = useCrypto();
  const dispatch = useCryptoDispatch();
  console.log("transactionType: " + crypto.transactionType);
  return (
    <MDBModal tabIndex="-1" open={crypto.isModalOpen} className="modal-lg">
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>
              Select Crypto to{" "}
              {crypto.transactionType === "sendCrypto" ? "Send" : "Receive"}
            </MDBModalTitle>
            <MDBBtn
              className="btn-close btn-primary"
              onClick={() => {
                dispatch({ type: "toggle" });
              }}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <div
              style={{
                backgroundColor: "#1e1e2f", // Dark background color
                padding: "8px",
                borderRadius: "8px",
              }}
              className="mb-3"
            >
              <MDBInputGroup noWrap>
                <span
                  className="input-group-text bg-transparent border-0"
                  style={{ color: "#8a8a8e" }}
                >
                  <MDBIcon fas icon="search" />
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent text-light border-0"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    boxShadow: "none",
                    padding: "10px",
                  }}
                />
              </MDBInputGroup>
            </div>
            <div className="list-group">
              <div className="p-0 bg-transparent border-0 list-group-item">
                {filteredCryptos.map((crypto, index) => (
                  <div
                    key={index}
                    role="button"
                    tabIndex="0"
                    onClick={() => handleCryptoSelection(crypto)}
                    className="c-exchange__select-token px-4 py-4 border-1 border-top d-flex flex-row align-items-center justify-content-start w-100 rounded-0 btn btn-none"
                  >
                    <div className="c-exchange__icon">
                      <img
                        alt=""
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        src={crypto.icon}
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                      <p className="mb-2 h4">{crypto.name}</p>
                      <p className="mb-0 badge bg-dark fs-6 opacity-50">
                        {crypto.shortName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
