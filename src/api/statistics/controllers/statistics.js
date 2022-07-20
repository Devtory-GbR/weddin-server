const utils = require("@strapi/utils");
const { sanitize } = utils;

module.exports = {
  /**
   * Update a/an userUpdate record.
   *
   * @return {Object}
   */

  allguests: async (ctx, next) => {
    const schema = strapi.getModel("plugin::users-permissions.user");
    const { auth } = ctx.state;

    const list = []

    const entries = await strapi.db
      .query("plugin::users-permissions.user")
      .findMany({
        select: "*",
        orderBy: { id: "ASC" },
        populate: { guests: true, invitations_feedback: true },
      });
    for(user of entries){
      list.push(await sanitize.contentAPI.output(user, schema, { auth }));
    }
    
    return list;
  },
};
