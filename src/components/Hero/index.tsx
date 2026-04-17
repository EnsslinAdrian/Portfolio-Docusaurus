import React, { useRef } from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import styles from './styles.module.css';

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const roles = [
      "Fullstack Developer.",
      "DevSecOps Engineer.",
      "Angular & Python Pro.",
      "System Architect."
    ];

    const tl = gsap.timeline({ repeat: -1 });

    roles.forEach((role) => {
      tl.to(typeRef.current, {
        duration: 1.2,
        text: role,
        ease: "none",
      })
      .to({}, { duration: 2.5 })
      .to(typeRef.current, {
        duration: 0.6,
        text: "",
        ease: "none",
      });
    });

    gsap.from(".fade-in-element", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

  }, { scope: container });

  return (
    <header ref={container} className={styles.hero}>
      <div className={`container ${styles.heroContainer} ${styles.customContainer}`}>

        <div className={styles.leftCol}>

          <div className={`fade-in-element ${styles.welcomeBadge}`}>
            <span className={styles.emoji}>👋</span>{' '}
            <Translate id="hero.welcome.badge">Welcome to my Portfolio</Translate>
          </div>

          <h1 className={`fade-in-element ${styles.title}`}>
            <Translate id="hero.title">I am</Translate>{' '}
            <span className="gradient-text">Adrian</span>
          </h1>

          <div className={`fade-in-element ${styles.typewriterWrapper}`}>
            <span ref={typeRef} className={styles.typewriterText}></span>
            <span className={styles.cursor}>_</span>
          </div>

          <p className={`fade-in-element ${styles.subtitle}`}>
            <Translate
              id="hero.subtitle"
              values={{
                angular: <b>Angular</b>,
                threejs: <b>Three.js</b>,
                django: <b>Django</b>,
                devsecops: <b>DevSecOps</b>,
              }}>
              {'I build modern and secure web applications. My tech stack ranges from interactive frontends with {angular} and {threejs} to robust {django} backends. Automation and {devsecops} are not an afterthought for me — they are the foundation of my work.'}
            </Translate>
          </p>

          <div className={`fade-in-element ${styles.buttonsGroup}`}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              <Translate id="hero.btn.projects">View Projects</Translate>
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="https://github.com/EnsslinAdrian">
              <Translate id="hero.btn.github">My GitHub</Translate>
            </Link>
          </div>
        </div>

        <div className={`fade-in-element ${styles.rightCol}`}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <img
              src="/img/Portrait2u3-4.jpg"
              alt={translate({ id: 'hero.img.alt', message: 'Adrian Software Engineer' })}
              className={styles.profileImg}
            />
            <div className={styles.floatingBadge}>
              <span className={styles.dot}></span> DevSecOps
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
