module.exports = (ctx) => {
  let mod = ctx.model;
  mod.status = 'Выгружен (выгружен на бэке)';
  return mod;
};
