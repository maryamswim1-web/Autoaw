import server from '../src/server.ts';

const app = server.default ?? server;

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    return app.fetch(request, env, ctx);
  }
};
