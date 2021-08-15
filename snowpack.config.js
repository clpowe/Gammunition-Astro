// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  env: {
    AIRTABLE: 'keyjXkmALVHr1yPDD',
  },
  plugins: ['@snowpack/plugin-vue', '@snowpack/plugin-dotenv'],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  external: ['axios'],
};
