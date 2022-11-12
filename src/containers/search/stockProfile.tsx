import React from "react";
import Financials from "../../components/financials";
import StockCard from "../../components/stockCard";

function StockProfile() {
  return (
    <section id="stock-profile">
      {/* stock info */}
      <StockCard
        ticker="Apple Inc"
        currency="USD"
        country="US"
        city="CUPERTINO"
        price="140.2"
      />
      {/* financial section */}
      <h3 className="my-4">Financials</h3>
      <Financials />
    </section>
  );
}

export default StockProfile;
