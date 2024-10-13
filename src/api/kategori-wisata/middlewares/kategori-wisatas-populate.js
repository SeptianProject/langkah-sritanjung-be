'use strict';

/**
 * `kategori-wisatas-populate` middleware
 */

const populate = {
  destinasi_wisatas: {
    populate: {
      image: true,
    }
  }
}


module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In kategori-wisatas-populate middleware.');

    if(!ctx.query.populate) {
      ctx.query.populate = populate
    }

    await next();
  };
};
