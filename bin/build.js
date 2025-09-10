import { execSync } from 'child_process';
import { readdirSync, statSync, cpSync, mkdirSync } from 'fs';
import path from 'path';
const packageJson = path.resolve('package.json');

const distDir = path.resolve('dist');
const libDir = path.resolve('lib');
const sourceDir = path.resolve('src');

execSync(`npx rimraf ${distDir} && npx rimraf ${libDir}`, { stdio: 'inherit' });
mkdirSync(`${distDir}`, { recursive: true });
mkdirSync(`${libDir}/dist`, { recursive: true });

const production = process.argv.includes('--prod');

function getAllScssFiles(dir) {
  const files = readdirSync(dir);
  let scssFiles = [];
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (statSync(filePath).isDirectory()) {
      scssFiles = scssFiles.concat(getAllScssFiles(filePath));
    } else if (file.endsWith('.scss')) {
      scssFiles.push(filePath);
    }
  });
  return scssFiles;
}

const files = getAllScssFiles(sourceDir);

function buildFile(file, outFile) {
    const buildCommand = production ? 
        `npx sass --no-source-map ${file} ${outFile} && npx postcss ${outFile} --use autoprefixer --use cssnano --no-map -o ${outFile.replace('.css', '.min.css')}`
        : `npx sass ${file} ${outFile}`;
    console.log(`Building: ${file} -> ${outFile}`);
    execSync(buildCommand, { stdio: 'inherit' });
}

files.forEach(file => {
  const outFile = path.join(distDir, path.relative(sourceDir, file).replace('.scss', '.css'));
  mkdirSync(path.dirname(outFile), { recursive: true });
  buildFile(file, outFile);
});


cpSync(packageJson, path.join(libDir, 'package.json'));

cpSync(distDir, `${libDir}/dist`, { recursive: true });
cpSync(sourceDir, `${libDir}/src`, { recursive: true });
