'use strict';

/**
 * transportasi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::transportasi.transportasi', ({strapi}) => ({
  async findOne(ctx){
    const { id } = ctx.params;

    strapi.log.info('Fetching entity with query: ', {
      where: { slug: id },
      ...ctx.query,
    })

    try {
      const entity = await strapi.db.query('api::transportasi.transportasi').findOne({
        where: { slug: id },
        ...ctx.query
      });

      if(!entity) {
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

      if (sanitizeEntity.transportasis) {
        sanitizeEntity.transportasis = sanitizeEntity.transportasis.map(transportasi => {
          if (transportasi.image) {
            transportasi.image = {
              url: transportasi.image.url,
              name: transportasi.image.name,
              alternativeText: transportasi.image.alternativeText,
            };
          }
          return transportasi;
        });
      }

      return this.transformResponse(sanitizeEntity)
    } catch (error) {
      strapi.log.error('Error fetching entity:', error);
      return ctx.internalServerError('Internal server error');
    }
  }
}) );
