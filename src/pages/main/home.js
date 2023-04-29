import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="mx-auto bg-white">
      <div className="flex flex-col h-screen bg-white">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="max-w-full flex flex-col w-full bg-white">
          {/* navbar */}
          <Navbar />
          <div className="w-full h-48 bg-sky-400 opacity-20 ..."></div>
          <div className="-mt-8 grid grid-cols-3 gap-4 p-4 mr-10 ms-10">
            <div className="col-span-1 bg-teal-400 p-2 md:block">
              <div className="text-xl flex flex-row justify-between">
                <h1 className="font-bold">Filter</h1>
                <h1 className="text-sky-500 font-bold">Reset</h1>
              </div>
              <div className="">
                {/* <button
                  id="dropdownBgHoverButton"
                  data-dropdown-toggle="dropdownBgHover"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Dropdown checkbox
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownBgHover"
                  className="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700"
                >
                  <ul
                    className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownBgHoverButton"
                  >
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input
                          id="checkbox-item-4"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          id="checkbox-item-4"
                          className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          Default checkbox
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input
                          id="checkbox-item-5"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          id="checkbox-item-5"
                          className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          Checked state
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input
                          id="checkbox-item-6"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          id="checkbox-item-6"
                          className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          Default checkbox
                        </label>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-span-2 bg-teal-400 p-2  md:block">
              <div className="text-xl flex flex-row justify-between">
                <div className="flex flex-row">
                  <h1 className="font-bold">Select Tiket</h1>
                  <h1 className="">(6 flight found)</h1>
                </div>
                <div className="flex flex-row">
                  <h1 className="">Sort by</h1>
                  <h1 className="">Sort by</h1>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
