"use client";
import { useState } from "react";
import NftPage from "./NftPage";
import ExchangePage from "./ExchangePage";
import TokonomicsPage from "./TokonomicsPage";
import LaunchpadPage from "./LaunchPadPage";
import MlmPage from "./MlmPage";
import CryptoWalletPage from "./CryptoWalletPage";

type Section =
  | "NftPage"
  | "Exchange"
  | "Tokonomics"
  | "Launchpad"
  | "Mlm"
  | "Cryptowallet";

const Portfolio = () => {
  const [viewNft, setViewNft] = useState(true);
  const [viewExchange, setViewExchange] = useState(false);
  const [viewTokonomics, setViewTokonomics] = useState(false);
  const [viewLaunchpad, setViewLaunchpad] = useState(false);
  const [viewMlm, setViewMlm] = useState(false);
  const [viewCryptoWallet, setViewCryptoWallet] = useState(false);

  const toggleSection = (section: Section) => {
    setViewNft(section === "NftPage");
    setViewExchange(section === "Exchange");
    setViewTokonomics(section === "Tokonomics");
    setViewLaunchpad(section === "Launchpad");
    setViewMlm(section === "Mlm");
    setViewCryptoWallet(section === "Cryptowallet");
  };

  return (
    <div className="w-full flex flex-col items-start px-2 md:px-10 lg:px-12 xl:px-64 pt-20 pb-12 lg:pt-32">
      <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-center ">
        <div>
          <p className="pl-3 lg:pl-0 text-xl md:text-2xl font-bold text-white">
            PORTFOLIO
          </p>
        </div>

        <div className="mt-4 md:mt-2 lg:mt-5 xl:mt-0 ">
          <ul className="flex flex-wrap lg:flex-row space-x-0 lg:space-x-2 xl:space-x-2">
            <li
              className="text-[#ffffff] text-md lg:text-xl font-medium px-4 py-2 md:px-8 md:py-4 rounded-full cursor-pointer hover:bg-green-gradient transition-colors"
              onClick={() => toggleSection("NftPage")}
            >
              NFT
            </li>

            <li
              className="text-[#ffffff] text-lg lg:text-xl font-medium cursor-pointer px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-green-gradient transition-colors"
              onClick={() => toggleSection("Exchange")}
            >
              Exchange
            </li>

            <li
              className="text-[#ffffff] text-md lg:text-xl font-medium cursor-pointer px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-green-gradient transition-colors"
              onClick={() => toggleSection("Tokonomics")}
            >
              Tokonomics
            </li>

            <li
              className="text-[#ffffff] text-md lg:text-xl font-medium cursor-pointer px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-green-gradient transition-colors"
              onClick={() => toggleSection("Launchpad")}
            >
              Launchpad
            </li>

            <li
              className="text-[#ffffff] text-md lg:text-xl font-medium cursor-pointer px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-green-gradient transition-colors"
              onClick={() => toggleSection("Mlm")}
            >
              MLM
            </li>

            <li
              className="text-[#ffffff] text-md lg:text-xl font-medium cursor-pointer px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-green-gradient transition-colors"
              onClick={() => toggleSection("Cryptowallet")}
            >
              Crypto Wallet
            </li>
          </ul>
        </div>
      </div>

      {/* Conditionally render the NftPage component below */}
      {viewNft && (
        <div className="  w-full  bg-[#000000]  ">
          <NftPage />
        </div>
      )}

      {viewExchange && (
        <div className=" w-full  bg-[#000000]  ">
          <ExchangePage />
        </div>
      )}

      {viewTokonomics && (
        <div className=" w-full  bg-[#000000]  ">
          <TokonomicsPage />
        </div>
      )}

      {viewLaunchpad && (
        <div className=" w-full  bg-[#000000]  ">
          <LaunchpadPage />
        </div>
      )}

      {viewMlm && (
        <div className=" w-full  bg-[#000000]  ">
          <MlmPage />
        </div>
      )}

      {viewCryptoWallet && (
        <div className=" w-full  bg-[#000000]  ">
          <CryptoWalletPage />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
