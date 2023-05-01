import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import LogoLocation from "../../images/logo-location.svg";
import LogoUsers from "../../images/logo-user.svg";
import BtnBack from "../../images/btn-right.svg";
import LogoStar from "../../images/logo-start.svg";
import LogoSetting from "../../images/logo-setting.svg";
import LogoLogout from "../../images/logo-logout.svg";
export default function MyProfile() {
  return (
    <div className="mx-auto  h-screen bg-white">
      <div className="flex flex-col h-screen">
        <Head>
          <title>My Profile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="max-w-full flex flex-col w-full bg-white"
          style={{ backgroundColor: "#F5F6FA" }}
        >
          {/* navbar */}
          <Navbar />

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 p-4 mr-10 ms-10">
            {/* left menu */}
            <div className="col-span-1 p-2">
              <div className="flex flex-col bg-white mt-5 p-10 rounded-lg">
                <div className="flex justify-center mx-auto w-40 justify-center rounded-full border-4 border-cyan-400">
                  <img
                    className="w-auto rounded-full border-cyan-400"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex justify-center mx-auto mt-5">
                  <button className="bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded">
                    Select Photo
                  </button>
                </div>
                <div className="flex justify-center mx-auto font-bold text-lg mt-5">
                  <h1>Mike Kowalski</h1>
                </div>
                <div className="flex flex-row justify-center mx-auto text-lg mt-3">
                  <Image src={LogoLocation} alt="logo-location" />
                  <h1 className="ms-2">Medan, Indonesia</h1>
                </div>
                <div className="flex flex-row justify-between mt-5 font-bold">
                  <h1>Cards</h1>
                  <h1 className="text-cyan-400">+ Add</h1>
                </div>
                <div className="flex flex-col text-lg bg-blue-500 p-5 mt-5 rounded-lg">
                  <div className="ms-2 me-2">
                    <h1 className="text-white">4441 1235 5512 5551</h1>
                  </div>
                  <div className="flex flex-row justify-between ms-2 me-2">
                    <h1 className="text-cyan-300">X Card</h1>
                    <h1 className="text-cyan-300">$ 1,440.2</h1>
                  </div>
                </div>
                <div className="flex flex-col p-5 font-bold">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                      <Image src={LogoUsers} alt="logo-user" />
                      <h1 className="text-cyan-400 ms-10">Profile</h1>
                    </div>
                    <div className="">
                      <Image src={BtnBack} alt="btnback" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-5">
                    <div className="flex flex-row">
                      <Image src={LogoStar} alt="logo-start" />
                      <h1 className="text-black-400 ms-10">My Review</h1>
                    </div>
                    <div className="">
                      <Image src={BtnBack} alt="btnback" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-5">
                    <div className="flex flex-row">
                      <Image src={LogoSetting} alt="logo-start" />
                      <h1 className="text-black-400 ms-10">Setting</h1>
                    </div>
                    <div className="">
                      <Image src={BtnBack} alt="btnback" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-5">
                    <div className="flex flex-row">
                      <Image src={LogoLogout} alt="logo-start" />
                      <h1 className="text-red-400 ms-10">Logout</h1>
                    </div>
                    <div className="">
                      <Image src={BtnBack} alt="btnback" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right menu */}
            <div className="col-span-3 p-2">
              {/* list  */}
              <div className="flex flex-col bg-white rounded-lg mt-5">
                <div className="p-5">
                  {/* layout merek */}
                  <div className="flex flex-col">
                    <div className="text-blue-400 text-sm">
                      <h1>PROFILE</h1>
                    </div>
                    <div className="">
                      <h1 className="text-lg font-bold">Profile</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                      <div className="mt-5">
                        <h1 className="font-bold">Contact</h1>
                        <div className="flex flex-col p-5">
                          <h1 className="ms-5">Email</h1>
                          <input
                            type="email"
                            className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                            placeholder="Email"
                            style={{ borderColor: "#D2C2FF" }}
                          />
                          <h1 className="mt-5 ms-5">Phone Number</h1>
                          <input
                            type="text"
                            className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                            placeholder="Phone Number"
                            style={{ borderColor: "#D2C2FF" }}
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <h1 className="font-bold">Biodata</h1>
                        <div className="flex flex-col p-5">
                          <h1 className="ms-5">Fullname</h1>
                          <input
                            type="text"
                            className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                            placeholder="Full Name"
                            style={{ borderColor: "#D2C2FF" }}
                          />
                          <h1 className="mt-5 ms-5">City</h1>
                          <input
                            type="text"
                            className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                            placeholder="City"
                            style={{ borderColor: "#D2C2FF" }}
                          />
                          <h1 className="mt-5 ms-5">Address</h1>
                          <input
                            type="text"
                            className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                            placeholder="Address"
                            style={{ borderColor: "#D2C2FF" }}
                          />
                          <h1 className="mt-5 ms-5">Post Code</h1>
                          <input
                            type="text"
                            className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                            placeholder="Post Code"
                            style={{ borderColor: "#D2C2FF" }}
                          />
                        </div>
                        <div className="flex justify-end mx-auto me-5">
                          <button
                            className="w-32 font-semibold hover:text-white py-2 px-4 border rounded"
                            style={{
                              backgroundColor: "#2395FF",
                              color: "white",
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
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
    </div>
  );
}
