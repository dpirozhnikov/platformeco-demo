module.exports = (ctx) => {
  let stat_model = ctx.request.body;
  stat_model.status = 'Ошибка контроля (сохранен с ошибками контролей)';

  return stat_model;
};
