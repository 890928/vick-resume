'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
import SkillRadar from './SkillRadar';
import type { Locale } from '@/i18n/config';

export default function About() {
  const t = useTranslations('about');
  const pathname = usePathname();
  const locale = (pathname.startsWith('/en') ? 'en' : 'zh') as Locale;

  return (
    <section id="about" className="py-20 px-4">
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
              <div className="text-text-muted text-xs mb-3">
                {'// about.md'}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {resume.about[locale]}
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: locale === 'zh' ? '年經驗' : 'Yrs Exp', value: '3+' },
                { label: locale === 'zh' ? '合作店家' : 'Stores', value: '5K+' },
                { label: locale === 'zh' ? '日訂單量' : 'Daily Orders', value: '5K+' },
              ].map((stat) => (
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

          {/* Skill radar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-card-border rounded-lg p-6 bg-card-bg"
          >
            <SkillRadar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
