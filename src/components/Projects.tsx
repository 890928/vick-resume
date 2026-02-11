'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, lazy, Suspense } from 'react';
import { resume } from '@/data/resume';
import ErrorBoundary from './ErrorBoundary';
import type { Locale } from '@/i18n/config';

// #7: Lazy load heavy ReactFlow component
const ArchitectureDiagram = lazy(() => import('./ArchitectureDiagram'));

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;
  const [showArch, setShowArch] = useState(false);

  return (
    <section id="projects" className="py-20 px-4" aria-label={t('title')}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-terminal-green glow-green mb-8"
        >
          {t('title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {resume.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-card-border rounded-lg bg-card-bg overflow-hidden hover:border-terminal-green/50 transition-colors"
            >
              {/* Docker-style header */}
              <div className="border-b border-card-border px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      project.status === 'Running'
                        ? 'bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]'
                        : 'bg-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="text-text-muted text-xs">
                    {t('status')}: {project.status}
                  </span>
                </div>
                <span className="text-text-muted text-xs" aria-hidden="true">
                  CONTAINER
                </span>
              </div>

              {/* Card body */}
              <div className="p-4 space-y-3">
                <h3 className="text-foreground font-bold text-sm">
                  {project.name[locale]}
                </h3>

                <p className="text-text-muted text-xs leading-relaxed">
                  {project.description[locale]}
                </p>

                {/* Stack tags */}
                <div>
                  <div className="text-text-muted text-xs mb-1">{t('stack')}:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 border border-card-border text-terminal-green bg-terminal-green/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <div className="text-text-muted text-xs mb-1">{t('highlights')}:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.highlights[locale].map((h) => (
                      <span
                        key={h}
                        className="text-xs text-text-secondary"
                      >
                        {'>'} {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture diagram button */}
                {project.hasArchDiagram && (
                  <button
                    onClick={() => setShowArch(!showArch)}
                    className="border border-terminal-green text-terminal-green px-3 py-1 text-xs hover:bg-terminal-green hover:text-background transition-colors"
                    aria-expanded={showArch}
                  >
                    {t('view_arch')}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* #6 + #7: Architecture Diagram with ErrorBoundary + lazy load */}
        {showArch && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 border border-card-border rounded-lg bg-card-bg p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-terminal-green text-sm font-bold">
                {t('arch_title')}
              </h3>
              <button
                onClick={() => setShowArch(false)}
                className="text-text-muted hover:text-foreground text-xs"
                aria-label={t('close')}
              >
                [{t('close')}]
              </button>
            </div>
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="h-[300px] flex items-center justify-center text-text-muted text-sm">
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
