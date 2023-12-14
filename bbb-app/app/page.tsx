import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
    <div className="z-10 flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
      <p className="mt-2 text-sm text-gray-600">Sign in to continue</p>
      <div className="mt-8 w-full">
        {/* <w3m-network-button />
        <w3m-button /> */}
        <Link href="/auth">
          <button className="w-full transform rounded-lg bg-blue-700 px-5 py-3 text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-blue-800 hover:scale-105">
            Sign In
          </button>
        </Link>
      </div>
      <p className="mt-4 text-sm text-gray-600">Don't have wallet? <a href="https://sites.google.com/view/webstore-detail-nzpkkege/designed-for-speed-and-safety?gclid=Cj0KCQiAyeWrBhDDARIsAGP1mWQ8iiKWDU3VwcQscWRaOOYaxp1rhIP7GvL20s6BWAedJQCGX9j85eMaAqqwEALw_wcB" className="font-bold text-blue-700 hover:underline">Get Wallet</a></p>
    </div>
  </main>
  );
}