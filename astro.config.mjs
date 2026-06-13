// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://screandev.github.io',
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "fr",
        routing: {
            prefixDefaultLocale: false,
            fallbackType: 'redirect'
        }
    },
    redirects: {
        '/': '/fr'
    }
});
