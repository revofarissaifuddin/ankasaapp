import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import imgAuth from "../../images/logo-auth.png";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Register</title>
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
                  <h1 style={{ color: "black" }}>Register</h1>
                </div>
                <div className="flex flex-col mt-5">
                  <label className="block">
                    <input
                      type="text"
                      className="w-auto xl:w-96 h-10 p-5 mt-5 border-b-2 border-500 bg-white"
                      placeholder="Fullname"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                  </label>
                  <label className="block">
                    <input
                      type="email"
                      className="w-auto xl:w-96 h-10 p-5 mt-5 border-b-2 border-500 bg-white"
                      placeholder="Email"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                  </label>
                  <label className="block">
                    <input
                      type="password"
                      className="w-auto xl:w-96 h-10 p-5 mt-5 border-b-2 border-500 bg-white"
                      placeholder="Password"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                  </label>
                </div>
                <div className="flex flex-col mt-10">
                  <button
                    className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl"
                    style={{ backgroundColor: "#2395FF", color: "white" }}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="flex justify-start mt-2 p-2">
                  <label style={{ color: "black" }}>
                    <input type="checkbox" className="me-3" />
                    Accept terms and condition
                  </label>
                </div>
              </form>
              <div className="flex flex-col mt-10 border-2 w-80" />
              <div className="flex flex-col mt-10" style={{ color: "black" }}>
                <h5>Already have an account?</h5>
              </div>
              <div className="flex flex-col mt-5" style={{ color: "blue" }}>
                <Link href={"/auth/login"}>
                  <button
                    className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl border-2"
                    style={{ borderColor: "#2395FF", color: "black" }}
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
