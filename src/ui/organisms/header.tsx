"use client";
import { links } from "@/constants";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/harmonia-logo.png";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (mobileMenuOpen) setMobileMenuOpen(false);

    if (pathname !== links.homePage) {
      router.push(`${links.homePage}#contact`);
    } else {
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${
        pathname !== links.homePage
          ? "bg-black/80 backdrop-blur-md w-full absolute z-10"
          : "bg-black"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={links.homePage} className="-m-1.5 p-1.5">
            <Image alt="logo" priority src={logo} height={65} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            aria-label="otworz menu"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white ${styles.text}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href={links.homePage}
            className={`text-sm font-semibold leading-6 text-white hover:text-yellow-600 transition-all ${styles.text}`}
          >
            Strona główna
          </Link>

          <Link
            href={links.services}
            className={`text-sm font-semibold leading-6 text-white hover:text-yellow-600 transition-all ${styles.text}`}
          >
            Usługi
          </Link>
          <Link
            href={links.contact}
            className={`text-sm font-semibold leading-6 text-white hover:text-yellow-600 transition-all ${styles.text}`}
          >
            Porozmawiajmy
          </Link>
          <Link
            href={links.blog}
            className={`text-sm font-semibold leading-6 text-white hover:text-yellow-600 transition-all ${styles.text}`}
          >
            Blog
          </Link>
          <Link
            href={links.holdDrivingLicence}
            className={`text-sm font-semibold leading-6 text-white hover:text-yellow-600 transition-all ${styles.text}`}
          >
            Zatrzymane prawo jazdy
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span
            onClick={scrollToContact}
            className="text-sm font-semibold leading-6 text-white hover:text-yellow-600 transition-all cursor-pointer"
          >
            Napisz do nas <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-40" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={links.homePage} className="-m-1.5 p-1.5">
              <Image alt="logo" src={logo} height={65} />
            </Link>
            <button
              aria-label="otworz menu"
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-600/10">
              <div className="space-y-2 py-6">
                <Link
                  href={links.homePage}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Strona główna
                </Link>
                <Link
                  href={links.services}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Usługi
                </Link>
                <Link
                  href={links.contact}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Porozmawiajmy
                </Link>
                <Link
                  href={links.blog}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Blog
                </Link>
                <Link
                  href={links.holdDrivingLicence}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Zatrzymane prawo jazdy
                </Link>
              </div>
              <div className="py-6">
                <span
                  onClick={scrollToContact}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-yellow-600"
                >
                  Napisz do nas
                </span>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
