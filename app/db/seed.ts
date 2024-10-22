import { eq } from "drizzle-orm";

import { category, InsertCategory, InsertProject, project } from "~/db/schema";
import { db } from "~/lib/db";
import { slugify } from "~/lib/utils";

const categorySeed = [{ name: "Portfolio" }, { name: "Business" }];
const projectSeed = [
  {
    categoryId: 1, // order of categorySeed data
    description: "Lorem Ipsum",
    name: "Test 1",
    thumbUrl: "https://via.placeholder.com/345x280/E8E8E8",
  },
  {
    categoryId: 2,
    description: "Lorem Ipsum",
    name: "Test 2",
    thumbUrl: "https://via.placeholder.com/345x280/E8E8E8",
  },
  {
    categoryId: 2,
    description: "Lorem Ipsum",
    name: "Test 3",
    thumbUrl: "https://via.placeholder.com/345x280/E8E8E8",
  },
];

const categories = async () => {
  const categories: InsertCategory[] = [];

  await Promise.all(
    categorySeed.map(async (item) => {
      const { name } = item;

      const categoryFromDb = await db
        .select()
        .from(category)
        .where(eq(category.slug, slugify(name)));

      if (categoryFromDb.length === 0) {
        categories.push({
          name,
          slug: slugify(name),
        });
      }
      return categories;
    })
  );

  return categories;
};

const projects = async () => {
  const projects: InsertProject[] = [];

  await Promise.all(
    projectSeed.map(async (item) => {
      const { categoryId, description, name, thumbUrl } = item;

      const projectFromDb = await db
        .select()
        .from(project)
        .where(eq(project.slug, slugify(name)));

      if (projectFromDb.length === 0) {
        projects.push({
          categoryId,
          description,
          name,
          slug: slugify(name),
          thumbUrl,
        });
      }
    })
  );

  return projects;
};

const main = async () => {
  try {
    const categoryToSeed = await categories();
    if (categoryToSeed.length) {
      await db.insert(category).values(categoryToSeed);
      console.log("Created categories 🌱");
    } else {
      console.log("Category seeds are up-to-date ✅");
    }
  } catch (e) {
    console.log(e);
  }

  try {
    const projectToSeed = await projects();
    if (projectToSeed.length) {
      await db.insert(project).values(projectToSeed);
      console.log("Created projects 🌱");
    } else {
      console.log("Project seeds are up-to-date ✅");
    }
  } catch (e) {
    console.log(e);
  }
};

await main();
