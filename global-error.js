// global-error.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0, // Adjust this value in production as needed
});

// Catch and log errors
export default function logError(error) {
  Sentry.captureException(error);
}
