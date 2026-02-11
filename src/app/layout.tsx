import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '廖致翰 Vick Liao | Full-Stack Engineer',
  description: 'Full-stack engineer specializing in Node.js, NestJS, React, and Docker. Portfolio and resume website.',
  keywords: ['Full-Stack Engineer', 'Node.js', 'NestJS', 'React', 'Docker', '廖致翰', 'Vick Liao'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
