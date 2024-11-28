import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Input JSON file path
const jsonReportPath = path.resolve(__dirname, "test-results/results.json");

// Command to generate CTRf report
try {
	execSync(`npx github-actions-ctrf summary ${jsonReportPath}`, {
		stdio: "inherit", // Ensures the output is shown in the Actions logs
	});
} catch (error) {
	// Explicitly typing error to 'any'
	console.error("Failed to generate test report:", error.message);
	process.exit(1); // Exit with failure
}
