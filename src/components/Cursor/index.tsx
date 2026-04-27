import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './styles.module.css';

export default function Cursor() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    gsap.set(glow, { opacity: 0 });

    const moveX = gsap.quickTo(glow, 'x', { duration: 0.6, ease: 'power2.out' });
    const moveY = gsap.quickTo(glow, 'y', { duration: 0.6, ease: 'power2.out' });

    let firstMove = true;

    const onMove = (e: MouseEvent) => {
      if (firstMove) {
        gsap.set(glow, { x: e.clientX, y: e.clientY, opacity: 1 });
        firstMove = false;
        return;
      }
      moveX(e.clientX);
      moveY(e.clientY);
    };

    const onLeave  = () => gsap.to(glow, { opacity: 0, duration: 0.4 });
    const onEnter  = () => gsap.to(glow, { opacity: 1, duration: 0.4 });

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return <div ref={glowRef} className={styles.glow} />;
}
