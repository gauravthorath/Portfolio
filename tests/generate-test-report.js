const { execSync } = require('child_process');
const path = require('path');

// Input JSON file path
const jsonReportPath = path.resolve(__dirname, 'test-results/results.json');

// Command to generate CTRf report
try {
  execSync(`npx @ctrf/github-test-reporter summary ${jsonReportPath}`, {
    stdio: 'inherit', // Ensures the output is shown in the Actions logs
  });
} catch (error) {
  console.error('Failed to generate test report:', error.message);
  process.exit(1); // Exit with failure
}
