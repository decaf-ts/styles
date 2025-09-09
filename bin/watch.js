import chokidar from 'chokidar';
import { execSync } from 'child_process';
import { watchConfig, buildCommand } from '../chokidar.config.js';

const watcher = chokidar.watch(watchConfig.paths, watchConfig.options);

console.log(`👀 Watching: ${watchConfig.paths}`);

watcher
  .on('add', path => {
    console.log(`📄 File added: ${path}`);
    runBuild();
  })
  .on('change', path => {
    console.log(`✏️ File changed: ${path}`);
    runBuild();
  })
  .on('unlink', path => {
    console.log(`🗑️ File removed: ${path}`);
    runBuild();
  });

function runBuild() {
  try {
    execSync(buildCommand, { stdio: 'inherit' });
  } catch (err) {
    console.error('❌ Build failed:', err.message);
  }
}

// 👇 Mantém o processo vivo
