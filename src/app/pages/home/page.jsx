import styles from "../../css/home.module.css";

export default function Home() {
  return (
    <div className={styles.containerMain}>
      <section className={styles.topSection}></section>

      <section className={styles.newsSection}>
        <div className={styles.banner}>
          <p className={styles.titleBanner}>Top tendencias </p>
        </div>
      </section>

      <section className={styles.aboutUsSection}>
        <div className={styles.banner}>
          <p className={styles.titleBanner}>Quienes Somos</p>
        </div>
      </section>

      <section className={styles.mediaSection}>
        <p className={styles.titleMedia}>Nuestros medios de comunicacion</p>
        <div className={styles.lineMedia}></div>
      </section>

      <section className={styles.formSection}>

      <p className={styles.titleMedia}>Contactenos</p>
      <div className={styles.lineContact}></div>


      </section>
    </div>
  );
}
