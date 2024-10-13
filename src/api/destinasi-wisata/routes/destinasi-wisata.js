'use strict';

const middlewares = require('../../../../config/middlewares');

/**
 * destinasi-wisata router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::destinasi-wisata.destinasi-wisata', {
  config: {
    find: {
      middlewares: ['api::destinasi-wisata.destinasi-wisatas-populate'],
    },
    findOne: {
      middlewares: ['api::destinasi-wisata.destinasi-wisata-populate'],
    }
  },
});
