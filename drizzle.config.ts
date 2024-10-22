import { defineConfig } from "drizzle-kit";

export const dbCredentials = {
  url: process.env.DATABASE_URL as string,
};

export default defineConfig({
  dbCredentials,
  dialect: "postgresql",
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  strict: true,
});
