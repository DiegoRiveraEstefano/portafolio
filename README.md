# Diego Rivera // Technical Portfolio & Systems Archive

> **Especialista en Desarrollo Backend, Arquitecturas Escalables y Sistemas Distribuidos.**  
> Portafolio de ingeniería diseñado bajo la estética **Technical Hardware & Blueprint** (*Teenage Engineering / Retro-Future Laboratory*), construido con **Astro** y **Vanilla CSS moderno** con cero dependencias de utilidades externas.

---

## Aspectos Técnicos Destacados

* **Zero-Framework CSS**: Arquitectura CSS pura y modular organizada en `@layer` (`reset`, `tokens`, `base`, `layout`, `components`, `utilities`).
* **Colorimetría OKLCH & Modo Dual**: Paleta técnica de alta fidelidad perceptual (`oklch()`) con soporte nativo de modo claro/oscuro mediante `light-dark()`.
* **Astro Content Collections (v5+)**: 100% del contenido desacoplado de la vista con esquemas de validación estrictos en **Zod** y loaders nativos (`glob` y `file`).
* **Páginas de Detalle en Markdown**: Cada proyecto y experiencia laboral cuenta con su propia ficha técnica individual (`/projects/[slug]` y `/experience/[slug]`) con renderizado completo de Markdown, diagramas ASCII y tablas de impacto.
* **Buscador en Tiempo Real**: Catálogo de proyectos (`/projects`) con filtrado dinámico instantáneo mediante Vanilla JS sin dependencias.
* **100% Estático y Ultra Rápido**: Generación SSG optimizada, sin runtime pesado de JavaScript en cliente y tiempos de carga instantáneos.

---

## Stack Tecnológico

