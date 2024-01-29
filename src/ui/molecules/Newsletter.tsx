"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { NewsletterIcon } from "../icons/icons";

const Newsletter = () => {
  const [mail, setMail] = useState("");

  const handleChangeInput = (e: any) => {
    setMail(e.target.value);
  };

  const handleSubmitNewsletter = () => {};

  return (
    <div className="flex mt-4">
      <Input
        placeholder="adamkowalski@gmail.com"
        onChange={handleChangeInput}
        value={mail}
        type="email"
        className="bg-transparent text-white  m-0 border  border-yellow-600 border-r-0 rounded-none"
      />
      <button className="bg-gradient-to-r from-yellow-900 to-yellow-600 border border-l-0 border-yellow-600 text-white h-10 w-10 px-2">
        <NewsletterIcon />
      </button>
    </div>
  );
};

export default Newsletter;
