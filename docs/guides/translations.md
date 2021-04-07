---
title: Manage translations
---

### Expo app

Translations are managed with i18next. Initializing i18next happens in custom code, currently that is in `src/hooks/use-load-translations.tsx`.

In the template-app, the load path is based on `healthblocksConfig` in `src/config.ts` you can keep this or change to a different translation provider:

- Airtable translations (template-app)
  - Enable Airtable integration
  - Create Translations table, add the `key` field and 1 field per language (nl, fr, en, ...)
  - Translations are now available on `<api>/api/projects/<pid>/tables/Translations`
- Custom translation provider
  - Checkout i18next docs 🧐
