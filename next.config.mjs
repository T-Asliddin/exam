// next.config.mjs
import { defineConfig } from 'next';

export default defineConfig({
  // Standalone build uchun konfiguratsiya
  output: 'standalone',

  // Eksperimental funksiyalarni yoqish
  experimental: {
    appDir: true, // Next.js 13 va undan yuqori versiyalarida yangi App Router funksiyalarini yoqish
    serverActions: true, // Server Actions funksiyasini yoqish
  },

  // Maxsus yo'naltirishlar yoki rewrites
  async rewrites() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
      },
    ];
  },

  // Maksimal rasm optimallashtirish
  images: {
    domains: ['example.com'], // Tashqi rasm domenlarini qo'shish
  },

  // Environment o'zgaruvchilarini sozlash
  env: {
    CUSTOM_ENV_VAR: process.env.CUSTOM_ENV_VAR,
  },

  // Headerlar va boshqa sozlamalarni qo'shish (masalan, Content Security Policy)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'none';",
          },
        ],
      },
    ];
  },
});
