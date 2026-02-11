'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const toggleLocale = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh';
    router.push(`/${newLocale}`);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Scroll spy + shrink nav on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['about', 'experience', 'projects', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-card-border bg-background/90 backdrop-blur-lg py-0'
          : 'border-transparent bg-transparent py-1'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="text-terminal-green font-bold text-lg glow-green" aria-label="Home">
          <span className="text-text-muted">{'>'}</span> vick<span className="text-cyan">.liao</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.href)}
              className={`px-3 py-1.5 text-sm transition-all duration-200 rounded ${
                activeSection === item.key.replace('#', '')
                  ? 'text-terminal-green bg-terminal-green/8'
                  : 'text-text-muted hover:text-foreground'
              }`}
            >
              {activeSection === item.key.replace('#', '') && (
                <span className="text-terminal-green mr-1">{'>'}</span>
              )}
              {t(item.key)}
            </button>
          ))}
          <div className="w-px h-4 bg-card-border mx-2" />
          <button
            onClick={toggleLocale}
            className="border border-terminal-green/50 text-terminal-green px-3 py-1 text-xs hover:bg-terminal-green hover:text-background transition-all duration-200 rounded"
            aria-label={locale === 'zh' ? 'Switch to English' : '切換為中文'}
          >
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
        </div>

        <button
          className="md:hidden text-terminal-green"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-card-border bg-background/95 backdrop-blur-lg px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.href)}
              className="text-text-muted hover:text-terminal-green transition-colors text-sm text-left"
            >
              {t(item.key)}
            </button>
          ))}
          <button
            onClick={toggleLocale}
            className="border border-terminal-green/50 text-terminal-green px-3 py-1 text-xs hover:bg-terminal-green hover:text-background transition-colors w-fit rounded"
          >
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      )}
    </nav>
  );
}
