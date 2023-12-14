"use client";
import { useEffect, useState } from "react";
import { SiweMessage } from "siwe";
import { useAccount, useNetwork, useSignMessage } from "wagmi";
import { getCsrfToken, signIn } from "next-auth/react";
import { ethers } from "ethers";
import nftContractABI from "./abi/nftContract.json";

export default function Auth() {
  const [mounted, setMounted] = useState(false);
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { signMessageAsync } = useSignMessage();

  const [userAddress, setUserAddress] = useState("");
  // const [nftOwned, setNftOwned] = useState(false);
  const [nftOwned, setNftOwned] = useState(true);

  const nftContractAddress = "0xD96aD6440d0DE875F0Aa5Bbd25f19D208636F72E";

  useEffect(() => setMounted(true), []);
  if (!mounted) return <></>;

  const handleLogin = async () => {
    try {
      const callbackUrl = "/protected";
      const message = new SiweMessage({
        domain: window.location.host,
        address: address as `0x${string}`,
        statement: process.env.NEXT_PUBLIC_SIGNIN_MESSAGE,
        uri: window.location.origin,
        version: "1",
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      });

      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      const response = await signIn("siwe", {
        message: JSON.stringify(message),
        redirect: true,
        signature,
        callbackUrl,
      });
      if (response?.error) {
        console.log("Error occured:", response.error);
      }
    } catch (error) {
      console.log("Error Occured", error);
    }
    if (window.ethereum) {
      try {
        const newAccounts = await (window.ethereum as any).request({
          method: "eth_requestAccounts",
        });
        setUserAddress(newAccounts[0]);
        checkNFTOwnership(newAccounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Ethereum provider not found");
    }
  };

  const checkNFTOwnership = async (userAddress: string) => {
    try {
      if (typeof window.ethereum === "undefined" || !window.ethereum) {
        console.log("Ethereum provider not found");
        return;
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        nftContractAddress,
        nftContractABI,
        provider
      );

      const balance = await contract.balanceOf(userAddress, 1);
      if (balance > 0) setNftOwned(true);
      setNftOwned(balance.gt(0));
    } catch (error) {
      console.error(error);
      console.log("Error checking NFT ownership");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-700 p-6">
  <div className="z-10 flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-white p-8 shadow-2xl">
    {!isConnected && (
      <div className="flex w-full justify-center transform rounded-lg bg-[#47A1FF] px-5 py-3 text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-[#47A1FF] hover:scale-105">
      <w3m-button />
    </div>
    )}
    {isConnected && (
      nftOwned ? (
        <button
          onClick={handleLogin}
          className="w-full transform rounded-lg bg-green-500 px-5 py-3 text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-green-600 hover:scale-105"
        >
          Sign Message to Login
        </button>
      ) : (
        <p className="mt-4 text-lg text-white">Please purchase an NFT to login</p>
      )
    )}
  </div>
</main>

  );
}