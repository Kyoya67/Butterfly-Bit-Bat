"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { useDisconnect } from "wagmi";

export default function HiddenPage() {
  const { disconnectAsync } = useDisconnect();
  const handleSignout = async () => {
    disconnectAsync();
    signOut({ callbackUrl: "/" });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSignout}
      >
        Sign Out
      </button>
    </div>
  );
}