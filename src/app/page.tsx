"use client";

import Image from "next/image";
import React, { FormEvent, useState } from "react";
import DesktopBg from "@/../public/bg-main-desktop.png";
import MobileBg from "@/../public/bg-main-mobile.png";
import FrontCard from "@/../public/bg-card-front.png";
import BackCard from "@/../public/bg-card-back.png";
import CardLogo from "@/../public/card-logo.svg";
import Tick from "@/../public/icon-complete.svg";

export default function HomePage() {
  const [cardHoldername, setCardHolderName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [months, setMonths] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [cvc, setCVC] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);

  const handleConfirm = () => {
    if (
      cardHoldername === "" &&
      cardNumber === "" &&
      months === "" &&
      year === "" &&
      cvc === ""
    ) {
      setConfirm(false);
    } else {
      setConfirm(true);
    }
  };

  return (
    <main className="w-full max-h-screen md:flex relative">
      <div className="sm:w-1/3 max-h-screen">
        {/* desktop bg */}
        <Image
          src={DesktopBg}
          alt="Desktop Background"
          className="hidden md:block h-screen "
        />

        {/* Mobile Bg */}
        <Image
          src={MobileBg}
          alt="Mobile Background"
          className="md:hidden w-screen"
        />
      </div>

      {/* Front of the card */}
      <div className=" absolute z-10 top-40 left-4 xl:top-32 xl:left-32 w-[350px] xl:w-fit">
        <Image src={FrontCard} alt="front side of the card" />
        <Image
          src={CardLogo}
          alt="CardLogo"
          className="absolute top-6 left-6 w-20"
        />
        <p className="absolute xl:top-36 xl:left-6 text-2xl tracking-widest text-white top-28 left-6">
          {cardNumber ? cardNumber : "1234 5678 9123 0000"}
        </p>

        {/* cardHolder name and cvc */}
        <div className="flex justify-between absolute top-[9.5rem] left-6 xl:top-48 xl:left-6 xl:w-[350px] w-[300px]">
          <p className="text-sm text-slate-100 uppercase tracking-wide">
            {cardHoldername ? cardHoldername : "John Doe"}
          </p>
          <p className="text-slate-100 text-sm">
            {months ? months : "00"}/{year ? year : "00"}
          </p>
        </div>
      </div>

      {/* backside of the card  */}
      <div className=" absolute top-8 right-4  xl:top-96 xl:left-44 w-[350px] xl:w-fit">
        <Image src={BackCard} alt="Backside of the card" />
        <span className="absolute text-black z-20 top-[5.1rem] right-11 xl:top-[6.8rem] xl:right-12 w-fit">
          {cvc ? cvc : "123"}
        </span>
      </div>

      {/* form */}
      <div className="md:w-3/4 py-48  md:h-screen bg-white flex items-center justify-center px-2 md:px-0">
        {!confirm && (
          <form
            action=""
            className="flex flex-col gap-4 max-w-sm"
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              handleConfirm();
            }}
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-slate-900 text-sm font-medium mb-2"
              >
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                maxLength={20}
                onChange={(e) => setCardHolderName(e.target.value)}
                placeholder="e.g. John Doe"
                className="py-1 text-black px-2 border border-slate-300 rounded-md"
              />

              {!cardHoldername ? (
                <p className="text-sm font-medium text-red-600">
                  Requierd Field
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="number"
                className="text-slate-900 text-sm font-medium mb-2"
              >
                CARD NUMBER
              </label>
              <input
                type="text"
                maxLength={19}
                value={cardNumber
                  .replace(/\s/g, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="e.g. 1234 5678 9123 0000"
                className="py-1 text-black px-2 border border-slate-300 rounded-md"
              />
              {!cardNumber ? (
                <p className="text-sm font-medium text-red-600">
                  Wrong format, number only
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center gap-2">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="text-slate-900 text-sm font-medium mb-2"
                >
                  EXP. DATE (MM/YY)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    onChange={(e) => setMonths(e.target.value)}
                    placeholder="MM"
                    maxLength={2}
                    className="py-1 text-black px-2 border border-slate-300 rounded-md "
                  />
                  <input
                    type="text"
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="YY"
                    maxLength={2}
                    className="py-1 text-black px-2 border border-slate-300 rounded-md"
                  />

                  {months && year === " " ? (
                    <p className="text-sm font-medium text-red-600">
                      Can't be Blank
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="cvc"
                  className="text-slate-900 text-sm font-medium mb-2"
                >
                  CVC
                </label>
                <input
                  type="text"
                  onChange={(e) => setCVC(e.target.value)}
                  placeholder="e.g. 123"
                  maxLength={3}
                  className="py-1 text-black border border-slate-300 rounded-md px-2"
                />
              </div>
            </div>

            {/* confirmation button */}
            <button
              className="py-2 bg-slate-950 text-white font-medium text-sm rounded-md"
              type="submit"
            >
              Confirm
            </button>
          </form>
        )}

        {confirm && <Thankyou setConfirm={setConfirm} />}
      </div>
    </main>
  );
}

type ThankyouProps = {
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
};

function Thankyou({ setConfirm }: ThankyouProps) {
  return (
    <div className="w-3/4 flex-col  gap-4 md:w-3/4 h-[70vh] md:h-screen bg-white flex items-center justify-center px-2 md:px-0">
      <Image src={Tick} alt="Complete sign" className="mb-5" />
      <p className="text-slate-950 font-semibold">THANK YOU</p>
      <p className="text-sm text-slate-600 font-medium">
        We've added your card details
      </p>
      <button
        onClick={() => setConfirm(false)}
        className="py-2 bg-slate-950 text-white font-medium text-sm rounded-md w-[400px]"
      >
        Confirm
      </button>
    </div>
  );
}
