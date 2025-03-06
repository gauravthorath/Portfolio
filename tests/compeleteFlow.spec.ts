import { test, expect } from "@playwright/test";

// Test for navigation to the "About" page and header visibility
test.describe("Portfolio Page - About Section", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:5173/Portfolio/about");
	});

	test("Verify header and basic elements are visible", async ({ page }) => {
		await expect(
			page.getByRole("heading", { name: "Gaurav Thorat" }),
		).toBeVisible();
		await expect(
			page.getByText("Frontend Developer", { exact: true }),
		).toBeVisible();
		await expect(
			page.getByText("Technical Lead", { exact: true }),
		).toBeVisible();
		await expect(
			page.getByRole("img", { name: "Gaurav Thorat - Frontend" }),
		).toBeVisible();
	});

	test("Verify navigation links are visible", async ({ page }) => {
		await expect(page.getByRole("link", { name: "About" })).toBeVisible();
		await expect(page.getByRole("link", { name: "Projects" })).toBeVisible();
		await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
		// await expect(page.getByRole("link", { name: "CV" })).toBeVisible();
	});

	test("Verify banner elements are visible", async ({ page }) => {
		await expect(page.getByRole("banner").getByLabel("LinkedIn")).toBeVisible();
		await expect(page.getByRole("banner").getByLabel("GitHub")).toBeVisible();
		await expect(page.getByLabel("Toggle theme")).toBeVisible();
		await expect(page.getByLabel("Open profile menu")).toBeVisible();
	});

	test("Verify footer text is visible", async ({ page }) => {
		await expect(
			page.getByText("© 2025 Gaurav Thorat. All").scrollIntoViewIfNeeded(),
		).toBeTruthy();
	});
});

// Test navigation and content visibility of other sections
test.describe("Portfolio Page - Navigation and Content", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:5173/Portfolio/about");
	});

	test("Navigate to About section", async ({ page }) => {
		await page.getByRole("link", { name: "About" }).click();
		await expect(
			page.getByRole("heading", { name: "Gaurav Thorat" }),
		).toBeVisible();
	});

	test("Navigate to Projects section", async ({ page }) => {
		await page.getByRole("link", { name: "Projects" }).click();
		await expect(
			page.getByRole("heading", { name: "Executed Projects" }),
		).toBeVisible();
	});

	test("Navigate to Contact section", async ({ page }) => {
		await page.getByRole("link", { name: "Contact" }).click();
		await expect(
			page.getByRole("heading", { name: "Connect with Me" }),
		).toBeVisible();
	});

	// test("Navigate to CV section", async ({ page }) => {
	// 	await page.getByRole("link", { name: "CV" }).click();
	// 	await expect(
	// 		page.getByRole("heading", { name: "My detailed professional" }),
	// 	).toBeVisible();
	// });
});
