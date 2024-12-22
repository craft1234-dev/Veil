import React from "react";

export default function WalletAddressForm() {
  return (
    <div>
      <div className="card">
        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between p-3 card-header">
          <p className="h5 mb-2 mb-sm-0">Receiving Wallet Address</p>
        </div>
        <div className="p-3 p-lg-4 card-body">
          <div className="c-exchange__input bg-light rounded-3 p-3">
            <div className="gy-3 gy-sm-0 row">
              <div className="col-sm-12">
                <div className="mb-0 flex-grow-1">
                  <input
                    placeholder="Enter Wallet Address"
                    required=""
                    type="text"
                    id="exchangeForm.WalletAddress"
                    className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                    value=""
                    onChange={() => {}}
                  />
                  <div className="invalid-feedback"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
