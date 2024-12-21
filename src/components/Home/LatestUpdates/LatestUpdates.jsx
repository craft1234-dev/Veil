import React from "react";

export default function LatestUpdates() {
  return (
    <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
        <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
          Latest Updates
        </h4>
      </div>
      <div className="gy-4 gy-md-0 row row-cols-md-3 row-cols-1">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <div className="move-up-down">
                <img
                  alt="Pepe"
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="c-features__image m-auto d-block my-3 my-lg-4"
                  style={{ color: "transparent" }}
                  srcset=""
                  src="/assets/tokens/beer.webp"
                />
              </div>
            </div>
            <div className="p-3 p-lg-4 card-body">
              <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
                <span className="text-uppercase badge bg-primary">
                  New Release
                </span>
                <p className="h3 mb-0 text-center">New Token Supported:</p>
                <p className="text-primary text-center h3">BEERCOIN(SOL)</p>
              </div>
            </div>
            <div className="card-footer">
              <p className="text-white-50 text-center mb-0">
                Released: 04/12/24
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <div className="move-up-down">
                <img
                  alt="Pepe"
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="c-features__image m-auto d-block my-3 my-lg-4"
                  style={{ color: "transparent" }}
                  srcset=""
                  src="/assets/tokens/daddy.webp"
                />
              </div>
            </div>
            <div className="p-3 p-lg-4 card-body">
              <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
                <span className="text-uppercase badge bg-primary">
                  New Release
                </span>
                <p className="h3 mb-0 text-center">New Token Supported:</p>
                <p className="text-primary text-center h3">Daddy Tate(SOL)</p>
              </div>
            </div>
            <div className="card-footer">
              <p className="text-white-50 text-center mb-0">
                Released: 04/12/24
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <div className="move-up-down">
                <img
                  alt="Pepe"
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="c-features__image m-auto d-block my-3 my-lg-4"
                  style={{ color: "transparent" }}
                  srcset=""
                  src="/assets/tokens/cati.webp"
                />
              </div>
            </div>
            <div className="p-3 p-lg-4 card-body">
              <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
                <span className="text-uppercase badge bg-primary">
                  New Release
                </span>
                <p className="h3 mb-0 text-center">New Token Supported:</p>
                <p className="text-primary text-center h3">Catizen(TON)</p>
              </div>
            </div>
            <div className="card-footer">
              <p className="text-white-50 text-center mb-0">
                Released: 04/12/24
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
