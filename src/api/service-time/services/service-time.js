'use strict';

/**
 * service-time service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-time.service-time');
