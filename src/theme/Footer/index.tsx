import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function Footer(): React.ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>

        <div className={styles.topRow}>

          <div className={styles.brand}>
            <span className={styles.brandName}>
              Adrian <span className="gradient-text">Enßlin</span>
            </span>
            <p className={styles.brandTagline}>
              <Translate id="footer.tagline">
                Fullstack Developer · DevSecOps Engineer · System Architect
              </Translate>
            </p>
          </div>

          <nav className={styles.navLinks}>
            <Link to="/docs/intro" className={styles.navLink}>
              <Translate id="footer.nav.projects">Projects</Translate>
            </Link>
            <Link to="/blog" className={styles.navLink}>Blog</Link>
            <a href="mailto:ensslin.adrian@web.de" className={styles.navLink}>
              <Translate id="footer.nav.contact">Contact</Translate>
            </a>
            <a href="https://github.com/EnsslinAdrian" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/adrian-en%C3%9Flin-b5574b315/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              LinkedIn
            </a>
          </nav>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomRow}>
          <span className={styles.copyright}>
            <Translate
              id="footer.copyright"
              values={{ year: new Date().getFullYear() }}>
              {'© {year} Adrian Enßlin — All rights reserved.'}
            </Translate>
          </span>
          <span className={styles.builtWith}>
            <Translate id="footer.builtWith">Built with</Translate>{' '}
            <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer" className={styles.builtWithLink}>
              Docusaurus
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
