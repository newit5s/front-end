import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing, {
    // Don't use locale prefix in URL for simpler demo
    localePrefix: 'as-needed'
});

export const config = {
    // Skip static files and API routes
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
