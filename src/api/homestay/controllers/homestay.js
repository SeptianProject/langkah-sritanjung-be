'use strict';

/**
 * homestay controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::homestay.homestay', ({ strapi }) => ({
  async findOne(ctx){
    const { id } = ctx.params;

    strapi.log.info('Fetching entity with query:', {
      where: { slug: id },
      ...ctx.query,
    });

    try {

      const entity = await strapi.db.query('api::homestay.homestay').findOne({
          where: { slug: id },
          ...ctx.query,
      });

      if (!entity) {
        return ctx.notFound('Destination not found');
      }
      const sanitizeEntity = await this.sanitizeOutput(entity, ctx);

      if (sanitizeEntity.image) {
        sanitizeEntity.image = {
          url: sanitizeEntity.image.url,
          name: sanitizeEntity.image.name,
          alternativeText: sanitizeEntity.image.alternativeText,
        };
      }

      return this.transformResponse(sanitizeEntity);
    } catch (error) {
      strapi.log.error('Error fetching entity:', error);
      return ctx.internalServerError('Internal server error');
    }

  }
}));
