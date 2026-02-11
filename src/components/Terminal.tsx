'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { processCommand, type TerminalLine } from '@/lib/terminal-commands';
import type { Locale } from '@/i18n/config';

export default function Terminal() {
  const t = useTranslations('terminal');
  const locale = useLocale() as Locale;

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: t('welcome') },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim()) return;

      const cmd = input.slice(0, 200); // #7: limit input length
      const newLines: TerminalLine[] = [
        ...lines,
        { type: 'input', content: cmd },
      ];

      const result = processCommand(cmd, locale);

      if (result === null) {
        setLines([{ type: 'output', content: t('welcome') }]);
      } else if (result === '__OPEN_RESUME__') {
        newLines.push({ type: 'output', content: 'Opening resume.pdf...' });
        setLines(newLines);
        window.open('/resume.pdf', '_blank');
      } else {
        newLines.push({ type: 'output', content: result });
        setLines(newLines);
      }

      setInput('');
    },
    [input, lines, locale, t]
  );

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-card-bg border border-terminal-green text-terminal-green px-4 py-2 text-xs hover:bg-terminal-green hover:text-background transition-all duration-300"
        aria-label="Open Terminal (Ctrl+K)"
      >
        {'>'}_
      </button>

      {/* Terminal overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[10%] left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-32px)] max-w-2xl"
              role="dialog"
              aria-label="Interactive Terminal"
            >
              <div className="border border-card-border rounded-lg overflow-hidden shadow-2xl shadow-terminal-green/5">
                {/* Title bar */}
                <div className="bg-card-bg border-b border-card-border px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"
                        aria-label="Close terminal"
                      />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
                      <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
                    </div>
                    <span className="text-text-muted text-xs ml-2">
                      {t('prompt')}
                    </span>
                  </div>
                  <span className="text-text-muted text-xs">
                    {t('toggle_hint')}
                  </span>
                </div>

                {/* Terminal body */}
                <div
                  ref={scrollRef}
                  className="bg-terminal-bg p-4 h-[50vh] max-h-[400px] overflow-y-auto"
                  onClick={() => inputRef.current?.focus()}
                  role="log"
                  aria-live="polite"
                >
                  {lines.map((line, i) => (
                    <div key={i} className="mb-1">
                      {line.type === 'input' ? (
                        <div className="flex gap-2">
                          <span className="text-terminal-green" aria-hidden="true">$</span>
                          <span className="text-foreground">{line.content}</span>
                        </div>
                      ) : (
                        <pre className="text-text-secondary text-sm whitespace-pre-wrap break-words">
                          {line.content}
                        </pre>
                      )}
                    </div>
                  ))}

                  {/* Input line */}
                  <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                    <span className="text-terminal-green" aria-hidden="true">$</span>
                    <label htmlFor="terminal-input" className="sr-only">Terminal command input</label>
                    <input
                      id="terminal-input"
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      maxLength={200}
                      className="flex-1 bg-transparent outline-none text-foreground caret-terminal-green"
                      spellCheck={false}
                      autoComplete="off"
                    />
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
