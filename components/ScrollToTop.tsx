import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Handles scroll-to-top AND GA4 page_view tracking on every SPA route change.
// The site uses HashRouter (#/blog/...), so we send page_view manually here
// (index.html sets send_page_view:false) to record each route as its own page.
export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const gtag = (window as any).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
}
