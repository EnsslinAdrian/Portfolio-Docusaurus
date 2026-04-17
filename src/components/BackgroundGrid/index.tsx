import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './styles.module.css';

export default function BackgroundGrid() {
  const container = useRef<HTMLDivElement>(null);

  const lines = Array.from({ length: 50 });

  useGSAP(() => {
    const hLines = gsap.utils.toArray(`.${styles.hLine}`);
    const vLines = gsap.utils.toArray(`.${styles.vLine}`);

    hLines.forEach((line: any) => {
      const isReverse = Math.random() > 0.5;
      const startX = isReverse ? "120vw" : "-20vw";
      const endX = isReverse ? "-20vw" : "120vw";

      gsap.fromTo(line,
        { x: startX, opacity: 0 },
        {
          x: endX,
          opacity: gsap.utils.random(0.3, 0.7),
          duration: gsap.utils.random(6, 14),
          ease: "none",
          repeat: -1,
          repeatDelay: gsap.utils.random(1, 6),
          delay: gsap.utils.random(-20, 0),
        }
      );
    });

    vLines.forEach((line: any) => {
      const isReverse = Math.random() > 0.5;
      const startY = isReverse ? "120vh" : "-20vh";
      const endY = isReverse ? "-20vh" : "120vh";

      gsap.fromTo(line,
        { y: startY, opacity: 0 },
        {
          y: endY,
          opacity: gsap.utils.random(0.2, 0.6),
          duration: gsap.utils.random(8, 16),
          ease: "none",
          repeat: -1,
          repeatDelay: gsap.utils.random(2, 8),
          delay: gsap.utils.random(-20, 0),
        }
      );
    });
  }, { scope: container });

  return (
    <div ref={container} className={styles.wrapper}>
      <div className={styles.staticGrid} />

      <div className={styles.impulseContainer}>
        {lines.map((_, i) => (
          <div key={`h-${i}`} className={styles.hLine} style={{ top: `${i * 50}px` }} />
        ))}
        {lines.map((_, i) => (
          <div key={`v-${i}`} className={styles.vLine} style={{ left: `${i * 50}px` }} />
        ))}
      </div>
    </div>
  );
}
