"use strict";

/**
 * guest router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
const api = "api::guest.guest";
const isSameUserPolicy = "global::isSameUser";
const userField = "invitation";

module.exports = createCoreRouter(api, {
  config: {
    find: {
      middlewares: [
        { name: isSameUserPolicy, config: { userField, modelName: api } },
      ],
    },
    findOne: {
      middlewares: [
        { name: isSameUserPolicy, config: { userField, modelName: api } },
      ],
    },
    create: {
      policies: ["global::canEditDataAfterConfirmLatest"],
      middlewares: [
        { name: isSameUserPolicy, config: { userField, modelName: api } },
      ],
    },
    update: {
      policies: ["global::canEditDataAfterConfirmLatest"],
      middlewares: [
        { name: isSameUserPolicy, config: { userField, modelName: api } },
      ],
    },
    delete: {
      policies: ["global::canEditDataAfterConfirmLatest"],
      middlewares: [
        { name: isSameUserPolicy, config: { userField, modelName: api } },
      ],
    },
  },
});
