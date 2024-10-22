import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";

import * as schema from "~/db/schema";

import { dbCredentials } from "../../drizzle.config";

const { Client } = pkg;

const client = new Client({ connectionString: dbCredentials.url });

await client.connect();
export const db = drizzle(client, { schema });
