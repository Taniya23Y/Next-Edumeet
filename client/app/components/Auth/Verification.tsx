"use client";
import React, { FC, useRef, useState } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { styles } from "../../styles/style";

type Props = {
  setRoute: (route: string) => void;
};

type verifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};
const Verification: FC<Props> = ({ setRoute }) => {
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const inputRef = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<verifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const verificationHandler = async () => {
    setInvalidError(true);
  };
  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRef[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRef[index + 1].current?.focus();
    }
  };
  return (
    <div>
      <h1 className={`${styles.title} text-green-400`}>Verify Your Account</h1>
      <br />
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-[80px] h-[80px] rounded-full bg-yellow flex items-center justify-center">
          <VscWorkspaceTrusted size={40} className="text-white font-bold" />
        </div>
      </div>
      <br />
      <br />
      <div className="m-auto flex items-center justify-center gap-2">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="number"
            key={key}
            ref={inputRef[index]}
            className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex  items-center text-white justify-center text-[20px] font-Poppins outline-none text-center ${
              invalidError ? "shake border-red-500 text-white" : "text-white"
            }`}
            placeholder=""
            maxLength={1}
            value={verifyNumber[key as keyof verifyNumber]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <br />
      <div className="w-full flex justify-center">
        <button
          className={`${styles.btnOnly} flex flex-row justify-center items-center cursor-pointer min-h-[45px] w-full `}
          onClick={verificationHandler}
        >
          Verify OTP
        </button>
      </div>
      <br />
      <br />
      <h5 className="text-center pt-4 font-Poppins text-[14px] text-white">
        Go back to Login ?{" "}
        <span
          className="text-white text-[1rem] font-bold hover:text-yellow pl-1 cursor-pointer"
          onClick={() => setRoute("Login")}
        >
          Login
        </span>
      </h5>
    </div>
  );
};

export default Verification;
