import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import logoAnkasa from "../../images/logo-ankasa-section.svg";
import LogoMaskapai from "../../images/garuda-indonesia-logo.svg";
import LogoWhite from "../../images/logo-white.svg";
import LogoSort from "../../images/logo-sort.svg";
import LogoFlight from "../../images/logo-flight.svg";
import LogoKoper from "../../images/logo-koper.svg";
import LogoFood from "../../images/logo-food.svg";
import LogoWifi from "../../images/logo-wifi.svg";
import LogoFrom from "../../images/logo-from.svg";
import BtnBack from "../../images/btnback.svg";

export default function Home() {
  return (
    <div className="mx-auto  h-screen bg-white">
      <div className="flex flex-col h-screen">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="max-w-full flex flex-col w-full bg-white"
          style={{ backgroundColor: "#F5F6FA" }}
        >
          {/* navbar */}
          <Navbar />
          {/*  */}
          <div
            className="w-full h-48 rounded-br-3xl rounded-bl-3xl"
            style={{ backgroundColor: "#2395FF" }}
          >
            <div className="">
              <Image
                className="w-auto mt-5"
                src={logoAnkasa}
                alt="logo-ankasa-section"
              />
            </div>
            <div className="container mx-auto -mt-24">
              <div className="flex flex-row">
                <div className="">
                  <Image className="w-auto" src={LogoWhite} alt="logo-white" />
                </div>
                <div className="flex flex-col ms-5 w-80">
                  <div className="flex flex-row justify-between">
                    <h1 className="text-white">From</h1>
                    <h1 className="text-white">To</h1>
                  </div>
                  <div className="flex flex-row justify-between mx-auto w-80">
                    <div className="">
                      <h1 className="font-bold text-white">Medan (IDN)</h1>
                    </div>
                    <div className="">
                      <Image
                        className="w-auto"
                        src={LogoFrom}
                        alt="logo-from"
                      />
                    </div>
                    <div className="">
                      <h1 className="font-bold text-white">Tokyo (JPN)</h1>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3 mx-auto me-0">
                  <h1 className="font-bold text-white">Change Search</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 p-4 mr-10 ms-10">
            {/* left menu */}
            <div className="col-span-1 p-2">
              <div className="text-xl flex flex-row justify-between">
                <h1 className="font-bold">Filter</h1>
                <h1 className="text-sky-500 font-bold">Reset</h1>
              </div>
              <div className="flex flex-col bg-white border-stone-500 rounded-lg mt-5 ">
                {/* Transit */}
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <button className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl text-start peer">
                      Filter
                    </button>
                    <Image className="w-auto" src={BtnBack} alt="btnback" />
                  </div>
                  <fieldset className="">
                    <legend class="sr-only">Checkbox variants</legend>
                    <div class="flex items-center mb-4">
                      <input
                        id="checkbox-2"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        I want to get promotional offers
                      </label>
                    </div>

                    <div class="flex items-center mb-4">
                      <input
                        id="checkbox-3"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        I am 18 years or older
                      </label>
                    </div>
                  </fieldset>
                </div>
                {/* filter */}
                <div className="">
                  <div
                    id="accordion-flush"
                    data-accordion="collapse"
                    data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400"
                  >
                    <h2 id="accordion-flush-heading-3">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                        data-accordion-target="#accordion-flush-body-3"
                        aria-expanded="false"
                        aria-controls="accordion-flush-body-3"
                      >
                        <span>
                          What are the differences between Flowbite and Tailwind
                          UI?
                        </span>
                        <svg
                          data-accordion-icon
                          className="w-6 h-6 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-flush-body-3"
                      className="hidden"
                      aria-labelledby="accordion-flush-heading-3"
                    >
                      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          The main difference is that the core components from
                          Flowbite are open source under the MIT license,
                          whereas Tailwind UI is a paid product. Another
                          difference is that Flowbite relies on smaller and
                          standalone components, whereas Tailwind UI offers
                          sections of pages.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          However, we actually recommend using both Flowbite,
                          Flowbite Pro, and even Tailwind UI as there is no
                          technical reason stopping you from using the best of
                          two worlds.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Learn more about these technologies:
                        </p>
                        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                          <li>
                            <a
                              href="https://flowbite.com/pro/"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Flowbite Pro
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://tailwindui.com/"
                              rel="nofollow"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Tailwind UI
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right menu */}
            <div className="col-span-3 p-2">
              <div className="text-xl flex flex-row justify-between">
                <div className="flex flex-row">
                  <h1 className="font-bold">Select Tiket</h1>
                  <h1 className="text-sm ms-2 mt-1">(6 flight found)</h1>
                </div>
                <div className="flex flex-row">
                  <div className="font-bold">
                    <h1 className="">Sort by</h1>
                  </div>
                  <div className="ms-2 mt-2">
                    <Image className="w-auto" src={LogoSort} alt="logo-sort" />
                  </div>
                </div>
              </div>
              {/* list  */}
              <div className="flex flex-col bg-white rounded-lg mt-5">
                <div className="p-5">
                  {/* layout merek */}
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <div className="w-20">
                        <Image
                          className="w-auto"
                          src={LogoMaskapai}
                          alt="garuda-indonesia-logo"
                          style={{ width: "100", height: "57" }}
                        />
                      </div>
                      <div className="w-auto ms-10 mt-2">
                        <h1 className="">Garuda Indonesia</h1>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 gap-4 justify-items-start w-full mt-2">
                      <div className="flex flex-row mt-5 mx-auto md:justify-center">
                        <div className="flex-auto mx-auto w-20">
                          <h1 className="font-bold">IDN</h1>
                          <h1 className="text-sm">12:33</h1>
                        </div>
                        <div className="flex-none mx-auto w-20">
                          <Image
                            className="w-auto"
                            src={LogoFlight}
                            alt="logo-flight"
                          />
                        </div>
                        <div className="flex-auto mx-auto w-20">
                          <h1 className="font-bold">JPN</h1>
                          <h1 className="text-sm">12:33</h1>
                        </div>
                      </div>

                      <div className="flex flex-col mx-auto mt-5">
                        <div className="flex-auto mx-auto justify-center">
                          <h1 className="font-sm">3 hours 11 minutes</h1>
                        </div>
                        <div className="flex-auto mx-auto justify-center ">
                          <h1 className="font-bold text-sm text-gray-500">
                            (1 transit)
                          </h1>
                        </div>
                      </div>

                      <div className="flex flex-row mx-auto mt-5">
                        <div className="flex-auto mx-auto justify-center">
                          <Image
                            className="w-auto"
                            src={LogoKoper}
                            alt="logo-koper"
                          />
                        </div>
                        <div className="flex-auto mx-auto justify-center ms-3">
                          <Image
                            className="w-auto"
                            src={LogoFood}
                            alt="logo-food"
                          />
                        </div>
                        <div className="flex-auto mx-auto justify-center ms-3">
                          <Image
                            className="w-auto"
                            src={LogoWifi}
                            alt="logo-wifi"
                          />
                        </div>
                      </div>

                      <div className="flex flex-row mx-auto mt-5">
                        <div className="flex-auto mx-auto justify-center me-2">
                          <h1 className="font-bold text-blue-400">$ 214.00</h1>
                        </div>
                        <div className="flex-auto mx-auto justify-center ">
                          <h1 className="font-bold text-gray-500">/pcs</h1>
                        </div>
                      </div>

                      <div className="flex flex-col mx-auto w-full mt-5">
                        <button
                          className="rounded-lg p-2 text-xl drop-shadow-xl"
                          style={{ backgroundColor: "#2395FF", color: "white" }}
                        >
                          Select
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <select
                        id="countries"
                        className="bg-white-50 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 bg-white p-2.5 text-blue-400 font-bold"
                      >
                        <option selected value="">
                          View Details
                        </option>
                        <option value=""> View Details 2</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* list  */}
              <div className="flex flex-col bg-white rounded-lg mt-5">
                <div className="p-5">
                  {/* layout merek */}
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <div className="w-20">
                        <Image
                          className="w-auto"
                          src={LogoMaskapai}
                          alt="garuda-indonesia-logo"
                          style={{ width: "100", height: "57" }}
                        />
                      </div>
                      <div className="w-auto ms-10 mt-2">
                        <h1 className="">Garuda Indonesia</h1>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 gap-4 justify-items-start w-full mt-2">
                      <div className="flex flex-row mt-5 mx-auto md:justify-center">
                        <div className="flex-auto mx-auto w-20">
                          <h1 className="font-bold">IDN</h1>
                          <h1 className="text-sm">12:33</h1>
                        </div>
                        <div className="flex-none mx-auto w-20">
                          <Image
                            className="w-auto"
                            src={LogoFlight}
                            alt="logo-flight"
                          />
                        </div>
                        <div className="flex-auto mx-auto w-20">
                          <h1 className="font-bold">JPN</h1>
                          <h1 className="text-sm">12:33</h1>
                        </div>
                      </div>

                      <div className="flex flex-col mx-auto mt-5">
                        <div className="flex-auto mx-auto justify-center">
                          <h1 className="font-sm">3 hours 11 minutes</h1>
                        </div>
                        <div className="flex-auto mx-auto justify-center ">
                          <h1 className="font-bold text-sm text-gray-500">
                            (1 transit)
                          </h1>
                        </div>
                      </div>

                      <div className="flex flex-row mx-auto mt-5">
                        <div className="flex-auto mx-auto justify-center">
                          <Image
                            className="w-auto"
                            src={LogoKoper}
                            alt="logo-koper"
                          />
                        </div>
                        <div className="flex-auto mx-auto justify-center ms-3">
                          <Image
                            className="w-auto"
                            src={LogoFood}
                            alt="logo-food"
                          />
                        </div>
                        <div className="flex-auto mx-auto justify-center ms-3">
                          <Image
                            className="w-auto"
                            src={LogoWifi}
                            alt="logo-wifi"
                          />
                        </div>
                      </div>

                      <div className="flex flex-row mx-auto mt-5">
                        <div className="flex-auto mx-auto justify-center me-2">
                          <h1 className="font-bold text-blue-400">$ 214.00</h1>
                        </div>
                        <div className="flex-auto mx-auto justify-center ">
                          <h1 className="font-bold text-gray-500">/pcs</h1>
                        </div>
                      </div>

                      <div className="flex flex-col mx-auto w-full mt-5">
                        <button
                          className="rounded-lg p-2 text-xl drop-shadow-xl"
                          style={{ backgroundColor: "#2395FF", color: "white" }}
                        >
                          Select
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <select
                        id="countries"
                        className="bg-white-50 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 bg-white p-2.5 text-blue-400 font-bold"
                      >
                        <option selected value="">
                          View Details
                        </option>
                        <option value=""> View Details 2</option>
                      </select>
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
