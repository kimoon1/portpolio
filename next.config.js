// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};