import type { Metadata } from 'next';
import './globals.css';

// #1: Full SEO metadata with OG tags
export const metadata: Metadata = {
  metadataBase: new URL('https://vick-resume.vercel.app'),
  title: '廖致翰 Vick Liao | Full-Stack Engineer',
  description:
    'Full-stack engineer specializing in Node.js, NestJS, React, and Docker. 3+ years experience serving 5,000+ stores with 100K+ orders.',
  keywords: [
    'Full-Stack Engineer',
    'Node.js',
    'NestJS',
    'React',
    'Docker',
    '廖致翰',
    'Vick Liao',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: '廖致翰 Vick Liao | Full-Stack Engineer',
    description:
      'Full-stack engineer specializing in Node.js, NestJS, React, and Docker.',
    url: 'https://vick-resume.vercel.app',
    siteName: 'Vick Liao Portfolio',
    locale: 'zh_TW',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: '廖致翰 Vick Liao | Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '廖致翰 Vick Liao | Full-Stack Engineer',
    description:
      'Full-stack engineer specializing in Node.js, NestJS, React, and Docker.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://vick-resume.vercel.app',
    languages: {
      'zh-TW': '/zh',
      en: '/en',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
