import React, { useRef } from 'react';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: translate({ id: 'expertise.pillar1.title', message: 'Frontend & 3D' }),
    desc: translate({ id: 'expertise.pillar1.desc', message: 'Building modern interfaces with Angular and TypeScript. Integrating interactive 3D worlds with Three.js and Blender.' }),
  },
  {
    title: translate({ id: 'expertise.pillar2.title', message: 'Backend & Data' }),
    desc: translate({ id: 'expertise.pillar2.desc', message: 'Robust logic with Django and Python. Scalable data management with PostgreSQL and high-speed caching via Redis.' }),
  },
  {
    title: translate({ id: 'expertise.pillar3.title', message: 'Security & DevOps' }),
    desc: translate({ id: 'expertise.pillar3.desc', message: 'Automation with Shell & CI/CD. Secure container architecture with Docker and proactive hardening following OWASP.' }),
  },
];

const techStack = [
  { name: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
  { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS/SCSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
  { name: 'Three.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg', invert: true },
  { name: 'Blender', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg', invert: true },
  { name: 'GSAP', icon: '✨' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Django', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', invert: true },
  { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Redis', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Linux', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  { name: 'Shell Script', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', invert: true },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Git/GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
  { name: 'CI/CD', icon: '🔄' },
  { name: 'YAML', icon: '📝' },
  { name: 'Cloud', icon: '☁️' },
  { name: 'IT Security', icon: '🛡️' },
];

export default function Expertise(): React.ReactNode {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    tl.fromTo(".gsap-header",
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    )
    .fromTo(".gsap-card",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(".gsap-tech",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, stagger: 0.04, ease: "back.out(2)" },
      "-=0.4"
    );

  }, { scope: container });

  return (
    <section ref={container} className={styles.expertiseSection}>
      <div className={`container ${styles.customContainer}`}>

        <div className={styles.headerArea}>
          <div className={`gsap-header ${styles.sectionBadge}`}>~/skills_and_tech</div>
          <Heading as="h2" className={`gsap-header ${styles.sectionTitle}`}>
            <Translate id="expertise.title.prefix">My</Translate>{' '}
            <span className="gradient-text">
              <Translate id="expertise.title.highlight">Expertise</Translate>
            </span>
          </Heading>
          <p className={`gsap-header ${styles.sectionSubtitle}`}>
            <Translate id="expertise.subtitle">
              I don't build isolated fragments — I build complete systems. From the interactive UI to the hardened infrastructure.
            </Translate>
          </p>
        </div>

        <div className="row margin-bottom--xl">
          {pillars.map((s, i) => (
            <div key={i} className="col col--4 margin-bottom--lg">
              <div className={`gsap-card ${styles.glassCard}`}>
                <Heading as="h3">{s.title}</Heading>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.techWrapper}>
          <Heading as="h4" className={`gsap-header ${styles.techTitle}`}>
            Core Technologies & Tools
          </Heading>

          <div className={styles.techCloud}>
            {techStack.map((tech, i) => (
              <div key={i} className={`gsap-tech ${styles.techPill}`}>
                {tech.img ? (
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className={`${styles.techIcon} ${tech.invert ? styles.invertInDarkMode : ''}`}
                  />
                ) : (
                  <span className={styles.techEmoji}>{tech.icon}</span>
                )}
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
