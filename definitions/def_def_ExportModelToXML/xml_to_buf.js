module.exports = (ctx) => {
  var buf = Buffer.from(ctx.model_xml, 'utf8');
  return {
    body: buf,
    headers: {
      'content-disposition': `attachment; filename="${ctx.request.query.documentNumber}.xml"`
    }
  };
};
