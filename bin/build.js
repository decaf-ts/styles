import { execSync } from 'child_process';
import { writeFileSync, cpSync, mkdirSync } from 'fs';
import path from 'path';
const packageJson = path.resolve('package.json');

const distDir = path.resolve('dist');
const libDir = path.resolve('lib');

execSync(`npx rimraf ${distDir} && npx rimraf ${libDir}`, { stdio: 'inherit' });
mkdirSync(`${distDir}`, { recursive: true });
mkdirSync(`${libDir}/dist`, { recursive: true });

// Check for --prod flag
const isProd = process.argv.includes('--prod');
const buildCommand = isProd ? 
'npx sass src/main.scss dist/main.css && npx sass src/main.scss | postcss --use autoprefixer --use cssnano -o dist/main.min.css' : 'npx sass src/main.scss dist/main.css';


// Build development CSS
execSync(buildCommand, { stdio: 'inherit' });


// Copia package.json para lib/
cpSync(packageJson, path.join(libDir, 'package.json'));

// Copia tudo da pasta dist/ para lib/
cpSync(distDir, `${libDir}/dist`, { recursive: true });
