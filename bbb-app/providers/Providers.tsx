"use client";
import React from "react";
import WagmiProvider from "./WagmiProvider";
import NextAuthProvider from "./NextAuthProvider";

type ProviderType = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderType) => {
  return (
    <WagmiProvider>
      <NextAuthProvider>{children}</NextAuthProvider>
    </WagmiProvider>
  );
};

export default Providers;