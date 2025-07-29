// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/WMM-JamWebsite/', // <-- Replace with your actual repo name
    build: {
        rollupOptions: {
            input: {
                // Root pages
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about-us.html'),
                contact: resolve(__dirname, 'contact-us.html'),
                faq: resolve(__dirname, 'faq.html'),
                locations: resolve(__dirname, 'locations.html'),
                story: resolve(__dirname, 'our-story.html'),
                whyus: resolve(__dirname, 'why-us.html'),

                // Product pages
                blueberry: resolve(__dirname, 'products/blueberry.html'),
                mango: resolve(__dirname, 'products/mango.html'),
                marmalade: resolve(__dirname, 'products/marmalade.html'),
                raspberry: resolve(__dirname, 'products/raspberry.html'),
                strawberry: resolve(__dirname, 'products/strawberry.html'),

                // Recipe pages
                chiaPudding: resolve(__dirname, 'recipes/chia-seed-pudding-with-jam.html'),
                thumbprintCookies: resolve(__dirname, 'recipes/jam-thumbprint-cookies.html')
            }
        }
    },
});
