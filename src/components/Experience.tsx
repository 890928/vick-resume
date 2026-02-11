'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { resume } from '@/data/resume';
import type { Locale } from '@/i18n/config';

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale() as Locale;
  const [activeFile, setActiveFile] = useState('quickclick');

  const activeExp = resume.experience.find((e) => e.id === activeFile) ?? resume.experience[0];

  return (
    <section id="experience" className="py-20 px-4" aria-label={t('title')}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-terminal-green glow-green mb-8"
        >
          {t('title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-card-border rounded-lg overflow-hidden bg-card-bg"
        >
          {/* IDE title bar */}
          <div className="bg-terminal-bg border-b border-card-border px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-text-muted text-xs ml-2">
              {activeExp.filename}
            </span>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* File tree sidebar */}
            <div className="md:w-56 border-b md:border-b-0 md:border-r border-card-border p-3" role="tablist" aria-label="Experience files">
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
                  className={`w-full text-left pl-4 py-1 text-xs transition-colors flex items-center gap-1.5 ${
                    activeFile === exp.id
                      ? 'text-terminal-green bg-terminal-green/5'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                >
                  <span className="text-yellow-500" aria-hidden="true">📄</span>
                  {exp.filename}
                </button>
              ))}
            </div>

            {/* Code content area */}
            <div className="flex-1 p-4 md:p-6 min-h-[300px]" role="tabpanel">
              <div className="space-y-1 text-sm">
                <div className="text-text-muted">
                  <span className="text-purple-400">{'interface'}</span>{' '}
                  <span className="text-yellow-300">Experience</span> {'{'}
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">company</span>
                  <span className="text-text-muted">: </span>
                  <span className="text-orange-300">&quot;{activeExp.company[locale]}&quot;</span>
                  <span className="text-text-muted">;</span>
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">title</span>
                  <span className="text-text-muted">: </span>
                  <span className="text-orange-300">&quot;{activeExp.title[locale]}&quot;</span>
                  <span className="text-text-muted">;</span>
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">period</span>
                  <span className="text-text-muted">: </span>
                  <span className="text-orange-300">&quot;{activeExp.period[locale]}&quot;</span>
                  <span className="text-text-muted">;</span>
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">stack</span>
                  <span className="text-text-muted">: [</span>
                  {activeExp.tags.map((tag, i) => (
                    <span key={tag}>
                      <span className="text-green-400">&quot;{tag}&quot;</span>
                      {i < activeExp.tags.length - 1 && (
                        <span className="text-text-muted">, </span>
                      )}
                    </span>
                  ))}
                  <span className="text-text-muted">];</span>
                </div>

                <div className="text-text-muted">{'}'}</div>

                {/* #9: i18n achievements label */}
                <div className="mt-4 text-text-muted">{t('achievements')}</div>
                {activeExp.description[locale].map((desc, i) => (
                  <div key={i} className="pl-0 py-0.5">
                    <span className="text-terminal-green mr-2" aria-hidden="true">{'▸'}</span>
                    <span className="text-text-secondary text-xs md:text-sm">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
