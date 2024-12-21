import React from "react";
import RevenueShareHeader from "../components/RevenueShare/RevenueShareHeader";
import CountTimer from "../components/CountTimer/CountTimer";
import RevenueSharingView from "../components/RevenueShare/RevenueSharingView";
import RevenueIncome from "../components/RevenueShare/RevenueIncome";
import RevenuePayout from "../components/RevenueShare/RevenuePayout";

export default function RevenueShare() {
  return (
    <div>
      <RevenueShareHeader />
      <CountTimer />
      <RevenueSharingView />
      <RevenueIncome />
      <RevenuePayout />
    </div>
  );
}
