import path from 'path';
export const watchConfig = {
  paths: path.resolve('src'),
  options: {
    persistent: true,
    ignoreInitial: false,
    ignored: /(^|[/\\])\../ 
  }
};

export const buildCommand = 'node bin/build.js'