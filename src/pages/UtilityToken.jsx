import React from "react";
import VeilToken from "../components/UtilityToken/VeilToken/VeilToken";
import VeilTokenStatus from "../components/UtilityToken/VeilTokenStatus/VeilTokenStatus";
import RevenuAllocation from "../components/UtilityToken/RevenueAllocation/RevenuAllocation";
import CountTimer from "../components/CountTimer/CountTimer";

export default function UtilityToken() {
  return (
    <div>
      <VeilToken />
      <VeilTokenStatus />
      <RevenuAllocation />
      <CountTimer />
    </div>
  );
}
