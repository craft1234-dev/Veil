import React from "react";
import Navbar from "../components/NavBar/NavBar.jsx";
import { Box, Typography, Button, Container, Grid2 } from "@mui/material";
import Header from "../components/Header/Header.jsx";
import FeatureCardGroup from "../components/FeatureCardGroup/FeatureCardGroup.jsx";
import ExchangeCryptoSection from "../components/ExchangeCryptoSection/ExchangeCryptoSection.jsx";
import RecentTransaction from "../components/RecentTransaction/RecentTransaction.jsx";
import SupprotedCrypto from "../components/SurrpotedCrypto/SupprotedCrypto.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <FeatureCardGroup />
      {/* <ExchangeCryptoCard /> */}
      <ExchangeCryptoSection />
      <RecentTransaction />
      <SupprotedCrypto />
    </>
  );
};

export default Home;
