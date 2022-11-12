import React from "react";

function Financials() {
  return (
    <div className="container">
      <div className="row py-3 border-bottom">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`10DayAverageTradingVolume`}</div>{" "}
            <div className="col-12 col-md-6 fw-bold">{`32.50147`}</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`52 weeksLowDate`}</div>
            <div className="col-12 col-md-6 fw-bold">{`2019-01-1`}</div>
          </div>
        </div>
      </div>
      <div className="row py-3 border-bottom">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`52weekHigh`}</div>
            <div className="col-12 col-md-6 fw-bold">{`32.50147`}</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`52 weeksPriceReturnDialy`}</div>
            <div className="col-12 col-md-6 fw-bold">{`101.96334`}</div>
          </div>
        </div>
      </div>
      <div className="row py-3 border-bottom">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`52weekLow`}</div>
            <div className="col-12 col-md-6 fw-bold">{`149.22`}</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6">{`beta`}</div>
            <div className="col-12 col-md-6 fw-bold">{`1.299`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Financials;
