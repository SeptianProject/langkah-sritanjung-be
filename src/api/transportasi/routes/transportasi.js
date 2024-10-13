'use strict';

/**
 * transportasi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::transportasi.transportasi',{
  config: {
    find: {
      middlewares: ['api::transportasi.transportasis-populate']
    },
    findOne: {
      middlewares: ['api::transportasi.transportasi-populate']
    }
  }
}
);
