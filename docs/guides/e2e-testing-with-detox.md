---
title: End-to-end testing with Detox
---

[Detox documentation](https://github.com/wix/Detox/blob/master/docs/README.md)

## Setup on Macbook

- Run `./@healthblocks-io/native/cmd/enable-detox.sh`
  - Installs detox
  - Installs applesimutils (macOS only)
  - Downloads expo iOS apk
- Write tests in the ./e2e folder

## Run tests

1. Start expo (**expo start**)
2. Open iOS simulator.
3. Execute **yarn test**

## Writing tests

### Unit tests

These tests cover 1 function per test and don't hit API endpoints.

Consider using Jest

Consider only testing pure functions inside `src/lib/`

### Integration tests

These tests may hit API endpoints and test if several functions collaborate together.

Consider using Jest

### End-to-end test

These tests run the complete app and interact through the UI.

Consider using Detox+Jest
