import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Link from "next/link";

export default function BookingTiket() {
  return (
    <div className="mx-auto">
      <Head>
        <title>Booking Pass</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-full flex flex-col w-full bg-white">
        {/* navbar */}
        <Navbar />
        <div className="w-full mx-auto" style={{ backgroundColor: "#2395FF" }}>
          <div className="container mx-auto w-2/3 rounded-lg bg-white mt-20 mb-20 p-20">
            <div className="text-2xl flex flex-row justify-between text-black">
              <h1 className="font-bold">Booking Pass</h1>
              <h1 className="text-md">:</h1>
            </div>
            <div className="">
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="w-full bg-white">
          <Footer />
        </div>
      </main>
    </div>
  );
}
