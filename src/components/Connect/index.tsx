import React, { useRef } from 'react';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    title: translate({ id: 'connect.email.title', message: 'Send an Email' }),
    subtitle: translate({ id: 'connect.email.subtitle', message: "Let's connect directly" }),
    url: 'mailto:ensslin.adrian@web.de',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  {
    title: translate({ id: 'connect.github.title', message: 'GitHub Profile' }),
    subtitle: translate({ id: 'connect.github.subtitle', message: 'My Code & Open Source' }),
    url: 'https://github.com/EnsslinAdrian',
    target: '_blank',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    )
  },
  {
    title: 'LinkedIn',
    subtitle: translate({ id: 'connect.linkedin.subtitle', message: 'Professional Network' }),
    url: 'https://www.linkedin.com/in/adrian-en%C3%9Flin-b5574b315/',
    target: '_blank',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  },
  {
    title: translate({ id: 'connect.cv.title', message: 'Resume (CV)' }),
    subtitle: translate({ id: 'connect.cv.subtitle', message: 'Download as PDF' }),
    url: '/Lebenslauf.pdf',
    download: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  }
];

export default function Connect(): React.ReactNode {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    tl.fromTo(".gsap-connect-text",
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    )
    .fromTo(".gsap-connect-link",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );
  }, { scope: container });

  return (
    <section ref={container} className={styles.connectSection}>
      <div className={`container ${styles.customContainer}`}>
        <div className="row">

          <div className="col col--6">
            <div className={styles.textColumn}>
              <div className={`gsap-connect-text ${styles.sectionBadge}`}>~/contact</div>
              <Heading as="h2" className={`gsap-connect-text ${styles.sectionTitle}`}>
                <Translate id="connect.title.prefix">Let's</Translate>{' '}
                <span className="gradient-text">
                  <Translate id="connect.title.highlight">connect</Translate>
                </span>
              </Heading>

              <div className={`gsap-connect-text ${styles.statusWrapper}`}>
                <span className={styles.statusDot}></span>
                <span className={styles.statusText}>
                  <Translate id="connect.status">Available for new challenges</Translate>
                </span>
              </div>

              <p className={`gsap-connect-text ${styles.sectionSubtitle}`}>
                <Translate id="connect.subtitle">
                  Whether it's a technical deep-dive, an exciting new project or simply a conversation about architecture and code — I look forward to hearing from you.
                </Translate>
              </p>
            </div>
          </div>

          <div className="col col--6">
            <div className={styles.linksColumn}>
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target={link.target}
                  download={link.download}
                  className={`gsap-connect-link ${styles.contactRow}`}
                >
                  <div className={styles.iconWrapper}>
                    {link.icon}
                  </div>
                  <div className={styles.linkContent}>
                    <span className={styles.linkTitle}>{link.title}</span>
                    <span className={styles.linkSubtitle}>{link.subtitle}</span>
                  </div>
                  <div className={styles.arrowWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
