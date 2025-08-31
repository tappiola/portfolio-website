/// <reference types="vite/client" />
import type { ReactNode } from 'react';
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import appCss from '../index.css?url';
import '../datadog.ts';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Frontend engineer portfolio' },
      {
        name: 'description',
        content:
          'Portfolio website of Tatiana Karamorina, frontend engineer based in London, UK',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Tatiana Karamorina — frontend engineer',
      },
      { property: 'og:image', content: '/og_image.png' },
      { property: 'og:image', content: '/og_image.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:image', content: '/og_image.png' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500;600;700&family=Kanit:wght@400;500;600&display=swap',
      },
    ],
    htmlAttrs: {
      lang: 'en',
    },
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
