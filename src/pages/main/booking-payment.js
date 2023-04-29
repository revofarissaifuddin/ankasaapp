import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";

export default function BookingPayment() {
  return (
    <div className="mx-auto">
      <Head>
        <title>Detail Selected</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-full flex flex-col w-full">
        {/* navbar */}
        <Navbar />
        <div
          className="w-full h-full"
          style={{ backgroundColor: "#2395FF" }}
        >
          <div className="container mx-auto">mx-8</div>
        </div>
        {/* footer */}
        <div className="w-full bg-white">
          <Footer />
        </div>
      </main>
    </div>
  );
}
