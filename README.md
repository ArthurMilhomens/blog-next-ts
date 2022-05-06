# blog-next-ts

Blog using next with TypeScript, FaunaDB, Stripe(subscription with payment) and github session controller.

To listen stripe webhooks: 
  $ stripe listen --forward-to localhost:3000/api/webhooks
