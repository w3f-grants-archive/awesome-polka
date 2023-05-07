import type { ReactElement } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import UserLayout from "../../layouts/UserLayout";

export default function Learn() {
  return (
    <>
      <Head>
        <title>Learn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="relative container mx-auto scroll-smooth max-w-8xl px-6 md:px-0">
        <div className="px-8 sm:px-10 md:px-16 lg:px-14 py-14 mb-8 md:mb-16 bg-indigo-200 border-4 border-indigo-900 shadow-md rounded-2xl relative overflow-hidden">
          <Image
            src="/banner-right.svg"
            alt="Bg"
            width={500}
            height={500}
            className="absolute top-0 md:h-full right-0 w-1/2 lg:w-1/3 opacity-60"
          />
          <Image
            src="/banner-left.svg"
            alt="Bg"
            width={500}
            height={500}
            className="absolute top-0 md:h-full left-0 w-1/2 lg:w-1/3 opacity-60"
          />
          <div className="container px-4 relative">
            <div className="max-w-6xl mx-auto">
              <span className="text-md md:text-lg text-left font-extrabold text-indigo-500">
                AWESOME
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold font-heading mt-4 mb-8 text-black leading-[45px]">
                Learning Resources
              </h1>
              <p className="text-lg md:text-xl font-semibold leading-7 border-t-4 border-indigo-900 pt-6 max-w-lg">
                Core concepts and tools you will need to get started building on
                Polkadot
              </p>
              <div className="max-w-2xl mx-auto"></div>
            </div>
          </div>
        </div>
        <div className="container mb-16">
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <Link href="https://wiki.polkadot.network/" target="blank">
                <div className="flex cursor-pointer gap-6 rounded-lg bg-indigo-200/40 py-10 pl-10 pr-7 text-gray-700 hover:bg-indigo-300/50 border-[3px] border-indigo-700">
                  <div className="flex min-w-0 grow flex-col items-start justify-start">
                    <div className="mb-3 text-primary-gray-100">
                      <Image
                        src="/home-sports.svg"
                        alt="home-sports-icon"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mb-3 truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Learn
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100 py-2">
                      All the resources you need to learn and build.
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center focus:ring-gray-600 bg-[#00bf63] border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
                      >
                        <Image
                          src="/arrow-right.svg"
                          alt="arrow-right"
                          width={16}
                          height={16}
                          className="mr-2 text-white"
                        />
                        Learn Polkadot
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/projects" target="blank">
                <div className="flex cursor-pointer gap-6 rounded-lg bg-indigo-200/40 py-10 pl-10 pr-7 text-gray-700 hover:bg-indigo-300/50 border-[3px] border-indigo-700">
                  <div className="flex min-w-0 grow flex-col items-start justify-start">
                    <div className="mb-3 text-primary-gray-100">
                      <Image
                        src="/home-collectibles.svg"
                        alt="home-collectibles-icon"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mb-3 truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Tools
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100 py-2">
                      Curated list of developer tools, services, SDKs.
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center focus:ring-gray-600 bg-[#5271ff] border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
                      >
                        <Image
                          src="/arrow-right.svg"
                          alt="arrow-right"
                          width={16}
                          height={16}
                          className="mr-2 text-white"
                        />
                        Explore Tools
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="https://guide.kusama.network/" target="blank">
                <div className="flex cursor-pointer gap-6 rounded-lg bg-indigo-200/40 py-10 pl-10 pr-7 text-gray-700 hover:bg-indigo-300/50 border-[3px] border-indigo-700">
                  <div className="flex min-w-0 grow flex-col items-start justify-start">
                    <div className="mb-3 text-primary-gray-100">
                      <Image
                        src="/home-marketplaces.svg"
                        alt="home-marketplaces-icon"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mb-3 truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Kusama
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100 py-2">
                      Learn about Kusama - Polkadot Canary Network
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center focus:ring-gray-600 bg-[#ff914d] border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
                      >
                        <Image
                          src="/arrow-right.svg"
                          alt="arrow-right"
                          width={16}
                          height={16}
                          className="mr-2 text-white"
                        />
                        Explore Kusama
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container mb-16">
          <div className="grid grid-cols-1 pb-8 bg-indigo-800 rounded-lg gap-x-4 bg-gray-dark md:grid-cols-3 md:flex-row md:px-10">
            <div className="px-8 pt-12 md:row-start-1 row-start-1 grid-column-start-1">
              <h6 className="text-h6 mb-2 flex items-center text-white text-lg font-bold tracking-wider">
                <span className="mr-2 max-w-[36px] text-gray-300">
                  <svg
                    viewBox="0 0 38 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path
                      d="M15.543 22.478v-3.62l3.456-1.943 3.456 1.942v3.621l-3.456 1.943-3.456-1.943Z"
                      stroke="currentColor"
                      stroke-width="0.5"
                    ></path>
                    <path
                      d="M16 22v-2.5l2.5 1.5v2.5L16 22Z"
                      fill="currentColor"
                      stroke="currentColor"
                    ></path>
                    <path
                      d="m11.677 16.691 7.273-4.25 7.372 4.251v8.265l-7.372 4.175-7.273-4.174v-8.267Z"
                      stroke="currentColor"
                      stroke-width="0.5"
                    ></path>
                    <path
                      d="M8.227 14.667 19 8.601l10.773 6.066v11.967L19 32.65 8.227 26.634V14.667ZM11.589 16.62l-3.384-1.945M26.396 16.628l3.479-1.998M19 29.186v3.49M33.18 12.731l3.706-2.129M4.82 12.731l-3.705-2.129"
                      stroke="currentColor"
                      stroke-width="0.5"
                    ></path>
                    <path
                      d="M4.878 12.776 19 4.764l14.122 8.012v16.017L19 36.805 4.878 28.793V12.776Z"
                      stroke="currentColor"
                      stroke-width="0.5"
                    ></path>
                    <path
                      d="M1.25 10.63 19 .29l17.75 10.34v20.403L19 41.28 1.25 31.033V10.629Z"
                      stroke="currentColor"
                      stroke-width="0.5"
                    ></path>
                  </svg>
                </span>
                Quickstarts
              </h6>
            </div>
            <div className="px-8 pt-12 md:row-start-1 row-start-3 grid-column-start-2">
              <h6 className="text-h6 mb-1 flex items-center text-white text-lg font-bold tracking-wider">
                <span className="mr-2 max-w-[36px] text-gray-300">
                  <svg
                    viewBox="0 0 33 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m1.027 27.904 15.69 8.823 14.903-8.604L32.818 9.56 16.837.238.945 9.413l.082 18.49ZM9.521 5.112 1.788 9.576l6.164 3.596 7.828-4.52-6.26-3.54Zm.566-.327L16.835.89 23 4.484l-6.653 3.841-6.26-3.54Zm6.829 3.862 6.643-3.836 8.405 4.903-6.513 3.76-8.535-4.827Zm8.814 5.317 6.48-3.742-.631 9.795-6.088 3.515.24-9.568Zm-.81 9.898.239-9.568-7.962 4.596-.108 9.443.044.024 7.787-4.495Zm.555.33 6.06-3.5-.457 7.093-5.776 3.335.173-6.928Zm-.745 7.258.173-6.928-7.765 4.483-.056-.032-.079 6.938 7.727-4.46Zm.155-17.649-8.536-4.827-7.837 4.525 8.405 4.902 7.968-4.6Zm-16.58.229 8.328 4.857-.104 9.135-8.182-4.542-.042-9.45Zm.045 10.096 8.172 4.537-.082 7.261-8.058-4.53-.032-7.268Zm-.532 6.95-.032-7.264-6.23-3.457.033 7.218 6.229 3.503ZM1.554 19.709l6.229 3.458L7.74 13.7l-6.229-3.633.043 9.642Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                Guides &amp; Tutorials
              </h6>
            </div>
            <div className="px-8 pt-12 md:row-start-1 row-start-5 grid-column-start-3">
              <h6 className="text-h6 mb-1 flex items-center text-white text-lg font-bold tracking-wider">
                <span className="mr-2 max-w-[36px] text-gray-300">
                  <svg
                    viewBox="0 0 36 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path
                      d="M0 9.643 18 20.25V40.5L0 30.214V9.643Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M18.5 39.638V20.536l17-10.018v19.406l-17 9.714ZM34.98 9.664 18 19.67 1.02 9.664 18 .567l16.98 9.097Z"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </span>
                Smart Contracts
              </h6>
            </div>
            <div className="divide-y divide-gray-100 px-4 md:row-start-2 md:pb-4 row-start-2">
              <div className="divided-item-hover">
                <a
                  href="https://wiki.polkadot.network/docs/getting-started"
                  target="blank"
                  rel="noreferrer"
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      Getting Started
                      <div>
                        <div className="pr-[3px] pt-[2px]">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.825a.9.9 0 0 0 0 1.8h5.102l-8.688 8.688a.9.9 0 1 0 1.272 1.273l8.863-8.863v5.452a.9.9 0 1 0 1.8 0v-7.45a.9.9 0 0 0-.9-.9H10Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #overview
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <div className="divided-item-hover">
                <a
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                  href="https://wiki.polkadot.network/docs/learn-parachains"
                  target="blank"
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      Parachains
                      <div>
                        <svg
                          width="25"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m9.208 18 6-6-6-6"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #xcm
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <div className="divided-item-hover">
                <a
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                  href="https://wiki.polkadot.network/docs/learn-staking"
                  target="blank"
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      Staking
                      <div>
                        <svg
                          width="25"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m9.208 18 6-6-6-6"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #PoS
                      </span>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #NPoS
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <div className="divided-item-hover">
                <Link
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                  href="/projects"
                  target="blank"
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      View all tools and services
                      <div>
                        <svg
                          width="25"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m9.208 18 6-6-6-6"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div></div>
                  </span>
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-100 px-4 divide-gray-400 md:row-start-2 md:pb-4 row-start-4">
              <div className="divided-item-hover">
                <a
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                  href="https://wiki.polkadot.network/docs/learn-account-generation"
                  target="blank"
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      Creating an Account
                      <div>
                        <svg
                          width="25"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m9.208 18 6-6-6-6"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #account
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <div className="divided-item-hover">
                <a
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                  href="https://wiki.polkadot.network/docs/learn-balance-transfers"
                  target="blank"
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      Balance Transfers
                      <div>
                        <svg
                          width="25"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m9.208 18 6-6-6-6"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #transactions
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <div className="divided-item-hover">
                <a
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                  href="https://wiki.polkadot.network/docs/learn-treasury#creating-the-proposal"
                  target="blank"
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      Make Proposals
                      <div>
                        <svg
                          width="25"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m9.208 18 6-6-6-6"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #governance
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <div className="divided-item-hover">
                <a
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                  href="https://wiki.polkadot.network/"
                  target="blank"
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      View more learning resources
                      <div>
                        <svg
                          width="25"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m9.208 18 6-6-6-6"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div></div>
                  </span>
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-100 px-4 divide-gray-400 md:row-start-2 md:pb-4 row-start-6">
              <div className="divided-item-hover">
                <a
                  href="https://wiki.polkadot.network/docs/build-smart-contracts#building-a-smart-contract"
                  target="blank"
                  rel="noreferrer"
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      Building a Smart Contract
                      <div>
                        <div className="pr-[3px] pt-[2px]">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.825a.9.9 0 0 0 0 1.8h5.102l-8.688 8.688a.9.9 0 1 0 1.272 1.273l8.863-8.863v5.452a.9.9 0 1 0 1.8 0v-7.45a.9.9 0 0 0-.9-.9H10Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #substrate
                      </span>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #pallet
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <div className="divided-item-hover">
                <a
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                  href="https://wiki.polkadot.network/docs/build-smart-contracts#parachains"
                  target="blank"
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      Parachains
                      <div>
                        <svg
                          width="25"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m9.208 18 6-6-6-6"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #moonbeam
                      </span>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #astar
                      </span>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #acala
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <div className="divided-item-hover">
                <a
                  href="https://wiki.polkadot.network/docs/faq"
                  target="blank"
                  rel="noreferrer"
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      Frequently Asked Questions
                      <div>
                        <div className="pr-[3px] pt-[2px]">
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.825a.9.9 0 0 0 0 1.8h5.102l-8.688 8.688a.9.9 0 1 0 1.272 1.273l8.863-8.863v5.452a.9.9 0 1 0 1.8 0v-7.45a.9.9 0 0 0-.9-.9H10Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="mr-2 rounded bg-gray-50 px-1 py-1 font-mono text-xs ">
                        #faq
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <div className="divided-item-hover">
                <a
                  className=" link-card-3-column-link group flex flex-col rounded-lg px-4 text-sm hover:bg-indigo-600 "
                  href="https://wiki.polkadot.network/docs/build-smart-contracts"
                  target="blank"
                >
                  <span className="display-block py-4">
                    <div className="flex justify-between text-[15px] text-white mb-1 tracking-wide">
                      View all Smart Contracts
                      <div>
                        <svg
                          width="25"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m9.208 18 6-6-6-6"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div></div>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Learn.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
