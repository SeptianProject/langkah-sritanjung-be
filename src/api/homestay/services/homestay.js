'use strict';

/**
 * homestay service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homestay.homestay');
