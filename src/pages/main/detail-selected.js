import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import logoAnkasa from "../../images/logo-ankasa-section.svg";

export default function DetailSelected() {
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
          className="w-full h-48 rounded-br-3xl rounded-bl-3xl"
          style={{ backgroundColor: "#2395FF" }}
        >
          <Image
            className="w-auto mt-5"
            src={logoAnkasa}
            alt="logo-ankasa-section"
          />
        </div>
        <div className="-mt-40 grid grid-cols-3 gap-4 p-4 mr-10 ms-10">
          {/* left menu */}
          <div className="col-span-2 p-2">
            <div className="text-xl flex flex-col justify-start">
              <div className="flex flex-row  text-white">
                <h1 className="font-bold">Contact Person Details</h1>
              </div>
            </div>
            {/* contact person details */}
            <div className="flex flex-col bg-white rounded-lg mt-5">
              <div className="flex flex-col p-10">
                <form>
                  <div className="flex flex-col">
                    <label className="ms-4">Full Name</label>
                    <input
                      type="text"
                      className="w-auto h-10 p-4 border-b-2 border-500 bg-white"
                      placeholder="Full Name"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="ms-4">Email</label>
                    <input
                      type="email"
                      className="w-auto h-10 p-4 border-b-2 border-500 bg-white"
                      placeholder="Email"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                  </div>
                  <div
                    className="flex flex-col mt-5 mb-10 border-b-2 border-500"
                    style={{ borderColor: "#D2C2FF" }}
                  >
                    <label
                      for="countries"
                      className="block mb-2 ms-4 text-sm font-medium text-gray-900 bg-white"
                    >
                      Select an option
                    </label>
                    <div className="flex flex-row">
                      <select
                        id="countries"
                        className="bg-white-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 bg-white p-2.5"
                      >
                        <option selected value="61">
                          + 60
                        </option>
                        <option value="62">+ 62</option>
                        <option value="26">+ 26</option>
                        <option value="64">+ 64</option>
                      </select>
                      <input
                        type="text"
                        className="w-full h-10 p-4 bg-white border-s-2 border-500 ms-2"
                        placeholder="Phone Number"
                        style={{ borderColor: "#D2C2FF" }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Passanger Details */}
            <div className="text-xl flex flex-col justify-start mt-10">
              <div className="flex flex-row  text-black">
                <h1 className="font-bold">Passenger Details</h1>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg mt-5">
              <div className="flex flex-col p-10">
                <form>
                  <div
                    className="flex flex-col mt-5 ms-1 border-b-2 border-500"
                    style={{ borderColor: "#D2C2FF" }}
                  >
                    <label
                      for="countries"
                      className="block mb-2 ms-4 text-sm font-medium text-gray-900 bg-white"
                    >
                      Title
                    </label>
                    <div className="flex flex-row">
                      <select
                        id="countries"
                        className="bg-white-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 bg-white p-2.5"
                      >
                        <option selected value="Mr.">
                          Mr.
                        </option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="ms-4">Full Name</label>
                    <input
                      type="text"
                      className="w-auto h-10 p-4 border-b-2 border-500 bg-white"
                      placeholder="Full Name"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                  </div>
                  <div
                    className="flex flex-col mt-5 border-b-2 border-500"
                    style={{ borderColor: "#D2C2FF" }}
                  >
                    <label
                      for="countries"
                      className="block mb-2 ms-4 text-sm font-medium text-gray-900 bg-white"
                    >
                      Nationality
                    </label>
                    <div className="flex flex-row ms-1">
                      <select
                        id="countries"
                        className="bg-white-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 bg-white p-2.5"
                      >
                        <option selected value="Indonesia">
                          Indonesia
                        </option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Singapore">Singapore</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Passanger Details */}
            <div className="text-xl flex flex-col justify-start mt-10">
              <div className="flex flex-row  text-black">
                <h1 className="font-bold">Passenger Details</h1>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg mt-5">
              <div className="flex flex-col p-10">
                <form>
                  <div className="flex flex-row justify-between w-auto h-10 border-b-2 border-500 ">
                    <div className=" font-bold">
                      <label style={{ color: "black" }}>
                        <input type="checkbox" className="me-3 bg-white" />
                        Travel Insurance
                      </label>
                    </div>
                    <div className="flex flex-row">
                      <h1 className="text-md mt-3 me-1 text-blue-500">
                        $ 2,00 /
                      </h1>
                      <h1 className="text-md mt-3 ms-1 text-black-500">pax</h1>
                    </div>
                  </div>
                </form>
                <div className="mt-4">
                  <label>Get travel compensation up to $ 10.000,00</label>
                </div>
              </div>
            </div>
            {/* Button Payment */}
            <div className="text-xl flex flex-col justify-center mt-10">
              <div className="flex flex-row justify-center text-black">
                <button
                  className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl"
                  style={{ backgroundColor: "#2395FF", color: "white" }}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
          {/* right menu */}
          <div className="col-span-1 p-2">
            <div className="text-xl flex flex-row justify-between text-white">
              <h1 className="font-bold">Flight Details</h1>
              <h1 className="text-md">View Details</h1>
            </div>
            <div className="flex flex-col bg-white rounded-lg mt-5">
              <div className="p-5">
                {/* layout merek */}
                <div className="flex flex-row">
                  <div className="flex-1 w-64">
                    <h1 className="font-bold">Select Tiket</h1>
                  </div>
                  <div className="flex-1 w-32">
                    <h1 className="">Garuda Indonesia</h1>
                  </div>
                </div>
                {/* layout tujuan */}
                <div className="flex flex-row mt-5">
                  <div className="flex-auto w-10">
                    <h1 className="font-bold">Medan (IDN)</h1>
                  </div>
                  <div className="flex-none w-20">
                    <h1 className="font-bold">\/</h1>
                  </div>
                  <div className="flex-auto w-20">
                    <h1 className="font-bold">Tokyo (JPN)</h1>
                  </div>
                </div>
                {/* layout tanggal */}
                <div className="flex flex-row mt-5">
                  <div className="flex-auto w-10">
                    <h1 className="">Sunday, 15 agustus 2020</h1>
                  </div>
                  <div className="flex-none w-20">
                    <h1 className="font-bold">o</h1>
                  </div>
                  <div className="flex-auto w-20">
                    <h1 className="">12:33-15:21</h1>
                  </div>
                </div>
                {/* layout detail tiket */}
                <div className="flex flex-col mt-5">
                  <div className="flex-auto w-40">
                    <h1 className="text-blue">Refundable</h1>
                  </div>
                  <div className="flex-none w-40">
                    <h1 className="text-blue">Can reschedule</h1>
                  </div>
                </div>
                {/* layout merek */}
                <div className="flex flex-row justify-between mt-5 border-t-2 border-dove-500">
                  <div className="font-bold text-xl mt-2 text-black">
                    <h1>Flight Details</h1>
                  </div>
                  <div className="flex flex-row">
                    <h1 className="text-md mt-3 text-blue-500">$ 145,00</h1>
                    <h1 className="text-md mt-3 ms-2 text-blue-500">V</h1>
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
  );
}
