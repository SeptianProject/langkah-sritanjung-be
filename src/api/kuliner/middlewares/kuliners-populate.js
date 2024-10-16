'use strict';

/**
 * `kuliners-populate` middleware
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
    strapi.log.info('In kuliners-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
