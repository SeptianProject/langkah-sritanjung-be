'use strict';

/**
 * kategori-wisata controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::kategori-wisata.kategori-wisata', ({strapi}) => ({
  async findOne(ctx){
    const { id } = ctx.params;

    strapi.log.info('Fetching entity with query: ', {
      where: { slug: id },
      ...ctx.query,
    })

    try {
      const entity = await strapi.db.query('api::kategori-wisata.kategori-wisata').findOne({
        where: { slug: id },
        ...ctx.query
      });

      if(!entity) {
        return ctx.notFound('Destination not found');
      }
      const sanitizeEntity = await this.sanitizeOutput(entity, ctx);

      if (sanitizeEntity.destinasi_wisatas) {
        sanitizeEntity.destinasi_wisatas = sanitizeEntity.destinasi_wisatas.map(destinasi_wisata => {
          if (destinasi_wisata.image) {
            destinasi_wisata.image = {
              url: destinasi_wisata.image.url,
              name: destinasi_wisata.image.name,
              alternativeText: destinasi_wisata.image.alternativeText,
            };
          }
          return destinasi_wisata;
        });
      }

      return this.transformResponse(sanitizeEntity)
    } catch (error) {
      strapi.log.error('Error fetching entity:', error);
      return ctx.internalServerError('Internal server error');
    }
  }
}) );
