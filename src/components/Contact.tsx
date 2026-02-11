'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { resume } from '@/data/resume';

function ExternalIcon() {
  return (
    <svg
      className="inline-block w-3 h-3 ml-1 opacity-50"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3.5 1.5h7v7M10.5 1.5L1.5 10.5" />
    </svg>
  );
}

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-24 px-4" aria-label={t('title')}>
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
          className="border border-card-border rounded-lg bg-card-bg p-6 max-w-lg glow-green-box"
        >
          <div className="space-y-4 text-sm">
            {/* Terminal-style contact info */}
            <div className="text-text-muted flex items-center gap-2" aria-hidden="true">
              <span className="text-terminal-green">$</span> cat contact.json
            </div>

            <pre className="text-text-secondary text-xs leading-relaxed overflow-x-auto border border-card-border rounded p-4 bg-terminal-bg/50">
{`{
  "phone": "${resume.contact.phone}",
  "email": "${resume.contact.email}",
  "github": "${resume.contact.github}",
  "linkedin": "${resume.contact.linkedin}"
}`}
            </pre>

            {/* Action links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={`tel:${resume.contact.phone}`}
                className="btn-glow border border-terminal-green text-terminal-green px-4 py-2 text-xs hover:bg-terminal-green hover:text-background transition-all duration-300 rounded"
                aria-label={`${t('phone')}: ${resume.contact.phone}`}
              >
                <span className="relative z-10">{'>'} {t('phone')}</span>
              </a>
              <a
                href={`mailto:${resume.contact.email}`}
                className="btn-glow border border-terminal-green text-terminal-green px-4 py-2 text-xs hover:bg-terminal-green hover:text-background transition-all duration-300 rounded"
                aria-label={`${t('email')}: ${resume.contact.email}`}
              >
                <span className="relative z-10">{'>'} {t('email')}</span>
              </a>
              <a
                href={resume.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-card-border text-text-muted px-4 py-2 text-xs hover:border-cyan hover:text-cyan transition-all duration-300 rounded"
                aria-label="GitHub profile (opens in new tab)"
              >
                {'>'} GitHub <ExternalIcon />
              </a>
              <a
                href={resume.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-card-border text-text-muted px-4 py-2 text-xs hover:border-cyan hover:text-cyan transition-all duration-300 rounded"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                {'>'} LinkedIn <ExternalIcon />
              </a>
              <a
                href="/resume.pdf"
                download
                className="border border-card-border text-text-muted px-4 py-2 text-xs hover:border-terminal-green hover:text-terminal-green transition-all duration-300 rounded"
                aria-label={t('download_resume')}
              >
                {'>'} {t('download_resume')}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 text-center text-text-muted text-xs">
          <div className="section-line mb-8" />
          <p>&copy; {new Date().getFullYear()} {t('footer')}</p>
          <p className="mt-2 text-terminal-green/30">
            {t('built_with')}
          </p>
        </footer>
      </div>
    </section>
  );
}
