import { mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const destinationUrl = process.env.REDIRECT_TO_URL;

if (!destinationUrl) {
	console.error(
		"Missing REDIRECT_TO_URL environment variable. Example: REDIRECT_TO_URL=https://your-vercel-url.vercel.app npm run deploy:redirect",
	);
	process.exit(1);
}

const outputDir = resolve(process.cwd(), "redirect-dist");
const normalizedDestination = destinationUrl.replace(/\/$/, "");

const redirectHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=${normalizedDestination}" />
  <meta name="robots" content="noindex" />
  <title>Redirecting...</title>
  <script>
    const redirectTo = "${normalizedDestination}";
    const currentPath = window.location.pathname.replace(/^\\/Portfolio/, "");
    const currentQuery = window.location.search || "";
    const currentHash = window.location.hash || "";
    window.location.replace(redirectTo + currentPath + currentQuery + currentHash);
  </script>
</head>
<body>
  <p>Redirecting to <a href="${normalizedDestination}">${normalizedDestination}</a></p>
</body>
</html>
`;

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, "index.html"), redirectHtml, "utf8");
await writeFile(resolve(outputDir, "404.html"), redirectHtml, "utf8");

console.log(`Redirect site generated at ${outputDir}`);
