'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { resume } from '@/data/resume';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-20 px-4">
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
          className="border border-card-border rounded-lg bg-card-bg p-6 max-w-lg"
        >
          <div className="space-y-4 text-sm">
            {/* Terminal-style contact info */}
            <div className="text-text-muted">
              <span className="text-terminal-green">$</span> cat contact.json
            </div>

            <pre className="text-text-secondary text-xs leading-relaxed">
{`{
  "email": "${resume.contact.email}",
  "github": "${resume.contact.github}",
  "linkedin": "${resume.contact.linkedin}"
}`}
            </pre>

            {/* Action links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={`mailto:${resume.contact.email}`}
                className="border border-terminal-green text-terminal-green px-4 py-2 text-xs hover:bg-terminal-green hover:text-background transition-colors"
              >
                {'>'} {t('email')}
              </a>
              <a
                href={resume.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-card-border text-text-muted px-4 py-2 text-xs hover:border-terminal-green hover:text-terminal-green transition-colors"
              >
                {'>'} GitHub
              </a>
              <a
                href={resume.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-card-border text-text-muted px-4 py-2 text-xs hover:border-terminal-green hover:text-terminal-green transition-colors"
              >
                {'>'} LinkedIn
              </a>
              <a
                href="/resume.pdf"
                download
                className="border border-card-border text-text-muted px-4 py-2 text-xs hover:border-terminal-green hover:text-terminal-green transition-colors"
              >
                {'>'} {t('download_resume')}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 text-center text-text-muted text-xs border-t border-card-border pt-6">
          <p>{t('footer')}</p>
          <p className="mt-1 text-terminal-green/40">
            {'// Built with Next.js + Tailwind CSS + Framer Motion'}
          </p>
        </div>
      </div>
    </section>
  );
}
