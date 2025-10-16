module.exports = (ctx) => {
  return JSON.parse(ctx.redis_res);
};
