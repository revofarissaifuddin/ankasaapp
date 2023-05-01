import Head from "next/head";
import NavbarLanding from "@/components/navbarLanding";
import Footer from "@/components/footer";


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

          {/* footer */}
          <div className="w-full bg-white">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
