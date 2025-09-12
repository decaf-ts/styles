import path from 'path';
export const watchConfig = {
  paths: path.resolve('src'),
  options: {
    persistent: true,
    ignoreInitial: false,
    ignored: [
      '**/node_modules/**',
      '**/dist/**',
      '**/lib/**',
      '**/workdocs/**',
      '**/tests/**',
      '**/bin/**',
      '**/.git/**',
      '**/.vscode/**',
      '**/.*'
    ]
  }
};export const buildCommand = 'node bin/build.js'