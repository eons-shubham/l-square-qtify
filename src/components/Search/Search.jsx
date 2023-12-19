import React from "react";
import { ReactComponent as SearchIcon } from "../../assests/search_icon.svg";
import styles from "./Search.module.css";

export default function Search({ searchData, placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input className={styles.search} placeholder={placeholder} required />
      <button className={styles.submit} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