| Capa | Tecnología / Herramienta |
| :--- | :--- |
| **Generador Estático** | [Astro](https://astro.build/) |
| **Estilos & Layout** | Vanilla CSS (CSS Grid, `@layer`, `oklch()`, `light-dark()`, Subgrid, Container Queries) |
| **Gestión de Datos** | Astro Content Collections + Zod Schemas |
| **Tipografía** | *Space Grotesk* (encabezados geométricos) + *JetBrains Mono* (telemetría y métricas) |
| **Contenido Técnico** | Markdown (GFM) estructurado por artefactos |

---

## Estructura del Proyecto

```text
portafolio/
├── public/                     # Assets estáticos y favicon
├── src/
│   ├── components/             # Módulos y secciones de interfaz
│   │   ├── Navigation.astro    # Barra de navegación técnica y telemetría
│   │   ├── Hero.astro          # Consola principal de presentación e identidad
│   │   ├── About.astro         # Manifiesto de ingeniería y métricas operativas
│   │   ├── Experience.astro    # Grid interactivo de experiencia con acordeón in-situ
│   │   ├── Skills.astro        # Matriz categorizada de habilidades y tecnologías
│   │   ├── Projects.astro      # Grid de proyectos destacados con visores esquemáticos
│   │   ├── Education.astro     # Formación profesional y certificaciones técnicas
│   │   ├── Contact.astro       # Puertos y canales de comunicación directa
│   │   └── Footer.astro        # Placa de identificación técnica y enlaces de red
│   │
│   ├── content/                # Fichas técnicas en Markdown (Colecciones)
│   │   ├── experiences/        # Historial laboral detallado (*.md)
│   │   │   ├── nolan-ai-software.md
│   │   │   ├── the-green-economics-journal.md
│   │   │   └── freelance-fullstack.md
│   │   ├── projects/           # Documentación de proyectos y arquitecturas (*.md)
│   │   │   ├── arquitectura-kafka-go.md
│   │   │   ├── analisis-ventas-visualizacion.md
│   │   │   └── ...
│   │   └── certifications/     # Acreditaciones y licencias técnicas (*.md)
│   │       ├── platzi-docker-fundamentos.md
│   │       ├── platzi-git-github.md
│   │       └── ...
│   │
│   ├── data/                   # Datos estructurados en JSON (Colecciones)
│   │   ├── profile.json        # Identidad, tags, telemetría y especificaciones
│   │   ├── skills.json         # Inventario enriquecido (descripción, contexto y tags)
│   │   ├── education.json      # Título profesional e institución
│   │   └── socials.json        # Puertos y enlaces de contacto
│   │
│   ├── layouts/
│   │   └── Layout.astro        # Shell principal con rejilla blueprint y metadatos SEO
│   │
│   ├── pages/                  # Enrutamiento estático (SSG)
│   │   ├── index.astro         # Dashboard principal
│   │   ├── archive.astro       # Redirección canónica a /projects
│   │   ├── projects/
│   │   │   ├── index.astro     # Catálogo completo de proyectos con buscador
│   │   │   └── [slug].astro    # Ficha técnica individual de cada proyecto
│   │   ├── experience/
│   │   │   ├── index.astro     # Archivo histórico de experiencia laboral
│   │   │   └── [slug].astro    # Detalle individual de cada rol y arquitectura
│   │   ├── certifications/
│   │   │   ├── index.astro     # Catálogo completo de certificaciones con buscador
│   │   │   └── [slug].astro    # Ficha técnica individual de cada credencial
│   │   └── skills/
│   │       ├── index.astro     # Catálogo de habilidades con filtros por tag y buscador
│   │       └── [slug].astro    # Especificación técnica individual de cada habilidad
│   │
│   ├── styles/                 # Arquitectura de estilos Vanilla CSS
│   │   ├── layers.css          # Declaración de orden @layer
│   │   ├── tokens.css          # Paleta OKLCH, espaciado y tipografía
│   │   ├── reset.css           # Reset moderno
│   │   ├── base.css            # Rejilla blueprint de fondo y scrollbars
│   │   ├── utilities.css       # Clases utilitarias (.specs-card, .status-dot, etc.)
│   │   └── global.css          # Orquestador global de capas
│   │
│   └── content.config.ts       # Definición de colecciones y esquemas Zod
│
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Comandos de Desarrollo

Todas las operaciones se ejecutan desde la raíz del proyecto:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo local (http://localhost:4321)
npm run dev

# 3. Compilar el sitio estático para producción (salida en ./dist)
npm run build

# 4. Previsualizar la compilación de producción localmente
npm run preview
```

---

## Gestión de Contenido

### Agregar un Nuevo Proyecto
Crea un archivo Markdown en `src/content/projects/[slug].md` con el siguiente frontmatter:

```markdown
---
title: "Nombre del Proyecto"
description: "Resumen técnico de la solución y objetivos de negocio."
date: "2026"
tags: ["Backend", "Go", "Docker"]
technologies: ["Go", "Kafka", "PostgreSQL", "Docker"]
results:
  - "Reducción de latencia a < 15ms en p99."
  - "Procesamiento de > 10,000 eventos concurrentes."
link: "https://github.com/DiegoRiveraEstefano/mi-proyecto"
github: "https://github.com/DiegoRiveraEstefano/mi-proyecto"
archived: false
featured: true
---

## Arquitectura y Diseño del Sistema
...
```

### Agregar una Nueva Experiencia Laboral
Crea un archivo Markdown en `src/content/experiences/[slug].md`:

```markdown
---
role: "Backend Engineer"
company: "Tech Company"
employmentType: "Jornada completa"
location: "En remoto"
period: "oct. 2026 — actualidad"
duration: "6 meses"
current: true
summary: "Breve descripción del alcance del rol."
highlights:
  - "Diseño de APIs REST y microservicios escalables."
technologies:
  - "Python"
  - "FastAPI"
  - "PostgreSQL"
---

## Resumen del Rol & Alcance
...
```

---

## Contacto & Perfil

* **Ingeniero**: Diego Rivera
* **Especialidad**: Backend Development // Distributed Systems & DevOps
* **Email**: [diego.rivera.estefano@gmail.com](mailto:diego.rivera.estefano@gmail.com)
* **GitHub**: [@DiegoRiveraEstefano](https://github.com/DiegoRiveraEstefano)
* **LinkedIn**: [/in/diegoriveraestefano](https://linkedin.com/in/diego-rivera-estefano)
