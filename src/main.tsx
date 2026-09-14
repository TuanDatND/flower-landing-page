import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Keep analytics off the critical rendering path so it cannot compete with LCP.
const analyticsWindow = window as AnalyticsWindow;
const loadAnalytics = () => {
  if (document.querySelector('script[data-analytics="ga4"]')) return;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.gtag = analyticsWindow.gtag || ((...args: unknown[]) => {
    analyticsWindow.dataLayer?.push(args);
  });
  analyticsWindow.gtag('js', new Date());
  analyticsWindow.gtag('config', 'G-04L04MVVBW');
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-04L04MVVBW';
  script.dataset.analytics = 'ga4';
  document.head.appendChild(script);
};

const scheduleAnalytics = () => {
  if (analyticsWindow.requestIdleCallback) {
    analyticsWindow.requestIdleCallback(loadAnalytics, { timeout: 8000 });
  } else {
    window.setTimeout(loadAnalytics, 8000);
  }
};

window.addEventListener('pointerdown', scheduleAnalytics, { once: true, passive: true });
window.addEventListener('keydown', scheduleAnalytics, { once: true, passive: true });
