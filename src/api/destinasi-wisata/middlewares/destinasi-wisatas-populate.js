'use strict';

/**
 * `destinasi-wisatas-populate` middleware
 */


const populate = {
  image: {
    populate: true,
      fields: ["name", "alternativeText", "url"]
  },
  // hero: {
  //   populate: {
  //     link: {
  //     populate: true,
  //     }
  //   }
  // },
  // main: {
  //   populate: {
  //     list: {
  //       populate: true,
  //     }
  //   }
  // },
  // transportasis: {
  //   populate: {
  //     image: {
  //       populate: true,
  //       fields: ["name", "alternativeText", "url"]
  //     }
  //   }
  // },
  // homestays: {
  //   populate: {
  //     image: {
  //       populate: true,
  //       fields: ["name", "alternativeText", "url"]
  //     }
  //   },
  // }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In destinasi-wisatas-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query,
    };

    strapi.log.info('Updated ctx.query: ', ctx.query.populate);

    await next();
  };
};
