"use client";
import React, { useContext } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";

type Props = {};

const Nav: React.FC<Props> = ({}: Props) => {
  const { setOpen } = useContext(AppContext);

  return (
    <div className={styles["nav"]}>
      <ul className={styles["nav-list"]}>
        {links.map((link: CustomLink, i: number) => (
          <li
            key={`${i}-${link.title.en}`}
            className={styles["nav-link-wrapper"]}
          >
            <Link
              href={link.href}
              onClick={() => setOpen(link.setOpen)}
              className={styles["nav-link"]}
            >
              {link.title.fr}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;

const links = [
  {
    title: { en: "Home", fr: "Accueil" },
    href: "/",
    setOpen: false,
  },
  {
    title: { en: "About", fr: "A propos" },
    href: "/about",
    setOpen: true,
  },
  {
    title: { en: "Projects", fr: "Projets" },
    href: "/projects",
    setOpen: true,
  },
  {
    title: { en: "Contact", fr: "Contact" },
    href: "/contact",
    setOpen: true,
  },
];

export interface CustomLink {
  setOpen: boolean;
  title: { en: string; fr: string };
  href: string;
}
