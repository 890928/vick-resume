'use client';

import { useTranslations } from 'next-intl';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import { resume } from '@/data/resume';
import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['frontend', 'backend', 'devops'] as const;

const colors: Record<string, { stroke: string; fill: string }> = {
  frontend: { stroke: '#00FF41', fill: '#00FF41' },
  backend: { stroke: '#00D1FF', fill: '#00D1FF' },
  devops: { stroke: '#A855F7', fill: '#A855F7' },
};

export default function SkillRadar() {
  const t = useTranslations('about');
  const [active, setActive] = useState<string>('backend');

  const data = resume.skills[active as keyof typeof resume.skills].map((skill) => ({
    name: skill.name,
    value: skill.level,
  }));

  const color = colors[active] ?? colors.backend;

  return (
    <div className="space-y-4">
      <h3 className="gradient-text text-sm font-bold">{t('skills_title')}</h3>

      {/* Category tabs */}
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1 text-xs border transition-all duration-200 rounded-full ${
              active === cat
                ? 'border-terminal-green text-terminal-green bg-terminal-green/10'
                : 'border-card-border text-text-muted hover:border-text-muted hover:text-text-secondary'
            }`}
          >
            {t(cat)}
          </button>
        ))}
      </div>

      {/* Radar chart */}
      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="#21262D" strokeDasharray="3 3" />
            <PolarAngleAxis
              dataKey="name"
              tick={{ fill: '#8B949E', fontSize: 11 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="value"
              stroke={color.stroke}
              fill={color.fill}
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Skill bars */}
      <div className="space-y-2.5">
        {data.map((skill, i) => (
          <div key={skill.name} className="flex items-center gap-3 text-xs">
            <span className="w-20 text-text-muted shrink-0">{skill.name}</span>
            <div className="flex-1 h-1.5 bg-card-border/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ backgroundColor: color.stroke }}
              />
            </div>
            <span className="text-text-muted w-8 text-right">{skill.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
