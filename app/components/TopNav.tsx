import React from "react";
import styles from "./TopNav.module.css";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className={styles.nav_box}>
      <nav className={styles.nav}>
        <h1>Bandage</h1>
        <ul className={styles.nav_list}>
          <li className={styles.nav_li}>Home</li>
          <li className={styles.nav_li}>Shop</li>
          <li className={styles.nav_li}>About</li>
          <li className={styles.nav_li}>Blog</li>
          <li className={styles.nav_li}>Contact</li>
          <li className={styles.nav_li}>Pages</li>
        </ul>

        <ul className={styles.nav_links}>
          <li className={styles.nav_li}>
            <Link href="">login / Register</Link>
          </li>
          <li className={styles.nav_li}>
            <Link href="">cart</Link>
          </li>
          <li className={styles.nav_li}>
            <Link href="">Liked</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;
