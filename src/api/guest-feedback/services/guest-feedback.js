'use strict';

/**
 * guest-feedback service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guest-feedback.guest-feedback');
