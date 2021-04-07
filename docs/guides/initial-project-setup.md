---
title: Initial project setup
---

## Existing project

We currently focus on the "New Expo App" workflow below.

Install the modules

```bash
# React Native app
yarn add @healthblocks-io/core @healthblocks-io/apollo @healthblocks-io/native

# Web app
yarn add @healthblocks-io/core @healthblocks-io/apollo

# Server
yarn add @healthblocks-io/core
```

## New Expo App

This guide will help you get started with integrating Healthblocks in a new Expo project.

1. Clone the boilerplate project, start from empty folder

   ```bash
   git clone https://github.com/healthblocks-io/template-app project-name
   # OR
   npx degit https://github.com/healthblocks-io/template-app project-name

   cd project-name
   yarn
   yarn dev
   ```

2. Customize app.json to your needs : name, slug, android.package, ios.bundleIdentifier
3. Publish using the expo cli: `npx expo publish`
4. Enable CI/CD, we use GitHub Actions, these are included in the template. You need some ENV secrets though:

   Visit [https://github.com/bothrs/pillar-app/settings/secrets](https://github.com/bothrs/pillar-app/settings/secrets) and check if `EXPO_CLI_PASSWORD` and `EXPO_CLI_USERNAME` are configured. It's a good practice to configure these on an organisation level (for an agency).

   As an agency, you may not want to share all your apps in development with every client. That's why the template also includes actions that publish with the `EXPO_CLI_USERNAME_CLIENT` and `EXPO_CLI_PASSWORD_CLIENT` credentials. By default, we expect that these credentials are only used for demonstration purposes, so these credentials should not be used to build the final production app. If a client wants to join development, it's possible to consider using the client credentials for building the app. (building means e.g `expo build:ios` here)
