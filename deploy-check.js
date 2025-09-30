#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Running deployment checks...\n');

const checks = [
  {
    name: 'Package.json exists',
    check: () => fs.existsSync('package.json'),
    fix: 'Run npm init to create package.json'
  },
  {
    name: 'Vercel config exists',
    check: () => fs.existsSync('vercel.json'),
    fix: 'Create vercel.json configuration file'
  },
  {
    name: 'Build script exists',
    check: () => {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return pkg.scripts && pkg.scripts.build;
    },
    fix: 'Add build script to package.json'
  },
  {
    name: 'Source files exist',
    check: () => fs.existsSync('src/App.js'),
    fix: 'Ensure src/App.js exists'
  },
  {
    name: 'Error boundary exists',
    check: () => fs.existsSync('src/components/ErrorBoundary.js'),
    fix: 'Create ErrorBoundary component'
  },
  {
    name: 'Image fallback exists',
    check: () => fs.existsSync('src/components/ImageFallback.js'),
    fix: 'Create ImageFallback component'
  },
  {
    name: 'Tailwind config exists',
    check: () => fs.existsSync('tailwind.config.js'),
    fix: 'Create tailwind.config.js'
  },
  {
    name: 'PostCSS config exists',
    check: () => fs.existsSync('postcss.config.js'),
    fix: 'Create postcss.config.js'
  }
];

let allPassed = true;

checks.forEach((check, index) => {
  const passed = check.check();
  const status = passed ? '✅' : '❌';
  console.log(`${status} ${check.name}`);
  
  if (!passed) {
    console.log(`   💡 Fix: ${check.fix}\n`);
    allPassed = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('🎉 All checks passed! Ready for deployment.');
  console.log('\n📋 Next steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm run build');
  console.log('3. Run: vercel');
} else {
  console.log('⚠️  Some checks failed. Please fix the issues above.');
  process.exit(1);
}
