import { db } from "./db";
import { project, SelectProject } from "~/db/schema";
import { eq } from "drizzle-orm";

export const getProjects = async () => {
  try {
    return await db.query.project.findMany({
      with: {
        category: true,
      },
    });
  } catch {
    throw new Error();
  }
};

export const getProject = async (
  slug: string | undefined
): Promise<SelectProject[] | undefined> => {
  try {
    return await db.select().from(project).where(eq(project.slug, slug));
  } catch {
    throw new Error();
  }
};
