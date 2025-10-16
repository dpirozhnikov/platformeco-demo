module.exports = (ctx) => {
  return JSON.parse(ctx.request.messages[0].value);
};
