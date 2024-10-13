'use strict';

/**
 * `transportasis-populate` middleware
 */

const populate = {
  image: {
    fields: ["url", "name", "alternativeText"]
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In transportasis-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
