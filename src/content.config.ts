import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

// 1. Perfil y Biografía
const profile = defineCollection({
  loader: file("src/data/profile.json"),
  schema: () =>
    z.object({
      id: z.string(),
      name: z.string(),
      shortName: z.string(),
      chipLabel: z.string(),
      chipSub: z.string(),
      systemStatus: z.string(),
      location: z.string(),
      specialization: z.string(),
      tagline: z.string(),
      role: z.string(),
      heroDescription: z.string(),
      specs: z.array(
        z.object({
          key: z.string(),
          value: z.string(),
        })
      ),
      about: z.object({
        heading: z.string(),
        paragraphs: z.array(z.string()),
        pipeline: z.string(),
      }),
      telemetry: z.array(
        z.object({
          code: z.string(),
          value: z.string(),
          color: z.string(),
          statusDot: z.string(),
          label: z.string(),
        })
      ),
    }),
});

// 2. Proyectos (Archivos Markdown)
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/projects" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      tags: z.array(z.string()),
      technologies: z.array(z.string()),
      results: z.array(z.string()),
      link: z.string(),
      github: z.string().optional(),
      archived: z.boolean().default(false),
      featured: z.boolean().default(false),
      showOnHome: z.boolean().default(false),
    }),
});


// 3. Habilidades
const skills = defineCollection({
  loader: file("src/data/skills.json"),
  schema: () =>
    z.object({
      slug: z.string(),
      name: z.string(),
      category: z.string(),
      description: z.string(),
      appliedIn: z.array(z.string()),
      tags: z.array(z.string()),
      yearsOfExperience: z.number().min(1).max(99).optional(),
      featured: z.boolean().default(false),
      showOnHome: z.boolean().default(false),
    }),
});

// 4. Educación Formal
const education = defineCollection({
  loader: file("src/data/education.json"),
  schema: () =>
    z.object({
      id: z.string(),
      degree: z.string(),
      institution: z.string(),
      location: z.string(),
      period: z.string(),
      status: z.string(),
      statusLabel: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
    }),
});

// 5. Certificaciones (Archivos Markdown)
const certifications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/certifications" }),
  schema: () =>
    z.object({
      title: z.string(),
      platform: z.string(),
      issueDate: z.string(),
      displayDate: z.string(),
      credentialId: z.string().optional(),
      credentialUrl: z.string().url().optional(),
      status: z.string().default("VERIFIED"),
      topic: z.string(),
      skills: z.array(z.string()),
      featured: z.boolean().default(false),
    }),
});

// 6. Enlaces y Canales de Contacto
const socials = defineCollection({
  loader: file("src/data/socials.json"),
  schema: () =>
    z.object({
      id: z.string(),
      port: z.string(),
      type: z.enum(["email", "linkedin", "github", "twitter", "website"]),
      label: z.string(),
      channelType: z.string(),
      value: z.string(),
      href: z.string(),
      accent: z.string(),
    }),
});

// 7. Experiencia Laboral (Archivos Markdown)
const experiences = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/experiences" }),
  schema: () =>
    z.object({
      role: z.string(),
      company: z.string(),
      employmentType: z.string(),
      location: z.string(),
      period: z.string(),
      duration: z.string(),
      current: z.boolean().default(false),
      summary: z.string().optional(),
      highlights: z.array(z.string()).default([]),
      technologies: z.array(z.string()).default([]),
    }),
});


// Exportar colecciones registradas
export const collections = {
  profile,
  skills,
  projects,
  education,
  certifications,
  socials,
  experiences,
};

