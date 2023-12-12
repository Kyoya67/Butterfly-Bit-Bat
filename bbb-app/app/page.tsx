import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark-background">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex center-content">
        {/* <w3m-network-button />
        <w3m-button /> */}
        <Link href="/auth">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-10 text-xl rounded-lg">
          Sign In
        </button>
      </Link>
      </div>
    </main>
  );
}