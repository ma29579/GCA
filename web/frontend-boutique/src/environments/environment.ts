// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  userName: 'frontendUser',
  password: 'frontendPassword',
  catalogApi: 'http://catalog-api:8080',
  cartApi: 'http://cart-api:8081',
  shippingApi: 'http://shipping-api:8082',
  checkoutApi: 'http://checkout-api:8083',
  CATALOG_API_SERVICE_HOST: $ENV.CATALOG_API_SERVICE_HOST
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
