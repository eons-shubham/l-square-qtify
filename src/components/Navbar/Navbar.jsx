import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar({ searchData }) {
  return (
    <nav className={styles.nav}>
      <a href="/">
        <Logo />
      </a>
      <Search
        searchData={searchData}
        placeholder={"Search a album of your choice"}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}
