'use strict';

/**
 * homestay router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::homestay.homestay', {
  config :{
    find: {
      middlewares: ['api::homestay.homestay-populate']
    },
    findOne: {
      middlewares: ['api::homestay.homestay-populate']
    }
  }
});
