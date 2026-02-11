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

  const toggleLocale = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh';
    router.push(`/${newLocale}`);
  };

  // #2: scroll with offset for fixed navbar
  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md" role="navigation" aria-label="Main navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="text-terminal-green font-bold text-lg glow-green" aria-label="Home">
          {'>'} vick.liao
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.href)}
              className="text-text-muted hover:text-terminal-green transition-colors text-sm"
            >
              {t(item.key)}
            </button>
          ))}
          <button
            onClick={toggleLocale}
            className="border border-terminal-green text-terminal-green px-3 py-1 text-xs hover:bg-terminal-green hover:text-background transition-colors"
            aria-label={locale === 'zh' ? 'Switch to English' : '切換為中文'}
          >
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-terminal-green"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-card-border bg-background/95 backdrop-blur-md px-4 py-4 flex flex-col gap-3">
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
            className="border border-terminal-green text-terminal-green px-3 py-1 text-xs hover:bg-terminal-green hover:text-background transition-colors w-fit"
          >
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      )}
    </nav>
  );
}
