'use strict';

/**
 * `destinasi-wisata-populate` middleware
 */

const populate = {
  image: {
    populate: true,
      fields: ["name", "alternativeText", "url"]
  },
  hero: {
    populate: {
      link: {
      populate: true,
      }
    }
  },
  main: {
    populate: {
      list: {
        populate: true,
      }
    }
  },
  transportasis: {
    populate: true,
    // {
      // image: {
      //   populate: true,
      //   fields: ["name", "alternativeText", "url"]
      // }
    // }
  },
  homestays: {
    populate: {
      image: {
        populate: true,
        fields: ["name", "alternativeText", "url"]
      }
    },
  }
}


module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('Populating query: ', ctx.query);

    if(!ctx.query.populate) {
      ctx.query.populate = populate
    }

    strapi.log.info('Updated ctx.query: ', ctx.query);
    await next();
  };
};
