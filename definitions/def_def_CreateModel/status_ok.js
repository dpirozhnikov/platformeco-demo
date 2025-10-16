module.exports = (ctx) => {
  let stat_model = ctx.request.body;
  stat_model.status = 'Новый (сохранен без ошибок)';

  return stat_model;
};
