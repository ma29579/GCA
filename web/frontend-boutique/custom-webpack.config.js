const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        CATALOG_API_SERVICE_HOST: JSON.stringify(process.env.CATALOG_API_SERVICE_HOST
        ),
      },
    })
  ]
};
