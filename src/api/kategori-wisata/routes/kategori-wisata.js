'use strict';

/**
 * kategori-wisata router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::kategori-wisata.kategori-wisata', {
  config: {
    findOne: {
      middlewares: ['api::kategori-wisata.kategori-wisatas-populate']
    }
  }
});
