'use strict';

/**
 * service-time controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-time.service-time');
