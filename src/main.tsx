import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { BrowserRouter as Router } from 'react-router-dom';

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  person_profiles: 'identified_only',
  capture_pageview: false,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <PostHogProvider client={posthog}>
        <App />
      </PostHogProvider>
    </Router>
  </StrictMode>
);
