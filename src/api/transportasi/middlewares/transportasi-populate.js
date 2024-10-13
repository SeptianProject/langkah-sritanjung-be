'use strict';

/**
 * `transportasi-populate` middleware
 */
const populate = {
  image: {
    fields: ["url", "name", "alternativeText"]
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In transportasi-populate middleware.');

    if(!ctx.query.populate) {
      ctx.query.populate = populate
    }

    await next();
  };
};
