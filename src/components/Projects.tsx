'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, lazy, Suspense } from 'react';
import { resume } from '@/data/resume';
import ErrorBoundary from './ErrorBoundary';
import type { Locale } from '@/i18n/config';

const ArchitectureDiagram = lazy(() => import('./ArchitectureDiagram'));

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;
  const [showArch, setShowArch] = useState(false);

  return (
    <section id="projects" className="py-24 px-4" aria-label={t('title')}>
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

        <div className="grid md:grid-cols-2 gap-5">
          {resume.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-card-border rounded-lg bg-card-bg overflow-hidden card-hover"
            >
              {/* Docker-style header */}
              <div className="border-b border-card-border px-4 py-2.5 flex items-center justify-between bg-terminal-bg/50">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      project.status === 'Running'
                        ? 'bg-green-500 pulse-dot'
                        : 'bg-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="text-text-muted text-xs">
                    {t('status')}: <span className={project.status === 'Running' ? 'text-terminal-green' : 'text-text-muted'}>{project.status}</span>
                  </span>
                </div>
                <span className="text-text-muted/40 text-xs" aria-hidden="true">
                  CONTAINER
                </span>
              </div>

              {/* Card body */}
              <div className="p-5 space-y-4">
                <h3 className="text-foreground font-bold text-sm">
                  {project.name[locale]}
                </h3>

                <p className="text-text-muted text-xs leading-relaxed">
                  {project.description[locale]}
                </p>

                {/* Stack tags */}
                <div>
                  <div className="text-text-muted text-xs mb-1.5">{t('stack')}:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tag-pill rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <div className="text-text-muted text-xs mb-1.5">{t('highlights')}:</div>
                  <div className="space-y-1">
                    {project.highlights[locale].map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-text-secondary">
                        <span className="text-terminal-green" aria-hidden="true">{'▸'}</span>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture diagram button */}
                {project.hasArchDiagram && (
                  <button
                    onClick={() => setShowArch(!showArch)}
                    className="btn-glow border border-terminal-green text-terminal-green px-4 py-1.5 text-xs hover:bg-terminal-green hover:text-background transition-all duration-300 rounded"
                    aria-expanded={showArch}
                  >
                    {t('view_arch')}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        {showArch && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 border border-card-border rounded-lg bg-card-bg p-6 glow-green-box"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="gradient-text text-sm font-bold">
                {t('arch_title')}
              </h3>
              <button
                onClick={() => setShowArch(false)}
                className="text-text-muted hover:text-terminal-green text-xs transition-colors"
                aria-label={t('close')}
              >
                [{t('close')}]
              </button>
            </div>
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="h-[300px] flex items-center justify-center text-text-muted text-sm">
                    <span className="text-terminal-green mr-2">{'>'}</span>
                    Loading architecture diagram...
                  </div>
                }
              >
                <ArchitectureDiagram />
              </Suspense>
            </ErrorBoundary>
          </motion.div>
        )}
      </div>
    </section>
  );
}
