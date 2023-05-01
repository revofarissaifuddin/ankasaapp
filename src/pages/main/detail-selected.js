import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import logoAnkasa from "../../images/logo-ankasa-section.svg";
import LogoMaskapai from "../../images/garuda-indonesia-logo.svg";
import LogoFlight from "../../images/logo-flight.svg";
import LogoDot from "../../images/logo-dot.svg";
import LogoCentang from "../../images/logo-centangbiru.svg";

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
        <div className="-mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mr-10 ms-10">
          {/* left menu */}
          <div className="col-span-2 p-2">
            <div className="text-xl flex flex-col justify-start">
              <div className="flex flex-row text-white">
                <h1 className="font-bold">Contact Person Details</h1>
              </div>
            </div>
            {/* contact person details */}
            <div className="flex flex-col bg-white rounded-lg mt-10">
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
                    <label className="block mb-2 ms-4 text-sm font-medium text-gray-900 bg-white">
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
                  <div className="flex flex-col mt-5 ms-1 p-3 bg-cyan-100 rounded-lg">
                    <div className="flex flex-row justify-between">
                      <div className="ms-2">
                        <h1>Passenger : 1 Adult</h1>
                      </div>
                      <div className="me-2">
                        <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                          Same as contact person
                        </label>
                        <input
                          className="mr-2 mt-[0.3rem] h-3.5 ms-3 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col mt-5 ms-1 border-b-2 border-500"
                    style={{ borderColor: "#D2C2FF" }}
                  >
                    <label className="block mb-2 ms-4 text-sm font-medium text-gray-900 bg-white">
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
                    <label className="block mb-2 ms-4 text-sm font-medium text-gray-900 bg-white">
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
            <div className="flex flex-col bg-white rounded-lg mt-10">
              <div className="p-10">
                {/* layout merek */}
                <div className="flex flex-row">
                  <div className="flex-1 w-64">
                    <Image
                      className="w-auto"
                      src={LogoMaskapai}
                      alt="garuda-indonesia-logo"
                      style={{ width: "100", height: "57" }}
                    />
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
                    <Image
                      className="w-auto"
                      src={LogoFlight}
                      alt="logo-flight"
                    />
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
                  <div className="flex-none w-10">
                    <Image
                      className="w-auto mt-2.5"
                      src={LogoDot}
                      alt="logo-dot"
                    />
                  </div>
                  <div className="flex-auto w-20">
                    <h1 className="">12:33-15:21</h1>
                  </div>
                </div>
                {/* layout detail tiket */}
                <div className="flex flex-col mt-5 font-bold text-cyan-400">
                  <div className="flex flex-row w-40">
                    <Image
                      className="w-auto"
                      src={LogoCentang}
                      alt="logo-centangbiru"
                    />
                    <h1 className="text-blue ms-3">Refundable</h1>
                  </div>
                  <div className="flex flex-row w-40">
                    <Image
                      className="w-auto"
                      src={LogoCentang}
                      alt="logo-centangbiru"
                    />
                    <h1 className="text-blue ms-3">Can reschedule</h1>
                  </div>
                </div>
                {/* layout merek */}
                <div className="flex flex-row justify-between mt-5 border-t-2 border-dove-500">
                  <div className="font-bold text-xl mt-2 text-black">
                    <h1>Flight Details</h1>
                  </div>
                  <div className="flex flex-row font-bold">
                    <h1 className="text-md mt-3 text-cyan-400">$ 145,00</h1>
                    <h1 className="text-md mt-3 ms-2 text-cyan-400">V</h1>
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
