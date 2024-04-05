"use client";

import React, { useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import { BackgroundColor } from "@/context/AppContext";
import CloseIcon from "@/../public/Close.svg";
import MenuIcon from "@/../public/Menu.svg";
import Image from "next/image";
import cx from "classnames";
import AnimatedText from "../AnimatedText/AnimatedText";

type Props = {
  isMobileClient: boolean;
  setBackgroundColor: React.Dispatch<React.SetStateAction<BackgroundColor>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav: React.FC<Props> = ({
  isMobileClient,
  setOpen,
  setBackgroundColor,
}: Props) => {
  const [active, setActive] = useState(false);

  if (isMobileClient) {
    return (
      <div className={styles["nav"]}>
        <button className={styles["mobile-nav-button"]}>
          {active ? (
            <Image
              src={CloseIcon}
              alt={"menu"}
              width={50}
              height={50}
              onClick={() => setActive(false)}
            />
          ) : (
            <Image
              src={MenuIcon}
              alt={"menu"}
              width={50}
              height={50}
              onClick={() => {
                setActive(true);
              }}
            />
          )}
        </button>
        <ul
          className={cx(styles["nav-list"], { [styles["is-active"]]: active })}
        >
          {links.map((link: CustomLink, i: number) => (
            <li
              key={`${i}-${link.title.en}`}
              className={styles["nav-link-wrapper"]}
            >
              <Link
                href={link.href}
                onClick={() => {
                  setBackgroundColor(link.backgroundColor);
                  setOpen(link.setOpen);
                  setActive(false);
                }}
                className={styles["nav-link"]}
              >
                {link.title.fr}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles["nav"]}>
      <button className={styles["mobile-nav-button"]}>
        <Image src={MenuIcon} alt={"menu"} width={50} height={50} />
      </button>
      <ul className={styles["nav-list"]}>
        {links.map((link: CustomLink, i: number) => (
          <li
            key={`${i}-${link.title.en}`}
            className={styles["nav-link-wrapper"]}
          >
            <Link
              href={link.href}
              onClick={() => {
                setBackgroundColor(link.backgroundColor);
                setOpen(link.setOpen);
              }}
              className={styles["nav-link"]}
            >
              <AnimatedText
                text={link.title.fr}
                height={20}
                customTextStyle={{
                  color: "var(--white)",
                  fontSize: "var(--fts-sm)",
                  fontWeight: 300,
                }}
                duration={0.3}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;

const links: CustomLink[] = [
  {
    title: { en: "Home", fr: "Accueil" },
    href: "/",
    setOpen: false,
    backgroundColor: "transparent",
  },
  {
    title: { en: "About", fr: "A propos" },
    href: "/about",
    setOpen: true,
    backgroundColor: "var(--white)",
  },
  {
    title: { en: "Projects", fr: "Projets" },
    href: "/projects",
    setOpen: true,
    backgroundColor: "var(--white)",
  },
  {
    title: { en: "Contact", fr: "Contact" },
    href: "/contact",
    setOpen: true,
    backgroundColor: "var(--white)",
  },
];

export interface CustomLink {
  setOpen: boolean;
  title: { en: string; fr: string };
  href: string;
  backgroundColor: BackgroundColor;
}
