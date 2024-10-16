'use strict';

/**
 * `kuliner-populate` middleware
 */

const populate = {
  destinasi_wisatas: true,
  image: {
    populate: true,
    fields: ['url', 'name', 'alternativeText'],
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In kuliner-populate middleware.');

    if(!ctx.query.populate) {
      ctx.query.populate = populate
    }

    await next();
  };
};
