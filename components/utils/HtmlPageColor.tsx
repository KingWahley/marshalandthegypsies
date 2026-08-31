'use client';

import { useEffect } from 'react';

/**
 * Sets a `data-page` attribute on <html> so CSS can colour the safe-area strip
 * that sits above the fixed navbar on iOS devices with a Dynamic Island / notch.
 *
 * Usage:
 *   <HtmlPageColor page="home" />   → html[data-page="home"] { background: #FFFD63 }
 *   <HtmlPageColor page="dark" />   → html background stays #000 (default in globals.css)
 */
export function HtmlPageColor({ page }: { page: string }) {
  useEffect(() => {
    document.documentElement.dataset.page = page;
    return () => {
      delete document.documentElement.dataset.page;
    };
  }, [page]);

  return null;
}
