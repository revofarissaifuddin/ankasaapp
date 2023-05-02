import Head from "next/head";
import NavbarLanding from "@/components/navbarLanding";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="mx-auto  h-screen bg-white">
      <div className="flex flex-col h-screen">
        <Head>
          <title>Landing Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="max-w-full flex flex-col w-full bg-white"
          style={{ backgroundColor: "#F5F6FA" }}
        >
          {/* navbar */}
          <NavbarLanding />
          {/* boddy */}
          <div
            className="w-full mx-auto"
            style={{ backgroundColor: "#2395FF" }}
          >
            asdasdjnasjdn
          </div>
          {/* footer */}
          <div className="w-full bg-white">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
