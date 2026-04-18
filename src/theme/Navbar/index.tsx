import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const LOCALE_LABELS: Record<string, string> = { en: 'English', de: 'Deutsch' };
const MOBILE_BREAKPOINT = 997;

function getLocaleHref(locale: string, currentLocale: string, pathname: string): string {
  if (locale === 'en') {
    return pathname.replace(/^\/de(\/|$)/, '/') || '/';
  }
  if (currentLocale === 'en') {
    return `/${locale}${pathname}`;
  }
  return `/${locale}${pathname.replace(/^\/[a-z]{2}/, '')}`;
}

function LocaleDropdown({ currentLocale, locales, pathname }: {
  currentLocale: string;
  locales: readonly string[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className={styles.localeDropdown} ref={ref}>
      <button
        className={`${styles.iconBtn} ${styles.localeBtn}`}
        onClick={() => setOpen(v => !v)}
        aria-label="Switch language"
      >
        <GlobeIcon />
        <span>{currentLocale.toUpperCase()}</span>
        <ChevronDown />
      </button>
      {open && (
        <div className={styles.localeMenu}>
          {locales.map(locale => (
            <button
              key={locale}
              className={`${styles.localeOption} ${locale === currentLocale ? styles.localeOptionActive : ''}`}
              onClick={() => {
                setOpen(false);
                window.location.href = getLocaleHref(locale, currentLocale, pathname);
              }}
            >
              {LOCALE_LABELS[locale] ?? locale}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar(): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  const { colorMode, setColorMode } = useColorMode();
  const location = useLocation();
  const { i18n } = useDocusaurusContext();
  const locales = i18n.locales;
  const currentLocale = i18n.currentLocale;

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close on route change
  useEffect(() => { closeMenu(); }, [location.pathname]);

  // Close when resizing to desktop
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const handler = (e: MediaQueryListEvent) => { if (e.matches) closeMenu(); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [closeMenu]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: translate({ id: 'navbar.home', message: 'Home' }), to: '/' },
    { label: translate({ id: 'navbar.projects', message: 'Projects' }), to: '/docs/intro' },
    { label: translate({ id: 'navbar.blog', message: 'Blog' }), to: '/blog' },
  ];

  const isActive = (to: string) => {
    const path = location.pathname;
    if (to === '/') return path === '/' || path === '/de' || path === '/de/';
    return path.startsWith(to) || path.startsWith(`/de${to}`);
  };

  return (
    <>
      <nav className={`navbar ${styles.navbar}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.brand} onClick={closeMenu}>
            <img src="/img/a-logo.svg" alt="Logo" className={styles.logo} />
            <span className={styles.brandName}>Adrian Enßlin</span>
          </Link>

          <div className={styles.desktopLinks}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`${styles.navLink} ${isActive(link.to) ? styles.navLinkActive : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/EnsslinAdrian"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              <GithubIcon />
            </a>
            <LocaleDropdown currentLocale={currentLocale} locales={locales} pathname={location.pathname} />
            <button
              className={styles.iconBtn}
              onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle color mode"
            >
              {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          <div className={styles.mobileRight}>
            <button
              className={styles.iconBtn}
              onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle color mode"
            >
              {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className={styles.iconBtn} onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.mobileLink} ${isActive(link.to) ? styles.mobileLinkActive : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/EnsslinAdrian"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileLink}
            onClick={closeMenu}
          >
            GitHub
          </a>
          <div className={styles.mobileDivider} />
          <div className={styles.mobileLangSection}>
            {locales.map(locale => (
              <button
                key={locale}
                className={`${styles.mobileLangOption} ${locale === currentLocale ? styles.mobileLangOptionActive : ''}`}
                onClick={() => {
                  closeMenu();
                  window.location.href = getLocaleHref(locale, currentLocale, location.pathname);
                }}
              >
                {LOCALE_LABELS[locale] ?? locale}
              </button>
            ))}
          </div>
        </div>
      )}

      {menuOpen && <div className={styles.backdrop} onClick={closeMenu} />}
    </>
  );
}
