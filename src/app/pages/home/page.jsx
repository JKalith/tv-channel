"use client";

import styles from "../../css/home.module.css";
import Radio from "../../components/radio/radio";
import FeaturedNews from "@/app/components/featuredNews/featuredNews";
export default function Home() {
  return (
    <div className={styles.containerMain}>
      <section className={styles.topSection}>
        <div className={styles.topContainer}>
          <div className={styles.infoContainer}>
            <div>
              <p className={styles.titleHome}>SAN VITO TELEVISIÓN</p>
              <p className={styles.subtitleHome}>El canal de Coto Brus</p>
            </div>
          </div>

          <div className={styles.logoContainer}>
            <img src="/logo/logoSTV.svg" alt="logo" className={styles.logo} />
          </div>
        </div>
        <div className={styles.sloganContainer}>
          <div>
            <p className={styles.slogan}>
              Vive la experiencia, vive la información
            </p>
            <div className={styles.lineSlogan}> </div>
          </div>
        </div>
      </section>

      <section className={styles.newsSection}>
        <div className={styles.banner}>
          <p className={styles.titleBanner}>Top tendencias </p>
        </div>



<div>

<FeaturedNews/>             


  
</div>



      </section>

      <section id="" className={styles.aboutUsSection}>
        <div className={styles.banner}>
          <p className={styles.titleBanner}>Quienes Somos</p>
        </div>
      </section>

      <section className={styles.mediaSection}>
        <p className={styles.titleMedia}>Nuestros medios de comunicacion</p>
        <div className={styles.lineMedia}></div>

        <div className={styles.mediaContainer}>
          <div className={styles.radioContainer}>
            <Radio />
          </div>

          <div className={styles.socialContainer}></div>
        </div>
      </section>

      <section className={styles.formSection}>
        <p className={styles.titleMedia}>Contactenos</p>
        <div className={styles.lineContact}></div>
      </section>
    </div>
  );
}
