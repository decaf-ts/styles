import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

describe('SCSS Build Verification', () => {
  const devCssPath = path.resolve('dist/main.css');
  const prodCssPath = path.resolve('dist/main.min.css');

  test('should generate main.css after build', () => {
    execSync('npm run build', { stdio: 'inherit' });

    expect(existsSync(devCssPath)).toBe(true);
  });

  test('should generate main.min.css after build prod', () => {
    execSync('npm run build:prod', { stdio: 'inherit' });

    expect(existsSync(prodCssPath)).toBe(true);
  });
});
