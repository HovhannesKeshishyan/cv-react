import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows using describe, it, expect, etc. globally
    environment: "jsdom", // Use jsdom for DOM simulation
    setupFiles: "./vitest.setup.ts",
    // Exclude node_modules and other directories
    exclude: ["node_modules", ".next", "out", "dist"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      reportsDirectory: "./coverage",
      include: ["src/**/*.{js,ts,jsx,tsx}"],
      exclude: ["node_modules", "test", "tests"]
    }
  }
});