import React, { useRef } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Aden UI System',
    tech: ['Angular Signals', 'TypeScript', 'SCSS', 'A11y'],
    desc: translate({ id: 'projects.adenui.desc', message: 'A high-end UI system built for maximum performance. Built with the latest Angular Signals for lightning-fast interactions and 100% accessibility.' }),
    image: 'https://aden-software.de/img/showcase/adenui.png',
    link: 'https://adenui.com/'
  },
  {
    title: 'B2B Enterprise E-Commerce',
    tech: ['Django', 'Python', 'Stripe', 'REST API'],
    desc: translate({ id: 'projects.fsgmbh.desc', message: 'A scalable online shop with deep API integration into an existing ERP system. Includes complex permission structures and a fully automated Stripe checkout.' }),
    image: 'https://aden-software.de/img/showcase/fsgmbh.png',
    link: 'https://fs-schleiftechnik.de/'
  },
  {
    title: 'Digital Experience Platform',
    tech: ['Three.js', 'WebGL', 'GSAP', 'TypeScript'],
    desc: translate({ id: 'projects.dxp.desc', message: 'An immersive platform for customer acquisition. Interactive 3D scenes create an emotional user experience that stays in the memory.' }),
    image: '/img/projects/aden-business/hero.png',
    link: 'https://aden-software.de/'
  },
  {
    title: 'DevSecOps Portfolio',
    tech: ['React', 'GSAP', 'Docusaurus'],
    desc: translate({ id: 'projects.portfolio.desc', message: 'My personal business card. A showcase for high-performance UI design, smooth GSAP animations and uncompromising technical architecture under the hood.' }),
    image: 'https://aden-software.de/img/showcase/portfolio.png',
    link: 'https://adrianensslin.de/'
  }
];

export default function Projects(): React.ReactNode {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rows = gsap.utils.toArray(`.${styles.projectRow}`);

    rows.forEach((row: any, i) => {
      const imgCol = row.querySelector(`.${styles.imageCol}`);
      const textCol = row.querySelector(`.${styles.textCol}`);
      const isEven = i % 2 !== 0;

      gsap.fromTo(imgCol,
        { opacity: 0, x: isEven ? 60 : -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(textCol,
        { opacity: 0, x: isEven ? -60 : 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          }
        }
      );
    });

  }, { scope: container });

  return (
    <section ref={container} className={styles.projectSection}>
      <div className={`container ${styles.customContainer}`}>

        <div className={styles.headerArea}>
          <div className={styles.sectionBadge}>~/case_studies</div>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="projects.title.prefix">Selected</Translate>{' '}
            <span className="gradient-text">
              <Translate id="projects.title.highlight">Projects</Translate>
            </span>
          </Heading>
          <p className={styles.sectionSubtitle}>
            <Translate id="projects.subtitle">
              A selection of my work. From scalable backend systems to high-performance, interactive frontends.
            </Translate>
          </p>
        </div>

        <div className={styles.projectList}>
          {projects.map((p, i) => (
            <div key={i} className={`${styles.projectRow} ${i % 2 !== 0 ? styles.rowReverse : ''}`}>

              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <img src={p.image} alt={p.title} className={styles.projectImg} />
                  <div className={styles.imageOverlay}>
                    <Link className="button button--primary button--lg" to={p.link} target="_blank">
                      <Translate id="projects.btn.casestudy">View Case Study</Translate>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.textCol}>
                <div className={styles.glassPanel}>

                  <div className={styles.cardHeader}>
                    <span className={styles.projectNumber}>0{i + 1} //</span>
                    <Heading as="h3">{p.title}</Heading>
                  </div>

                  <p className={styles.projectDesc}>{p.desc}</p>

                  <div className={styles.techTags}>
                    {p.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
