const { execSync } = require('child_process');
const fs = require('fs');

// Set environment variables to disable ESLint
process.env.CI = 'false';
process.env.DISABLE_ESLINT_PLUGIN = 'true';
process.env.GENERATE_SOURCEMAP = 'false';

console.log('🔨 Starting build process...');
console.log('Environment variables set:');
console.log('CI =', process.env.CI);
console.log('DISABLE_ESLINT_PLUGIN =', process.env.DISABLE_ESLINT_PLUGIN);
console.log('GENERATE_SOURCEMAP =', process.env.GENERATE_SOURCEMAP);

try {
  // Run the React build
  execSync('npx react-scripts build', { 
    stdio: 'inherit',
    env: { ...process.env }
  });
  
  console.log('✅ Build completed successfully!');
  
  // Check if build folder exists
  if (fs.existsSync('./build')) {
    console.log('📁 Build folder created successfully');
  } else {
    console.log('❌ Build folder not found');
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
