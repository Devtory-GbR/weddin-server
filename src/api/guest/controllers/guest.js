"use strict";

/**
 *  guest controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::guest.guest", ({ strapi }) => ({
  async delete(ctx) {
    if (ctx.state.user.role.type !== "admin") {
      const { id } = ctx.params;
      const { query } = ctx;

      const entity = await strapi
        .service("api::guest.guest")
        .findOne(id, query);

      if (entity.fixed) {
        return ctx.unauthorized(`You're not allowed to perform this action!`);
      }
    }
    const response = await super.delete(ctx);
    return response;
  },
}));
