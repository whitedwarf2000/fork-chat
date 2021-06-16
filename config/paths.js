const path = require('path');
const rootDir = process.cwd();

module.exports = {
  // Source files
  src: path.join(rootDir, 'src'),

  // Production build files
  build: path.join(rootDir, 'dist'),

  // Static files that get copied to build folder
  public: path.join(rootDir, 'public'),
  forkUI: path.join(rootDir, 'fork-ui'),
};
