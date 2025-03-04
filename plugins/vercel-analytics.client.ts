import { inject } from '@vercel/analytics';

export default defineNuxtPlugin(() => {
  // Só executa no cliente para evitar erros de SSR
  if (process.client) {
    inject({
      mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
      debug: false
    });
  }
});