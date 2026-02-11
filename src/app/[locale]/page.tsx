import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Terminal />
    </>
  );
}
