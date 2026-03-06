// src/components/layout/ClientLayout.tsx
'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navigation from '@/components/layout/Navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();

  return (
    <>
      <Navigation />
      {children}
    </>
  );
}