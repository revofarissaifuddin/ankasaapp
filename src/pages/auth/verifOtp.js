import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import imgAuth from "../../images/logo-auth.png";

export default function VerifOtp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Verif Otp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <div className="rounded-2xl shadow-2xl flex w-full h-full">
          <div
            className="w-3/5 justify-center"
            style={{ backgroundColor: "#2395FF" }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen">
              <Image src={imgAuth} alt="" style={{ maxWidth: "50%" }} />
            </div>
          </div>
          <div className="w-2/5" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="flex flex-col items-center justify-center min-h-screen">
              <form>
                <div className="flex justify-start text-3xl font-bold mb-2 text-left">
                  <h1>Verifikasi Otp</h1>
                </div>
                <div className="flex flex-col mt-10">
                  <label className="block">
                    <input
                      type="email"
                      className="w-auto xl:w-96 h-10 p-5 border-b-2 border-500 bg-white"
                      placeholder="Email"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                      Please provide a valid email address.
                    </p>
                  </label>
                  <label className="block">
                    <input
                      type="text"
                      className="w-auto xl:w-96 h-10 p-5 border-b-2 border-500 bg-white"
                      placeholder="Otp"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                  </label>
                </div>
                <div className="flex flex-col mt-2">
                  <button
                    className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl"
                    style={{ backgroundColor: "#2395FF", color: "white" }}
                  >
                    Send
                  </button>
                </div>
              </form>
              <div className="flex flex-col mt-10">
                <h5>You’ll get message soon on your email</h5>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
