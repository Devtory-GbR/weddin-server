module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    let userField = "user";
    const userId = ctx.state.user.id;

    if (config && config.userField) userField = config.userField;

    // if (ctx.state.user.role.type === "admin") {
    //   // Go to next policy or will reach the controller's action.
    //   return await next();
    // }

    // [find, count] Only query entities that owned by the current user
    if (ctx.request.method === "GET") {
      if (!ctx.query.filters) {
        ctx.query.filters = {};
        ctx.query.filters[userField] = {};
        ctx.query.filters[userField].id = {
          $eq: userId,
        };
      } else {
        ctx.query.filters[userField] = {};
        ctx.query.filters[userField] = {
          id: {
            $eq: userId,
          },
        };
      }
    }

    // [update, delete] Check owner of an existing entity
    if (ctx.request.method === "DELETE" || ctx.request.method === "PUT") {
      // Get existing entity and check for ownership
      const url = ctx.request.path.split("/");
      const documentId = url[url.length - 1];

      const existingEntity = await strapi.entityService.findOne(
        config.modelName,
        documentId,
        {
          populate: [userField],
        }
      );

      if (
        !existingEntity ||
        existingEntity[userField].id.toString() !== userId.toString()
      ) {
        return ctx.unauthorized(`You're not allowed to perform this action!`);
      }
    }
    /* run default behaviour */
    await next();

    // [create] After create we will set the owner field value
    if (ctx.request.method === "POST") {
      if (ctx.response.body.data) {
        const userFieldUpdateData = { data: {} };
        userFieldUpdateData.data[userField] = userId;

        await strapi.entityService.update(
          config.modelName,
          ctx.response.body.data.id,
          userFieldUpdateData
        );
      }
    }
  };
};
