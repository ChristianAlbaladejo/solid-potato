'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    async publish(){
        const products = await strapi.services.car.find( {"kilometros": 50} );
        return products.map((products, i) => `${i}. ${products}`);
    }
};
