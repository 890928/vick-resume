'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
import type { Locale } from '@/i18n/config';

export default function Education() {
  const t = useTranslations('education');
  const locale = useLocale() as Locale;

  return (
    <section id="education" className="py-24 px-4" aria-label={t('title')}>
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

        {resume.education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
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
                {edu.filename}
              </span>
              <span className="text-text-muted/40 text-xs ml-auto hidden sm:block">
                TypeScript
              </span>
            </div>

            {/* Code content */}
            <div className="p-5 md:p-6 space-y-1 text-sm">
              <div className="text-text-muted">
                <span className="text-purple">{'interface'}</span>{' '}
                <span className="text-yellow-300">Education</span> {'{'}
              </div>

              <div className="pl-4">
                <span className="text-cyan">school</span>
                <span className="text-text-muted">: </span>
                <span className="text-orange-300">&quot;{edu.school[locale]}&quot;</span>
                <span className="text-text-muted">;</span>
              </div>

              <div className="pl-4">
                <span className="text-cyan">{t('degree')}</span>
                <span className="text-text-muted">: </span>
                <span className="text-orange-300">&quot;{edu.degree[locale]}&quot;</span>
                <span className="text-text-muted">;</span>
              </div>

              <div className="pl-4">
                <span className="text-cyan">{t('major')}</span>
                <span className="text-text-muted">: </span>
                <span className="text-orange-300">&quot;{edu.major[locale]}&quot;</span>
                <span className="text-text-muted">;</span>
              </div>

              <div className="pl-4">
                <span className="text-cyan">period</span>
                <span className="text-text-muted">: </span>
                <span className="text-orange-300">&quot;{edu.period[locale]}&quot;</span>
                <span className="text-text-muted">;</span>
              </div>

              <div className="text-text-muted">{'}'}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
