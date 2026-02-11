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
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,255,65,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Radial glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terminal-green/[0.03] rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Status line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 text-sm"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
            <span className="text-text-muted">
              <span className="text-terminal-green">$</span> echo &quot;{t('greeting')}&quot;
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">{resume.name.en}</span>
            <br className="sm:hidden" />
            <span className="text-text-muted text-lg sm:text-2xl md:text-3xl ml-0 sm:ml-4">
              {resume.name.zh}
            </span>
          </h1>

          {/* Typewriter */}
          <div className="text-lg sm:text-xl md:text-2xl text-text-secondary flex items-center gap-2" aria-label={currentWord}>
            <span className="text-cyan" aria-hidden="true">{'~/'}</span>
            <span className="text-foreground">{currentWord.slice(0, charIndex)}</span>
            <span className="cursor-blink text-terminal-green text-3xl leading-none" aria-hidden="true">|</span>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-text-muted max-w-xl text-sm md:text-base leading-relaxed"
          >
            {resume.subtitle[locale]}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
          >
            <a
              href="/resume.pdf"
              download
              className="btn-glow border border-terminal-green text-terminal-green px-6 py-3 text-sm hover:bg-terminal-green hover:text-background transition-all duration-300 text-center rounded"
              aria-label={t('cta_resume')}
            >
              <span className="relative z-10">{'>'} {t('cta_resume')}</span>
            </a>
            <button
              onClick={() => {
                const el = document.querySelector('#projects');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 64;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="border border-card-border text-text-muted px-6 py-3 text-sm hover:border-cyan hover:text-cyan transition-all duration-300 text-center rounded"
            >
              {'>'} {t('cta_projects')}
            </button>
          </motion.div>

          {/* ASCII decoration */}
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            transition={{ delay: 1.2 }}
            className="text-terminal-green text-[10px] sm:text-xs mt-12 hidden md:block select-none font-normal"
            aria-hidden="true"
          >
{(() => {
              const lines = [t('ascii_status'), t('ascii_role'), t('ascii_stack'), t('ascii_open')];
              const boxWidth = 38;
              const pad = (s: string) => {
                // Count CJK characters as width 2
                let w = 0;
                for (const ch of s) w += ch.charCodeAt(0) > 0x7f ? 2 : 1;
                const remaining = boxWidth - 2 - w;
                return s + ' '.repeat(Math.max(0, remaining));
              };
              return [
                '╔' + '═'.repeat(boxWidth) + '╗',
                ...lines.map((l) => `║  ${pad(l)}║`),
                '╚' + '═'.repeat(boxWidth) + '╝',
              ].join('\n');
            })()}
          </motion.pre>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
}
