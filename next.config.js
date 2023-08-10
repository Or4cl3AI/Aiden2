// next.config.js

// Import necessary modules and functions
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// Define configuration options
const nextConfig = {
  // Add any necessary configuration options here
};

// Export the configuration object
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // Add any development-specific configuration options here
  }

  return {
    ...defaultConfig,
    ...nextConfig,
  };
};