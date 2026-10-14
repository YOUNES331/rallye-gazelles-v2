// Prototype local : aucun déploiement, aucune intégration serveur.
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { host: '127.0.0.1', port: 4321 },
  devToolbar: { enabled: false },
});
