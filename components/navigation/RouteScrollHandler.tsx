'use client';

import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

/**
 * RouteScrollHandler guarantees instantaneous, zero-delay scroll reset
 * to (0,0) on every Next.js route transition without any browser scroll animation.
 */
export function RouteScrollHandler() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Force instantaneous scroll reset
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}
