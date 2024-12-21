import React from "react";
import Header from "../components/Header/Header.jsx";
import FeatureCardGroup from "../components/Home/FeatureCardGroup/FeatureCardGroup.jsx";
import ExchangeCryptoSection from "../components/Home/ExchangeCryptoSection/ExchangeCryptoSection.jsx";
import RecentTransaction from "../components/Home/RecentTransaction/RecentTransaction.jsx";
import SupprotedCrypto from "../components/Home/SurrpotedCrypto/SupprotedCrypto.jsx";
import LatestUpdates from "../components/Home/LatestUpdates/LatestUpdates.jsx";
import OrderTrack from "../components/Home/OrderTrack/OrderTrack.jsx";
const Home = () => {
  return (
    <>
      <Header />
      <FeatureCardGroup />
      <ExchangeCryptoSection />
      <RecentTransaction />
      <SupprotedCrypto />
      <LatestUpdates />
      <OrderTrack />
    </>
  );
};

export default Home;
