import { links } from "@/constants";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="flex gap-3">
      <Link href={links.homePage}>Strona główna</Link>
      <Link href={links.about}>O nas</Link>
      <Link href={links.contact}>Kontakt</Link>
      <Link href={links.blog}>Blog</Link>
    </nav>
  );
};

export default Navigation;
