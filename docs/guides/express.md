---
title: Getting started with Express
---

Use cases:
- Let's make a server rendered application that connects to the Healthblocks API
- Custom processing of data
- Trigger push notifications

### Prerequisites
- Create a project and note down the `pid` (project id)
- Install node.js

### Steps

1. Install express and healthblocks

   ```bash
   npm install express dotenv @healthblocks-io/server
   ```

2. Create a server

   ```js
   require('dotenv/config')
   const express = require('express')
   const app = express()
   app.listen(8080)
   ```

3. Set environment variables in .env

   ```js
   HEALTHBLOCKS_API=https://api.healthblocks.io
   HEALTHBLOCKS_PID=example
   HEALTHBLOCKS_KEY=example
   ```

4. Fetch information from Healthblocks API

   ```js
   app.post('/api/intake', () => {
     const HB = require('@healthblocks-io/server')
     const jwt = await HB.auth.verify(req.jwt)
     const user = await HB.users.get(jwt.sub)
     const saved = await HB.questionnaire_responses.create({ answers:req.body })
     const sent = await HB.push.send({ to: jwt.sub, body: 'Thanks for the response.' })
   })
   ```