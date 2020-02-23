import { Context, Next } from 'koa';

interface ApiResponse<T = any> {
  success: boolean;
  data: T,
  error?: string;
}

export async function apiResponse(ctx: Context, next: Next):  Promise<ApiResponse> {
  try {
    await next();

    return ctx.body = {
      success: true,
      data: ctx.body,
    };
  } catch (err) {
    ctx.body = {
      success: false,
      error: err.message,
      data: null,
    };
    if (err.code) {
      ctx.body.code = err.code;
    }

    throw err;
  }
}
