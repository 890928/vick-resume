'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { resume } from '@/data/resume';
import type { Locale } from '@/i18n/config';

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale() as Locale;
  const [activeFile, setActiveFile] = useState('quickclick');

  const activeExp = resume.experience.find((e) => e.id === activeFile) ?? resume.experience[0];

  return (
    <section id="experience" className="py-24 px-4" aria-label={t('title')}>
      <div className="max-w-6xl mx-auto">
        <div className="section-line mb-16" />

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold gradient-text mb-10"
        >
          {t('title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-card-border rounded-lg overflow-hidden bg-card-bg glow-green-box"
        >
          {/* IDE title bar */}
          <div className="bg-terminal-bg border-b border-card-border px-4 py-2.5 flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-text-muted text-xs ml-2">
              {activeExp.filename}
            </span>
            <span className="text-text-muted/40 text-xs ml-auto hidden sm:block">
              TypeScript
            </span>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* File tree sidebar */}
            <div className="md:w-56 border-b md:border-b-0 md:border-r border-card-border p-3 bg-terminal-bg/50" role="tablist" aria-label="Experience files">
              <div className="text-text-muted text-xs mb-2 uppercase tracking-wider">
                {t('explorer')}
              </div>
              <div className="text-text-muted text-xs mb-1" aria-hidden="true">
                <span className="text-terminal-green">{'▾'}</span> {t('folder')}
              </div>
              {resume.experience.map((exp) => (
                <button
                  key={exp.id}
                  role="tab"
                  aria-selected={activeFile === exp.id}
                  onClick={() => setActiveFile(exp.id)}
                  className={`w-full text-left pl-4 py-1.5 text-xs transition-all duration-200 flex items-center gap-1.5 rounded ${
                    activeFile === exp.id
                      ? 'text-terminal-green bg-terminal-green/10 border-l-2 border-terminal-green'
                      : 'text-text-muted hover:text-text-secondary hover:bg-card-border/30'
                  }`}
                >
                  <span className="text-yellow-500/70" aria-hidden="true">{'TS'}</span>
                  {exp.filename}
                </button>
              ))}
            </div>

            {/* Code content area */}
            <div className="flex-1 p-5 md:p-6 min-h-[300px]" role="tabpanel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFile}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1 text-sm"
                >
                  {/* Line numbers + code */}
                  <div className="text-text-muted">
                    <span className="text-purple">{'interface'}</span>{' '}
                    <span className="text-yellow-300">Experience</span> {'{'}
                  </div>

                  <div className="pl-4">
                    <span className="text-cyan">company</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-orange-300">&quot;{activeExp.company[locale]}&quot;</span>
                    <span className="text-text-muted">;</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-cyan">title</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-orange-300">&quot;{activeExp.title[locale]}&quot;</span>
                    <span className="text-text-muted">;</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-cyan">period</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-orange-300">&quot;{activeExp.period[locale]}&quot;</span>
                    <span className="text-text-muted">;</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-cyan">stack</span>
                    <span className="text-text-muted">: [</span>
                    {activeExp.tags.map((tag, i) => (
                      <span key={tag}>
                        <span className="text-terminal-green">&quot;{tag}&quot;</span>
                        {i < activeExp.tags.length - 1 && (
                          <span className="text-text-muted">, </span>
                        )}
                      </span>
                    ))}
                    <span className="text-text-muted">];</span>
                  </div>

                  <div className="text-text-muted">{'}'}</div>

                  {/* Tags visual */}
                  <div className="flex flex-wrap gap-1.5 pt-3 pb-2">
                    {activeExp.tags.map((tag) => (
                      <span key={tag} className="tag-pill rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="pt-2 text-text-muted text-xs uppercase tracking-wider">{t('achievements')}</div>
                  <div className="space-y-2 pt-1">
                    {activeExp.description[locale].map((desc, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 py-0.5"
                      >
                        <span className="text-terminal-green mt-0.5 shrink-0" aria-hidden="true">{'▸'}</span>
                        <span className="text-text-secondary text-xs md:text-sm leading-relaxed">{desc}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
