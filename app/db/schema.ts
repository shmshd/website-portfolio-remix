import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const category = pgTable('category', {
  createdAt: timestamp('created_at').defaultNow(),
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').unique().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const project = pgTable('project', {
  categoryId: integer('category_id')
    .notNull()
    .references(() => category.id),
  createdAt: timestamp('created_at').defaultNow(),
  description: text('description'),
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').unique().notNull(),
  thumbUrl: text('thumb_url'),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const categoryRelations = relations(category, ({ many }) => ({
  project: many(project),
}));

export const projectRelations = relations(project, ({ one }) => ({
  category: one(category, {
    fields: [project.categoryId],
    references: [category.id],
  }),
}));

export const screenshot = pgTable('screenshot', {
  createdAt: timestamp('created_at').defaultNow(),
  description: text('description'),
  id: integer('id').primaryKey(),
  imageUrl: text('image_url').notNull(),
  isActive: boolean('is_active').default(true),
  name: text('name').notNull(),
  projectId: integer('project_id')
    .notNull()
    .references(() => project.id),
  size: text('size'),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const screenshotsRelations = relations(screenshot, ({ one }) => ({
  project: one(project, {
    fields: [screenshot.projectId],
    references: [project.id],
  }),
}));

export const stackLang = pgTable('stack_lang', {
  createdAt: timestamp('created_at').defaultNow(),
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  svgPath: text('svg_path'),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const stackLangRelations = relations(stackLang, ({ many }) => ({
  stacks: many(stack),
}));

export const stack = pgTable('stack', {
  createdAt: timestamp('created_at').defaultNow(),
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  stackLangId: integer('stack_lang_id')
    .notNull()
    .references(() => stackLang.id, { onDelete: 'cascade' })
    .notNull(),
  type: integer('type'), // '0' Frontend or '1' Backend
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date()),
  url: text('description'),
});

export const stacksRelations = relations(stack, ({ one }) => ({
  stackLang: one(stackLang, {
    fields: [stack.stackLangId],
    references: [stackLang.id],
  }),
}));

export const stacksOnProject = pgTable('stack_on_project', {
  createdAt: timestamp('created_at').defaultNow(),
  id: integer('id').primaryKey(),
  projectId: integer('project_id')
    .notNull()
    .references(() => project.id),
  stackId: integer('stack_id')
    .notNull()
    .references(() => stack.id),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const stackOnProjectRelations = relations(
  stacksOnProject,
  ({ one }) => ({
    project: one(project, {
      fields: [stacksOnProject.projectId],
      references: [project.id],
    }),
    stack: one(stack, {
      fields: [stacksOnProject.stackId],
      references: [stack.id],
    }),
  }),
);

export const contact = pgTable('contact', {
  company: text('company'),
  createdAt: timestamp('created_at').defaultNow(),
  email: text('email').notNull(),
  id: integer('id').primaryKey(),
  mail_id: text('mail_id'),
  mail_provider: text('mail_provider'),
  message: text('message').notNull(),
  name: text('name').notNull(),
  subject: text('subject').notNull(),
});

export type InsertCategory = typeof category.$inferInsert;
export type SelectCategory = typeof category.$inferSelect;

export type InsertProject = typeof project.$inferInsert;
export type SelectProject = typeof project.$inferSelect;

export type InsertScreenshot = typeof screenshot.$inferInsert;
export type SelectScreenshot = typeof screenshot.$inferSelect;

export type InsertStackLang = typeof stackLang.$inferInsert;
export type SelectStackLang = typeof stackLang.$inferSelect;

export type InsertStack = typeof stack.$inferInsert;
export type SelectStack = typeof stack.$inferSelect;

export type InsertStacksOnProject = typeof stacksOnProject.$inferInsert;
export type SelectStacksOnProject = typeof stacksOnProject.$inferSelect;

export type InsertContact = typeof contact.$inferInsert;
export type SelectContact = typeof contact.$inferSelect;
