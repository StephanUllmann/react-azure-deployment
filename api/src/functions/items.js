const { app } = require('@azure/functions');

app.http('items', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    return {
      jsonBody: 'Hello from the Edge',
    };
  },
});
