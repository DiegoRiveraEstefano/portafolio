// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file } from "astro/loaders";

// 3. Define your collection(s)

// IT projects 
const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      date: z.date(),
      tags: z.array(z.string()),
      body: z.string(),
      slug: z.string(),
      technologies: z.array(z.string()),
      results: z.array(z.string()),
    }),
});

const skills = defineCollection({
  loader: file("src/data/skills.json"),
  schema: () =>
    z.object({
      slug: z.string(),
      name: z.string(),
      yearsOfExperience: z.number().min(1).max(99),
      category: z.enum([
        "Backend Development",
        "Frontend Development",
        "Data Science",
        "Computer Vision",
        "System Design",
        "Databases",
      ]),
    }),
});


// 4. Export a single `collections` object to register your collection(s)
export const collections = { skills, projects };
