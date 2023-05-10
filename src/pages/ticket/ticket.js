import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import LogoMaskapai from "../../images/garuda-indonesia-logo.svg";
import LogoFlight from "../../images/logo-flight.svg";
import Barcode from "react-barcode";
import React, { useState } from "react";
import styles from "../../css/App.module.css";

export default function Tiket() {
  const [bar, setBar] = useState("");

  function handleBarcode(e) {
    setBar(e.target.value);
  }
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
          <div className="container mx-auto w-2/3 rounded-lg bg-white mt-20 mb-20 p-40">
            <div className="text-2xl flex flex-row justify-between text-black">
              <h1 className="font-bold">Booking Pass</h1>
              <h1 className="text-md">:</h1>
            </div>
            <div className="flex flex-row justify-center xm-auto">
              <div className="w-3/4 text-2xl flex flex-col justify-between text-black bg-white-100 p-10 mt-10 rounded-lg border-solid border-2 border-gray-200">
                {/* departure */}
                <div className="flex flex-row mt-5">
                  <div className="">
                    <Image
                      className="w-auto"
                      src={LogoMaskapai}
                      alt="garuda-indonesia-logo"
                      style={{ width: "100", height: "57" }}
                    />
                  </div>
                  <div className="flex flex-row mt-2 ms-10">
                    <div className="w-10">
                      <h1 className="font-bold">IDN</h1>
                    </div>
                    <div className="w-10 ms-10 mt-2">
                      <Image
                        className="w-auto"
                        src={LogoFlight}
                        alt="logo-flight"
                      />
                    </div>
                    <div className="w-10 ms-3">
                      <h1 className="font-bold">JPN</h1>
                    </div>
                  </div>
                </div>
                {/* code and class */}
                <div className="flex flex-row mt-5">
                  <div className="flex flex-col">
                    <div className="">
                      <h1 className="text-sm text-gray-400">Code</h1>
                    </div>
                    <div className="">
                      <h1 className="text-sm ">AB-221</h1>
                    </div>
                  </div>
                  <div className="flex flex-col ms-32">
                    <div className="">
                      <h1 className="text-sm text-gray-400">Class</h1>
                    </div>
                    <div className="">
                      <h1 className="text-sm ">Economy</h1>
                    </div>
                  </div>
                </div>
                {/* code and class */}
                <div className="flex flex-row mt-5">
                  <div className="flex flex-col">
                    <div className="">
                      <h1 className="text-sm text-gray-400">Terminal</h1>
                    </div>
                    <div className="">
                      <h1 className="text-sm ">A</h1>
                    </div>
                  </div>
                  <div className="flex flex-col ms-32">
                    <div className="">
                      <h1 className="text-sm text-gray-400">Gate</h1>
                    </div>
                    <div className="">
                      <h1 className="text-sm ">221</h1>
                    </div>
                  </div>
                </div>
                {/* departure data */}
                <div className="flex flex-col mt-5">
                  <div className="">
                    <h1 className="text-sm text-gray-400">Departure</h1>
                  </div>
                  <div className="">
                    <h1 className="text-sm ">Monday, 20 July ‘20 - 12:33</h1>
                  </div>
                </div>
              </div>
              <div className="w-1/4 text-2xl justify-center text-black bg-white-100 mt-10 rounded-lg border-solid border-2 border-gray-200">
                <div className="-rotate-90 mt-48 w-40 justify-center ms-10">
                  <Barcode
                    value={bar ? bar : "1233 1233 1233"}
                    lineColor="black"
                  />
                </div>
              </div>
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
