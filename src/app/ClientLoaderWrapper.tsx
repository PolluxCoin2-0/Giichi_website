// ClientLoaderWrapper.tsx (Client Component)
"use client";

import React, { useState, useEffect } from "react";
import Loader from "../app/components/reusableComp/Loader";

const ClientLoaderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate delay
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (loading) {
    return <Loader />; // Show Loader during loading state
  }

  return <>{children}</>; // Render content after loading
};

export default ClientLoaderWrapper;
