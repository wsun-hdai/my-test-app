let common = [
    '--require cucumber-tsflow-specs/dist', //Load ts-flow
    'cucumber-tsflow-specs', //load ts-flow
    'src/**/*.feature', // Specify our feature files
    '--require-module ts-node/register', // Load TypeScript module
    '--require src/**/*.ts', // Load step definitions
    '--format progress-bar', // Load custom formatter
    '--format node_modules/cucumber-pretty' // Load custom formatter
  ].join(' ');
  
  module.exports = {
    default: common
  };