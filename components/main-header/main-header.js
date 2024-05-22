import Link from "next/link";
import React from "react";
import logoImage from "@/assets/logo.png";
import cartImage from "@/assets/cart.png";

import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
export default function Header(props) {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImage} priority /> NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li className={classes.cart}>
              <Image src={cartImage} priority />
              <span className={classes.cartCount}>0</span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
