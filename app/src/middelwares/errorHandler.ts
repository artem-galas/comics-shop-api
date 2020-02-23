import { Context, Next } from 'koa';

export async function errorHandler(ctx: Context, next: Next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;

    if (!ctx.body) {
      ctx.body = {
        error: {
          message: err.message,
        },
      };
    }
  }
}
