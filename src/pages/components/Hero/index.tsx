import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

import Typed from 'typed.js';




export default function Hero() {

  const [language, setLanguage] = useState('portuguese');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    function handleLanguageChange() {
      setLanguage(localStorage.getItem('language') || 'portuguese');
    }

    window.addEventListener('languageChanged', handleLanguageChange);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
    }
  }, []);

  const el = useRef(null);

  useEffect(() => {
    const style = `
    color: #808080;
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-top: 0.4rem;
  `;

    const strings = language === 'english'
      ? [
        `Hi, I'm João Pedro Batista <br /> <span style="${style}">Full Stack Developer</span>`
      ]
      : [
        `Olá, eu sou João Pedro Batista <br /> <span style="${style}">Desenvolvedor Full Stack</span>`
      ];


    const options = {
      strings: strings,
      typeSpeed: 40,
      backSpeed: 25,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
      loop: false,
      onComplete: function (self: { cursor: { remove: () => void; }; }) {
        self.cursor.remove();
      }
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, [language]);

  return (
    <>

      <div className={styles.Container} id="home">
        <div className={styles.leftContent}>

          <p className={styles.headlineName}>
            <span ref={el}></span>
          </p>


          {language === 'english' ? (
            <>
              <p className={styles.headlineDescription}>I am a Full-Stack developer specialized in Next.Js, React.Js, and Node.Js. With over 3 years of experience, I have honed skills in PHP and Python and also led CRM projects for management and systems with Deep Learning for the creation of React templates. Additionally, I stand out as a UI/UX designer. In total, I have developed more than 30 websites, always focusing on delivering a quality product.</p>
            </>
          ) : (
            <>
              <p className={styles.headlineDescription}>Sou um desenvolvedor Full-Stack especializado em Next.Js, React.Js e Node.Js. Com mais 3 anos de experiência, cultivei habilidades como PHP e Python e também liderei projetos de CRM para gestão e sistemas com Deep Learning para criação de templates React, também me destaco como designer UI/UX. Ao todo, são mais de 30 sites desenvolvidos, sempre com o foco em entregar um produto de qualidade.</p>
            </>
          )}

          <div>

            {language === 'english' ? (
              <>
                <button className={styles.Cta}>Hire-me</button>
              </>
            ) : (
              <>
                <button className={styles.Cta}>Contrate-me</button>
              </>
            )}

            {language === 'english' ? (
              <>
                <button className={styles.CtaCV}>Dowload CV</button>
              </>
            ) : (
              <>
                <button className={styles.CtaCV}>Baixar CV</button>
              </>
            )}
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.social}>
            <div className={styles.line}></div>

            <a href="https://github.com/JoaoPedroBatistaa">
              <svg className={styles.socialItem} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.9064 2.42691C29.7323 1.25288 28.3197 0.666664 26.6667 0.666664H6.66653C5.01359 0.666664 3.60091 1.25288 2.42687 2.42691C1.25284 3.60094 0.666626 5.01363 0.666626 6.66656V26.6668C0.666626 28.3197 1.25284 29.7324 2.42687 30.9064C3.60091 32.0804 5.01359 32.6667 6.66653 32.6667H11.3338C11.6381 32.6667 11.8672 32.6555 12.0209 32.6346C12.1998 32.5988 12.3613 32.5034 12.479 32.3639C12.6312 32.2038 12.7081 31.9715 12.7081 31.6672L12.6969 30.2497C12.6905 29.3464 12.6872 28.632 12.6872 28.1035L12.2067 28.1868C11.9024 28.2428 11.518 28.2668 11.0519 28.2604C10.5661 28.2515 10.0819 28.2027 9.60401 28.1147C9.09532 28.0208 8.61646 27.8066 8.20734 27.49C7.77888 27.1659 7.45931 26.7189 7.29118 26.2087L7.08296 25.7282C6.90746 25.3491 6.68698 24.9926 6.42627 24.6663C6.12836 24.2771 5.82564 24.0144 5.51972 23.875L5.37557 23.7709C5.27505 23.6989 5.18363 23.615 5.10328 23.5211C5.02655 23.4338 4.96338 23.3356 4.91589 23.2296C4.87424 23.1319 4.90948 23.0518 5.02 22.9893C5.13211 22.9252 5.33232 22.8948 5.62543 22.8948L6.04187 22.9589C6.31896 23.0133 6.66332 23.1799 7.07175 23.457C7.48508 23.7388 7.83035 24.1092 8.08241 24.5413C8.40275 25.1099 8.78715 25.544 9.23883 25.8435C9.6905 26.1414 10.1454 26.292 10.6035 26.292C11.0615 26.292 11.4572 26.2567 11.7919 26.1879C12.1156 26.1209 12.4302 26.0155 12.7289 25.8739C12.8538 24.945 13.1934 24.2274 13.7492 23.7277C13.029 23.6571 12.3153 23.5318 11.6141 23.3529C10.9299 23.1649 10.2718 22.8921 9.65526 22.5408C9.01018 22.1896 8.4404 21.7151 7.9783 21.1442C7.53464 20.5884 7.16945 19.8596 6.88435 18.9579C6.60086 18.0545 6.45831 17.0118 6.45831 15.8314C6.45831 14.1512 7.00608 12.7209 8.10323 11.5389C7.5907 10.2768 7.63875 8.85927 8.24899 7.29122C8.65261 7.16469 9.25004 7.25919 10.0413 7.57151C10.8325 7.88384 11.4123 8.15132 11.7807 8.37235C12.1491 8.59659 12.4438 8.78399 12.6664 8.93615C13.9686 8.57377 15.3142 8.39162 16.6658 8.39478C18.0417 8.39478 19.3743 8.57577 20.6668 8.93615L21.4581 8.43642C22.0667 8.071 22.7086 7.76424 23.3753 7.52026C24.112 7.24157 24.6726 7.16629 25.0634 7.29122C25.6881 8.86087 25.7426 10.2768 25.2284 11.5405C26.3256 12.7209 26.8749 14.1512 26.8749 15.833C26.8749 17.0134 26.7324 18.0593 26.4473 18.9675C26.1638 19.8772 25.7954 20.606 25.3437 21.1554C24.8735 21.719 24.3013 22.189 23.6572 22.5408C22.9845 22.9156 22.331 23.1863 21.6983 23.3529C20.9972 23.5324 20.2835 23.6582 19.5633 23.7293C20.284 24.3539 20.646 25.339 20.646 26.686V31.6672C20.646 31.9027 20.6796 32.0933 20.7501 32.239C20.7825 32.3092 20.8287 32.3722 20.8859 32.4242C20.9432 32.4762 21.0103 32.5162 21.0833 32.5417C21.237 32.5962 21.3716 32.6314 21.4901 32.6442C21.6086 32.6603 21.7784 32.6651 21.9994 32.6651H26.6667C28.3197 32.6651 29.7323 32.0788 30.9064 30.9048C32.0788 29.7324 32.6666 28.3181 32.6666 26.6652V6.66656C32.6666 5.01363 32.0804 3.60094 30.9064 2.42691Z" fill="" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-batista-b92a0821b/">
              <svg className={styles.socialItem} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_14_9)">
                  <path d="M0 2.292C0 1.026 1.052 0 2.35 0H29.65C30.948 0 32 1.026 32 2.292V29.708C32 30.974 30.948 32 29.65 32H2.35C1.052 32 0 30.974 0 29.708V2.292ZM9.886 26.788V12.338H5.084V26.788H9.886ZM7.486 10.364C9.16 10.364 10.202 9.256 10.202 7.868C10.172 6.45 9.162 5.372 7.518 5.372C5.874 5.372 4.8 6.452 4.8 7.868C4.8 9.256 5.842 10.364 7.454 10.364H7.486ZM17.302 26.788V18.718C17.302 18.286 17.334 17.854 17.462 17.546C17.808 16.684 18.598 15.79 19.926 15.79C21.664 15.79 22.358 17.114 22.358 19.058V26.788H27.16V18.5C27.16 14.06 24.792 11.996 21.632 11.996C19.084 11.996 17.942 13.396 17.302 14.382V14.432H17.27C17.2806 14.4153 17.2913 14.3986 17.302 14.382V12.338H12.502C12.562 13.694 12.502 26.788 12.502 26.788H17.302Z" fill="" />
                </g>
                <defs>
                  <clipPath id="clip0_14_9">
                    <rect width="32" height="32" fill="" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="https://instagram.com/jpbatista.s?igshid=OGQ5ZDc2ODk2ZA==">
              <svg className={styles.socialItem} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_14_15)">
                  <path d="M16 10.6667C14.5855 10.6667 13.2289 11.2286 12.2287 12.2288C11.2285 13.229 10.6666 14.5855 10.6666 16C10.6666 17.4145 11.2285 18.771 12.2287 19.7712C13.2289 20.7714 14.5855 21.3333 16 21.3333C17.4144 21.3333 18.771 20.7714 19.7712 19.7712C20.7714 18.771 21.3333 17.4145 21.3333 16C21.3333 14.5855 20.7714 13.229 19.7712 12.2288C18.771 11.2286 17.4144 10.6667 16 10.6667Z" fill="" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6 0C7.05392 0 4.61212 1.01143 2.81178 2.81178C1.01143 4.61212 0 7.05392 0 9.6L0 22.4C0 24.9461 1.01143 27.3879 2.81178 29.1882C4.61212 30.9886 7.05392 32 9.6 32H22.4C24.9461 32 27.3879 30.9886 29.1882 29.1882C30.9886 27.3879 32 24.9461 32 22.4V9.6C32 7.05392 30.9886 4.61212 29.1882 2.81178C27.3879 1.01143 24.9461 0 22.4 0L9.6 0ZM8.53333 16C8.53333 14.0197 9.32 12.1205 10.7203 10.7203C12.1205 9.32 14.0197 8.53333 16 8.53333C17.9803 8.53333 19.8795 9.32 21.2797 10.7203C22.68 12.1205 23.4667 14.0197 23.4667 16C23.4667 17.9803 22.68 19.8795 21.2797 21.2797C19.8795 22.68 17.9803 23.4667 16 23.4667C14.0197 23.4667 12.1205 22.68 10.7203 21.2797C9.32 19.8795 8.53333 17.9803 8.53333 16ZM23.4667 8.53333H25.6V6.4H23.4667V8.53333Z" fill="" />
                </g>
                <defs>
                  <clipPath id="clip0_14_15">
                    <rect width="32" height="32" fill="" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="mailto:joaopbatistastos@gmail.com">
              <svg className={styles.socialItem} width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99996 0H26C26.3536 0 26.6927 0.140476 26.9428 0.390524C27.1928 0.640573 27.3333 0.979711 27.3333 1.33333V22.6667C27.3333 23.0203 27.1928 23.3594 26.9428 23.6095C26.6927 23.8595 26.3536 24 26 24H1.99996C1.64634 24 1.3072 23.8595 1.05715 23.6095C0.807102 23.3594 0.666626 23.0203 0.666626 22.6667V1.33333C0.666626 0.979711 0.807102 0.640573 1.05715 0.390524C1.3072 0.140476 1.64634 0 1.99996 0ZM14.08 11.5773L5.53063 4.31733L3.80396 6.34933L14.0973 15.0893L24.2053 6.34267L22.4613 4.32533L14.08 11.5773Z" fill="" />
              </svg>
            </a>






            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    </>
  )

}