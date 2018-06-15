const { importSchema } = require('graphql-import');

exports.default = function(source) {
  const callback = this.async();

  this.cacheable();

  callback(null, `module.exports = \`${importSchema(source).replace(/`/g, '\\`')}\``);
};
