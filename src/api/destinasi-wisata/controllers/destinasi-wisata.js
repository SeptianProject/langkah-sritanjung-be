'use strict';

/**
 * destinasi-wisata controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::destinasi-wisata.destinasi-wisata'
  , ({ strapi }) => ({

  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::destinasi-wisata.destinasi-wisata', {
      ...ctx.query,
    });
    return entities;
  },

  async findOne(ctx){
    const { id } = ctx.params;

    strapi.log.info('Fetching entity with query:', {
      where: { slug: id },
      ...ctx.query,
    });

    try {

      const entity = await strapi.db.query('api::destinasi-wisata.destinasi-wisata').findOne({
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

      if (sanitizeEntity.homestays) {
        sanitizeEntity.homestays = sanitizeEntity.homestays.map(homestay => {
          if (homestay.image) {
            homestay.image = {
              url: homestay.image.url,
              name: homestay.image.name,
              alternativeText: homestay.image.alternativeText,
            };
          }
          return homestay;
        });
      }

      return this.transformResponse(sanitizeEntity);
    } catch (error) {
      strapi.log.error('Error fetching entity:', error);
      return ctx.internalServerError('Internal server error');
    }

  }
})
);
