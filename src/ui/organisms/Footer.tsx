import React from "react";
import styles from "./footer.module.css";
import {
  ChevronIcon,
  FacebookIcon,
  InstaIcon,
  MessageIcon,
} from "../icons/icons";
import Link from "next/link";
import { links } from "@/constants";
import Newsletter from "../molecules/Newsletter";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col">
      <div className="max-w-7xl px-4 mx-auto py-12 w-full text-white flex flex-col lg:flex-row">
        <div className=" lg:basis-1/4 py-4">
          <div>LOGO</div>
          <div className="">
            <a
              href="mailto:example@example.com"
              className="flex items-center gap-2 mt-2 w-fit"
            >
              <MessageIcon />
              <span className="hover:underline transition-all">
                example@example.com
              </span>
            </a>
            <a
              className="flex items-center gap-2 mt-2 w-fit"
              href="#"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon />
              <span className="hover:underline transition-all duration-300">
                /harmoniaconsult
              </span>
            </a>
          </div>
        </div>
        <div className="flex-grow py-4">
          <p className="text-2xl p-0 font-bold pb-2">Nawigacja</p>
          <nav>
            <ul className="flex flex-col lg:flex-row">
              <div>
                <li className="py-2">
                  <Link
                    className="hover:text-yellow-600 transition-all flex items-center"
                    href={links.services}
                  >
                    <ChevronIcon /> Usługi
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="hover:text-yellow-600 transition-all flex items-center"
                    href={links.contact}
                  >
                    <ChevronIcon /> Kontakt
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="hover:text-yellow-600 transition-all flex items-center"
                    href={links.blog}
                  >
                    <ChevronIcon /> Blog
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="hover:text-yellow-600 transition-all flex items-center"
                    href={links.holdDrivingLicence}
                  >
                    <ChevronIcon /> Zatrzymane prawo jazdy
                  </Link>
                </li>
              </div>
              <div className="lg:ml-8">
                <li className="py-2">
                  <Link
                    className="hover:text-yellow-600 transition-all flex items-center"
                    href={links.privacyPolicy}
                  >
                    <ChevronIcon /> Polityka prywatności
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="hover:text-yellow-600 transition-all flex items-center"
                    href={links.terms}
                  >
                    <ChevronIcon /> Regulamin
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
        <div className="flex-grow py-4">
          <p className="text-2xl font-bold">Newsletter</p>
          <p className="mt-4">Zapisz się aby być na bierząco</p>
          <Newsletter />
        </div>
      </div>
      <div className="text-white text-sm mx-auto py-4 border-t border-yellow-500 w-full justify-center items-cente">
        <span className="flex justify-center pb-2">
          &copy; 2024 Wszelkie prawa zastrzeżone
        </span>
        <span className="flex items-center justify-center">
          Strona stworzona przez:{" "}
          <a
            href="https://web-nova.pl"
            className={`${styles.author} flex items-center ml-2`}
            rel="noreferrer"
            target="_blank"
          >
            <MessageIcon />
            <span>Web-nova</span>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
