'use strict';

/**
 * kuliner router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::kuliner.kuliner', {
  config: {
    find: {
      middlewares: ['api::kuliner.kuliners-populate']
    },
    findOne: {
      middlewares: ['api::kuliner.kuliner-populate']
    }
  }
});
