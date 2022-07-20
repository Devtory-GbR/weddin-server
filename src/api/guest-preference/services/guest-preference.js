'use strict';

/**
 * guest-preference service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guest-preference.guest-preference');
