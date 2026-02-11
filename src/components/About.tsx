'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
import SkillRadar from './SkillRadar';
import ErrorBoundary from './ErrorBoundary';
import type { Locale } from '@/i18n/config';

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 200 }}
      className="border border-card-border rounded-lg p-4 bg-card-bg text-center card-hover"
    >
      <div className="shimmer-text text-2xl font-bold">{value}</div>
      <div className="text-text-muted text-xs mt-1">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale() as Locale;

  return (
    <section id="about" className="py-24 px-4" aria-label={t('title')}>
      <div className="max-w-6xl mx-auto">
        {/* Section line */}
        <div className="section-line mb-16" />

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold gradient-text mb-10"
        >
          {t('title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="border border-card-border rounded-lg p-6 bg-card-bg glow-green-box">
              <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
                <div className="w-3 h-3 rounded-full bg-terminal-green/20 border border-terminal-green/40" />
                <span>about.md</span>
              </div>
              <p className="text-text-secondary text-sm leading-[1.8]">
                {resume.about[locale]}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <AnimatedStat value="3" label={t('stat_exp')} delay={0} />
              <AnimatedStat value="5K+" label={t('stat_stores')} delay={0.1} />
              <AnimatedStat value="5K+" label={t('stat_orders')} delay={0.2} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-card-border rounded-lg p-6 bg-card-bg glow-green-box"
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
