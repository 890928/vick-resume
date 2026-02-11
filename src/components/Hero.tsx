'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { resume } from '@/data/resume';
import type { Locale } from '@/i18n/config';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = resume.typewriterWords;
  const currentWord = words[wordIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWord.length, wordIndex, words.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden" aria-label="Hero">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting line */}
          <div className="text-text-muted text-sm">
            <span className="text-terminal-green">$</span> echo &quot;{t('greeting')}&quot;
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            <span className="text-terminal-green glow-green">{resume.name.en}</span>
            <span className="text-text-muted text-xl sm:text-2xl md:text-3xl ml-3">({resume.name.zh})</span>
          </h1>

          {/* Typewriter */}
          <div className="text-lg sm:text-xl md:text-2xl text-text-secondary flex items-center gap-2" aria-label={currentWord}>
            <span className="text-terminal-green" aria-hidden="true">{'>'}</span>
            <span>{currentWord.slice(0, charIndex)}</span>
            <span className="cursor-blink text-terminal-green" aria-hidden="true">_</span>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-text-muted max-w-lg text-sm md:text-base"
          >
            {resume.subtitle[locale]}
          </motion.p>

          {/* #3: CTA buttons — flex-col on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
          >
            <a
              href="/resume.pdf"
              download
              className="border border-terminal-green text-terminal-green px-5 py-2.5 sm:px-6 sm:py-3 text-sm hover:bg-terminal-green hover:text-background transition-all duration-300 text-center"
              aria-label={t('cta_resume')}
            >
              {'>'} {t('cta_resume')}
            </a>
            <button
              onClick={() => {
                const el = document.querySelector('#projects');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 64;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="border border-card-border text-text-muted px-5 py-2.5 sm:px-6 sm:py-3 text-sm hover:border-terminal-green hover:text-terminal-green transition-all duration-300 text-center"
            >
              {'>'} {t('cta_projects')}
            </button>
          </motion.div>

          {/* #9: ASCII decoration — i18n */}
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 1.2 }}
            className="text-terminal-green text-xs mt-8 hidden md:block select-none"
            aria-hidden="true"
          >
{`╔══════════════════════════════════════╗
║  ${t('ascii_status').padEnd(36)}║
║  ${t('ascii_role').padEnd(36)}║
║  ${t('ascii_stack').padEnd(36)}║
║  ${t('ascii_open').padEnd(36)}║
╚══════════════════════════════════════╝`}
          </motion.pre>
        </motion.div>
      </div>
    </section>
  );
}
