'use strict';

/**
 * `homestay-populate` middleware
 */

const populate = {
  destinasi_wisata: true,
  image: {
    // populate: true,
    fields: ['url', 'name', 'alternativeText']
  },
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In homestay-populate middleware.');

    if(!ctx.query.populate) {
      ctx.query.populate = populate
    }

    await next();
  };
};
