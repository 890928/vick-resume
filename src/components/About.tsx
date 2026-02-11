'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
import SkillRadar from './SkillRadar';
import ErrorBoundary from './ErrorBoundary';
import type { Locale } from '@/i18n/config';

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale() as Locale;

  const stats = [
    { label: t('stat_exp'), value: '3+' },
    { label: t('stat_stores'), value: '5K+' },
    { label: t('stat_orders'), value: '5K+' },
  ];

  return (
    <section id="about" className="py-20 px-4" aria-label={t('title')}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-terminal-green glow-green mb-8"
        >
          {t('title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="border border-card-border rounded-lg p-6 bg-card-bg">
              <div className="text-text-muted text-xs mb-3" aria-hidden="true">
                {'// about.md'}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {resume.about[locale]}
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-card-border rounded p-3 bg-card-bg text-center"
                >
                  <div className="text-terminal-green text-xl font-bold">{stat.value}</div>
                  <div className="text-text-muted text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* #6: Skill radar wrapped in ErrorBoundary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-card-border rounded-lg p-6 bg-card-bg"
          >
            <ErrorBoundary>
              <SkillRadar />
            </ErrorBoundary>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
