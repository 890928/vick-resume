import type { Metadata } from 'next';
import './globals.css';

// #1: Full SEO metadata with OG tags
export const metadata: Metadata = {
  metadataBase: new URL('https://vick-resume.vercel.app'),
  title: '廖致翰 Vick Liao | Backend Engineer',
  description:
    'Backend engineer building F&B ordering, payment and e-invoice systems — NestJS, MySQL, Redis, GCP/K8s. Built the Wowprime Group scan-to-order backend (130+ stores) and an ECPay-compatible e-invoice hub from scratch.',
  keywords: [
    'Backend Engineer',
    'Node.js',
    'NestJS',
    'TypeScript',
    'MySQL',
    'Redis',
    'Kubernetes',
    '金流串接',
    '電子發票',
    '廖致翰',
    'Vick Liao',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: '廖致翰 Vick Liao | Backend Engineer',
    description:
      'Backend engineer building F&B ordering, payment and e-invoice systems — NestJS, MySQL, Redis, GCP/K8s.',
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
        alt: '廖致翰 Vick Liao | Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '廖致翰 Vick Liao | Backend Engineer',
    description:
      'Backend engineer building F&B ordering, payment and e-invoice systems — NestJS, MySQL, Redis, GCP/K8s.',
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
