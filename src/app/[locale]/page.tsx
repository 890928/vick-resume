import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vick Liao',
    alternateName: '廖致翰',
    jobTitle: 'Full-Stack Engineer',
    url: 'https://vick-resume.vercel.app',
    sameAs: [
      'https://github.com/890928',
      'https://www.linkedin.com/in/vickliao',
    ],
    knowsAbout: ['Node.js', 'NestJS', 'React', '.NET Core', 'Docker', 'MySQL'],
    worksFor: {
      '@type': 'Organization',
      name: 'QuickClick / DianDian Global Co., Ltd.',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Terminal />
      <ScrollToTop />
    </>
  );
}
