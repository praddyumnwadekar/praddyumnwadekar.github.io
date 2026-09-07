import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';
import CommandPalette from '@/components/CommandPalette';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Praddyumn Wadekar | Python Backend & Automation Engineer',
    template: '%s | Praddyumn Wadekar',
  },
  description:
    '5+ years building scalable Python automation frameworks and Django REST APIs at Espressif Systems. 95% test coverage. 30% faster debugging cycles.',
  keywords: [
    'Python Developer', 'Django Developer', 'Automation Engineer',
    'Backend Engineer', 'Espressif Systems', 'CI/CD', 'REST API',
    'Django REST Framework', 'Test Automation', 'Software Engineer India',
  ],
  authors: [{ name: 'Praddyumn Wadekar' }],
  creator: 'Praddyumn Wadekar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Praddyumn Wadekar | Python Backend & Automation Engineer',
    description: '5+ years building production Python systems at Espressif Systems. Django, automation, CI/CD specialist.',
    siteName: 'Praddyumn Wadekar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praddyumn Wadekar | Python Backend & Automation Engineer',
    description: '5+ years building production Python systems at Espressif Systems.',
  },
  robots: { index: true, follow: true },
};

// JSON-LD schema
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Praddyumn Wadekar',
  jobTitle: 'Python Backend & Automation Engineer',
  worksFor: { '@type': 'Organization', name: 'Espressif Systems' },
  url: 'https://praddyumnwadekar.dev',
  email: 'wadekarpraddyumn1@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressCountry: 'IN' },
  knowsAbout: ['Python', 'Django', 'Django REST Framework', 'Automation', 'CI/CD', 'MySQL', 'TensorFlow'],
  alumniOf: { '@type': 'EducationalOrganization', name: 'MES Wadia College of Engineering' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`
          ${inter.variable} ${mono.variable}
          font-sans bg-[#080C12] text-[#F8FAFC]
          antialiased selection:bg-sky-500/25 selection:text-sky-200
          cursor-none
        `}
      >
        <a className="skip-link" href="#main-content">Skip to content</a>
        {/* Global UI chrome */}
        <CustomCursor />
        <ScrollProgress />
        <CommandPalette />

        {children}
      </body>
    </html>
  );
}