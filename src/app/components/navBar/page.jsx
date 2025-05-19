'use client';


import styles from "../../css/navBar.module.css";
import { useState } from "react";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.containerNav}>
      <div className={styles.logoContainer}>
        <img src="/logo/logoSTV.svg" alt="logo" className={styles.logo} />
        {/* Botón hamburguesa solo visible en móvil */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span className={styles.menuIcon} />
        </button>
      </div>

      <div
        className={`${styles.labelContainer} ${
          menuOpen ? styles.menuOpen : ""
        }`}
      >
        <label className={styles.label}>
          Tendencias
          <span className={styles.lineLabel}></span>
        </label>
        <label className={styles.label}>
          Quienes Somos
          <span className={styles.lineLabel}></span>
        </label>
        <label className={styles.label}>
          Multimedia
          <span className={styles.lineLabel}></span>
        </label>
        <label className={styles.label}>
          Contacto
          <span className={styles.lineLabel}></span>
        </label>
      </div>
    </div>
  );
}