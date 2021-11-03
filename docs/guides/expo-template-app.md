---
title: Expo template app with Github Actions
---

Here is the typical starting point when building a new patient experience.

### Use cases:
- A patient application that sends push notifications

### Prerequisites
- Install node.js 12+
- Install expo-cli (npm install -g expo-cli)
- Create a project and note down the `pid` (project id)

### Steps

Replace `healthblocks-template-app` with the name of the patient experience.

1. Clone the boilerplate project, start from empty folder

   ```bash
   git clone https://github.com/healthblocks-io/template-app healthblocks-template-app
   # OR
   npx degit https://github.com/healthblocks-io/template-app healthblocks-template-app

   cd healthblocks-template-app
   yarn
   yarn dev
   ```

2. Set the correct `pid` (project id) in `src/config.ts`

3. Customize app.json to your needs: name, slug, android.package, ios.bundleIdentifier

4. Publish using the expo cli: `npx expo publish`

5. Enable CI/CD, we use GitHub Actions, these are included in the template. You need some ENV secrets though:

   Visit your project on Github > Settings > Secrets and check if `EXPO_CLI_PASSWORD` and `EXPO_CLI_USERNAME` are configured. It's a good practice to configure these on an organisation level (for an agency).

   As an agency, you may not want to share all your apps in development with every client. That's why the template also includes actions that publish with the `EXPO_CLI_USERNAME_CLIENT` and `EXPO_CLI_PASSWORD_CLIENT` credentials. By default, we expect that these credentials are only used for demonstration purposes, so these credentials should not be used to build the final production app. If a client wants to join development, it's possible to consider using the client credentials for building the app. (building means e.g `expo build:ios` here)

6. That's it