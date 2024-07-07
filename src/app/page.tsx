"use client";

import Image from "next/image";
import React, { useState } from "react";
import DesktopBg from "@/../public/bg-main-desktop.png";
import FrontCard from "@/../public/bg-card-front.png";
import BackCard from "@/../public/bg-card-back.png";
import CardLogo from "@/../public/card-logo.svg";
export default function HomePage() {
  const [cardHoldername, setCardHolderName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [months, setMonths] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [cvc, setCVC] = useState<string>("");

  return (
    <main className="w-full max-h-screen flex relative">
      <div className=" w-1/3 max-h-screen ">
        <Image src={DesktopBg} alt="Desktop Background" className="h-screen" />
      </div>
      <div className="absolute top-32  left-32">
        <Image src={FrontCard} alt="front side of the card" />

        {/* <Image src={CardLogo} alt="CardLogo" className="top-32" /> */}
      </div>

      <div className="absolute  top-96  left-44">
        <Image src={BackCard} alt="Backside of the card" />
      </div>

      <div className="w-3/4 h-screen bg-white flex items-center justify-center ">
        <form action="" className="flex flex-col gap-4 max-w-sm">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-slate-900 text-sm font-medium mb-2"
            >
              CARDHOLDER NAME
            </label>
            <input
              type="text"
              onChange={(e) => setCardHolderName(e.target.value)}
              placeholder="e.g. John Doe"
              className="py-1 text-black px-2 border border-slate-300 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="number"
              className="text-slate-900 text-sm font-medium mb-2"
            >
              CARD NUMBER
            </label>
            <input
              type="number"
              maxLength={19}
              value={cardNumber
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="e.g. 1234 5678 9123 0000"
              className="py-1 text-black px-2 border border-slate-300 rounded-md"
            />
          </div>

          <div className="flex items-center gap-4 mb-5">
            <div>
              <label
                htmlFor="expiryDate"
                className="text-slate-900 text-sm font-medium mb-2"
              >
                EXP. DATE (MM/YY)
              </label>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  onChange={(e) => setMonths(e.target.value)}
                  placeholder="MM"
                  maxLength={2}
                  className="py-1 text-black px-2 border border-slate-300 rounded-md"
                />
                <input
                  type="number"
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="YY"
                  maxLength={4}
                  className="py-1 text-black px-2 border border-slate-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="expiryDate"
                className="text-slate-900 text-sm font-medium mb-2"
              >
                CVC
              </label>

              <input
                type="number"
                onChange={(e) => setCVC(e.target.value)}
                placeholder="e.g. 123"
                maxLength={3}
                className="py-1 text-black px-2 border border-slate-300 rounded-md"
              />
            </div>
          </div>

          <button className="py-2 bg-slate-950 text-white font-medium text-sm rounded-md">
            Confirm
          </button>
        </form>
      </div>
    </main>
  );
}
