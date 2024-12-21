import React, { useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
} from "mdb-react-ui-kit";
// import "./CryptoSelection.css";

const cryptoList = [
  { name: "Bitcoin", shortName: "BTC", icon: "/assets/tokens/btc.svg" },
  { name: "Ethereum", shortName: "ETH", icon: "/assets/tokens/eth.svg" },
  {
    name: "BNB Smart Chain",
    shortName: "BNBBSC",
    icon: "/assets/tokens/bnb.svg",
  },
  { name: "Solana", shortName: "SOL", icon: "/assets/tokens/sol.svg" },
  { name: "Uniswap", shortName: "UNI", icon: "/assets/tokens/uni.svg" },
];

export default function CryptoSelection() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log("Modal is now:", !isOpen);
  };

  const filteredCryptos = cryptoList.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="row position-relative z-2 gy-4 mb-3 mb-md-4">
      <button
        className="c-exchange__swap position-absolute top-50 start-50 translate-middle bg-light rounded-circle z-3 d-flex align-items-center justify-content-center mt-3 mt-md-5"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <g fill="currentColor">
            <path d="M10.787,8.09A.5.5,0,0,0,10,8.5V11H3a1,1,0,0,0,0,2h7v2.5a.5.5,0,0,0,.787.41l5-3.5a.5.5,0,0,0,0-.82Z"></path>
            <path d="M5.5,8A.5.5,0,0,0,6,7.5V5h7a1,1,0,0,0,0-2H6V.5A.5.5,0,0,0,5.213.09l-5,3.5a.5.5,0,0,0,0,.82l5,3.5A.5.5,0,0,0,5.5,8Z"></path>
          </g>
        </svg>
      </button>

      <div className="col-12 col-md-6">
        <div className="card">
          <div className="d-flex flex-row align-items-center justify-content-between p-3 card-header">
            <p className="h5 mb-0">You Send</p>
          </div>
          <div className="p-3 p-lg-4 card-body">
            {/* <button
              type="button"
              className="text-white bg-light border-1 border w-100 rounded-3 px-3 py-2 d-flex flex-row justify-content-between align-items-center mb-2 btn btn-light"
            > */}
            <MDBBtn
              className="text-white bg-light border-1 border w-100 rounded-3 px-3 py-2 d-flex flex-row justify-content-between align-items-center mb-2 btn btn-light"
              onClick={() => {
                toggleModal();
                console.log("Button clicked, isOpen:", isOpen);
              }}
            >
              <div className="d-flex flex-row justify-content-start align-items-center">
                <div className="c-exchange__icon">
                  <img
                    alt=""
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="/assets/tokens/btc.svg"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                  <p className="mb-1 h5">Bitcoin</p>
                  <p className="mb-1 opacity-50">BTC</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g fill="currentColor">
                  <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z"></path>
                </g>
              </svg>
            </MDBBtn>
            <div
              className="c-exchange__input bg-light rounded-3 p-3 w-100"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Send Amount"
            >
              <div className="mb-0 flex-grow-1 w-100">
                <input
                  name="send"
                  placeholder="0.0000"
                  required=""
                  type="text"
                  id="exchangeForm.SendAmount"
                  className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                  value=""
                />
                <div className="invalid-feedback"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card">
          <div className="d-flex flex-row align-items-center justify-content-between p-3 card-header">
            <p className="h5 mb-0">You Receive</p>
          </div>
          <div className="p-3 p-lg-4 card-body">
            <button
              type="button"
              className="text-white bg-light border-1 border w-100 rounded-3 px-3 py-2 d-flex flex-row justify-content-between align-items-center mb-2 btn btn-light"
            >
              <div className="d-flex flex-row justify-content-start align-items-center">
                <div className="c-exchange__icon">
                  <img
                    alt=""
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="/assets/tokens/eth.svg"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                  <p className="mb-1 h5">Ethereum</p>
                  <p className="mb-1 opacity-50">ETH</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g fill="currentColor">
                  <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z"></path>
                </g>
              </svg>
            </button>
            <div
              className="c-exchange__input border-1 border bg-light rounded-3 p-3 d-flex flex-row justify-content-start align-items-center"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Approx. Receive Amount"
            >
              <div className="mb-0 flex-grow-1">
                <input
                  name="receive"
                  placeholder="0.0000"
                  required=""
                  type="text"
                  readonly=""
                  id="exchangeForm.ReceiveAmount"
                  className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MDBModal show={isOpen} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <h5 className="modal-title">Select Crypto to Receive</h5>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {/* Search Bar */}
              <MDBInput
                label="Search..."
                id="searchCrypto"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon="search"
                contrast
              />

              <MDBListGroup className="mt-3">
                {filteredCryptos.map((crypto, index) => (
                  <MDBListGroupItem
                    key={index}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={crypto.icon}
                        alt={crypto.name}
                        width="40"
                        height="40"
                        className="me-3"
                      />
                      <div>
                        <h6 className="mb-0">{crypto.name}</h6>
                        <small>{crypto.shortName}</small>
                      </div>
                    </div>
                  </MDBListGroupItem>
                ))}
              </MDBListGroup>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleModal}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}