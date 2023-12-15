"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useDisconnect } from "wagmi";
import { FaVoteYea, FaDiscord, FaSignOutAlt } from "react-icons/fa";

export default function HiddenPage() {
  const { disconnectAsync } = useDisconnect();
  const handleSignout = async () => {
    disconnectAsync();
    signOut({ callbackUrl: "/" });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-green-300 to-green-500 p-6">
  <div className="flex w-full max-w-6xl flex-wrap items-center justify-around space-y-6 rounded-lg bg-white p-8 shadow-2xl">
    <h1 className="w-full text-4xl font-bold text-gray-800 text-center">
      折れたバット再生DAOへようこそ！
    </h1>
    <p className="w-full text-center text-gray-600">
      Engage, vote, and make a difference in our decentralized community.
    </p>

    <div className="flex w-full justify-around space-x-6">
      {/* Voting Room Link Card */}
      <div className="flex flex-1 flex-col items-center justify-center transform rounded-lg border-4 border-gray-300 bg-white p-5 text-xl font-bold text-gray-800 transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
        <FaVoteYea className="mb-4 h-20 w-20 text-green-500" />
        <span>Move to Voting Room</span>
        <p className="my-2 text-center text-sm text-gray-600">
          Get your community involved in the decision-making process.
        </p>
        <Link href="https://testnet.snapshot.org/#/bit-change-bat.eth" className="mt-4 rounded bg-green-500 px-6 py-2 text-white transition duration-300 ease-in-out hover:bg-green-700">
            Create proposal
        </Link>
      </div>

      {/* Discord Link Card */}
      <div className="flex flex-1 flex-col items-center justify-center transform rounded-lg border-4 border-gray-300 bg-white p-5 text-xl font-bold text-gray-800 transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
        <FaDiscord className="mb-4 h-20 w-20 text-blue-500" />
        <span>Move to Discord</span>
        <p className="my-2 text-center text-sm text-gray-600">
          Begin by making your first treasury deposit. Learn more about managing a DAO treasury.
        </p>
        <Link href="https://discord.gg/kK4PtAGp" className="mt-4 rounded bg-blue-500 px-6 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-700">
            Deposit funds
        </Link>
      </div>
    </div>
    <button
        onClick={handleSignout}
        className="flex flex-col items-center justify-center transform rounded-lg bg-red-500 px-5 py-3 text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-red-700 hover:scale-110"
      >
        <FaSignOutAlt className="mb-2 h-8 w-8" />
        <span>Sign Out</span>
      </button>
  </div>
</main>

  );
}
