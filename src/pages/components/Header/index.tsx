import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import styles from "./styles.module.scss";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    setChecked(savedLanguage === "english");
  }, []);

  useEffect(() => {
    const language = checked ? "english" : "portuguese";
    localStorage.setItem('language', language);

    const event = new Event('languageChanged');
    window.dispatchEvent(event);
  }, [checked]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollY / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.logoContent}>
          <p className={styles.logoText}>{"<Batista.dev/>"}</p>
        </div>

        <div className={styles.navMenu}>
          {checked ? (
            <>
              <Link to="home" spy={true} smooth={true} className={styles.navItem} activeClass={styles.active}>Home</Link>
              <Link to="about" spy={true} smooth={true} className={styles.navItem} activeClass={styles.active}>About</Link>
              <Link to="services" spy={true} smooth={true} className={styles.navItem} activeClass={styles.active}>Services</Link>
              <Link to="portfolio" spy={true} smooth={true} className={styles.navItem} activeClass={styles.active}>Portfolio</Link>
              <Link to="contact" spy={true} smooth={true} className={styles.navItem} activeClass={styles.active}>Contact</Link>
            </>
          ) : (
            <>
              <Link to="home" spy={true} smooth={true} className={styles.navItem} activeClass={styles.active}>Início</Link>
              <Link to="about" spy={true} smooth={true} className={styles.navItem} activeClass={styles.active}>Sobre</Link>
              <Link to="services" spy={true} smooth={true} className={styles.navItem} activeClass={styles.active}>Serviços</Link>
              <Link to="portfolio" spy={true} smooth={true} className={styles.navItem} activeClass={styles.active}>Portfólio</Link>
              <Link to="contact" spy={true} smooth={true} className={styles.navItem} activeClass={styles.active}>Contato</Link>
            </>
          )}
        </div>


        <div className={styles.languageSelector}>

          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={checked}
              onChange={e => setChecked(e.target.checked)}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>

        </div>

      </header>
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      >
        <div className={styles.progressIndicator}></div>
      </div>
    </>
  );
}
