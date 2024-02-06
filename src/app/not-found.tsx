import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconSVG from "../assets/not-found.svg";

const NotFoundPage = () => {
  return (
    <div className="pb-20 pt-40 mx-auto max-w-7xl flex justify-center items-center flex-col">
      <Image src={IconSVG} alt="Not found svg" width={500} height={500} />
      <Link
        href={links.homePage}
        className="bg-gradient-to-r from-yellow-900 to-yellow-600 text-white font-semibold py-3 px-6 rounded-md mt-8 shadow-md max-w-60"
      >
        Wróć na stronę główną
      </Link>
    </div>
  );
};

export default NotFoundPage;
