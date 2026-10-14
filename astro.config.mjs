// Prototype : en local, le site est servi à la racine (http://localhost:4321/).
// Sur GitHub Pages (variable GITHUB_ACTIONS), il est servi sous /rallye-gazelles-v2.
import { defineConfig } from 'astro/config';

const enLigne = Boolean(process.env.GITHUB_ACTIONS);

export default defineConfig({
  site: enLigne ? 'https://younes331.github.io' : undefined,
  base: enLigne ? '/rallye-gazelles-v2' : '/',
  server: { host: '127.0.0.1', port: 4321 },
  devToolbar: { enabled: false },
});
