// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file } from "astro/loaders";
import { date } from "astro:schema";

// 3. Define your collection(s)

// IT projects 
const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      date: z.string().date(),
      tags: z.array(z.string()),
      body: z.string(),
      slug: z.string(),
      technologies: z.array(z.string()),
      results: z.array(z.string()),
      link: z.string(),
      archived: z.boolean().optional(),
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
        "Languages",
        "Tools",
        "Backend Development",
        "Frontend Development",
        "Data Science",
        "Databases",
        "Hardware/IoT",
      ]),
    }),
});

const certifications = defineCollection({
  loader: file("src/data/certifications.json"),
  schema: () =>
    z.object({
      slug: z.string(),
      name: z.string(),
      platform: z.string(),
      date: z.string().date(),
      link: z.string().url().optional(),
    }),
});

const experiences = defineCollection({
  loader: file("src/data/experiences.json"),
  schema: () =>
    z.object({
      title: z.string(),
      company: z.string(),
      startDate: z.string(),
      endDate: z.string().optional(),
      description: z.string(),
    }),
});


const socials = defineCollection({
  loader: file("src/data/socials.json"),
  schema: () =>
    z.object({
      slug: z.string(),
      type: z.enum(["github", "linkedin", "twitter", "instagram", "facebook"]),
      name: z.string(),
      link: z.string().url(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { skills, projects };
