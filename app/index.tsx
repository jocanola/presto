import Welcome from "@/src/features/Login/screens/Welcome";
import React, { useState } from "react";
import Onboarding from "@/src/features/Onboarding/screens/Onboarding";

export default function HomeTab() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  if (showOnboarding) {
    return <Onboarding onDone={() => setShowOnboarding(false)} />;
  }
  return <Welcome />;
}
