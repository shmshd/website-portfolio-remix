import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...classLists: ClassValue[]) => twMerge(clsx(classLists));

export const slugify = (text: string, separator: string = "-") => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, separator);
};

export const dateInDbFormat = () => {
  return new Date().toISOString().slice(0, 19).replace("T", " ");
};
