import styles from "../../css/navBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.containerNav}>
      <div className={styles.logoContainer}>
        <img src="/logo/logoSTV.svg" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.labelContainer}>
        <label htmlFor="" className={styles.label}>
          {" "}
          Tendencias
          <span className={styles.lineLabel}></span>
        </label>
        <label htmlFor="" className={styles.label}>
          {" "}
          Quienes Somos
          <span className={styles.lineLabel}></span>
        </label>

        <label htmlFor="" className={styles.label}>
          Multimedia
          <span className={styles.lineLabel}></span>
        </label>

        <label htmlFor="" className={styles.label}>
          Contacto
          <span className={styles.lineLabel}></span>
        </label>
      </div>
    </div>
  );
}
