---
role: "Cofundador & Desarrollador Full Stack"
company: "The Green Economics Journal"
employmentType: "Profesional independiente"
location: "Gran Santiago, Chile · Híbrido"
period: "ene. 2025 — ago. 2026"
duration: "1 año 8 meses"
current: false
summary: "Cofundador y responsable del diseño y desarrollo end-to-end de la plataforma web para la publicación y divulgación de papers científicos sobre economía verde, democratizando la gestión editorial."
highlights:
  - "Panel de Administración Intuitivo: Creación de un panel de gestión que permite a editores no técnicos subir, revisar y publicar artículos académicos sin fricción."
  - "Automatización de Flujos Editoriales: Algoritmos para la asignación automática de identificadores únicos y metadatos a cada publicación, eliminando errores humanos y reduciendo el tiempo operativo."
  - "Arquitectura Full Stack: Desarrollo completo sobre Python/Django con frontend reactivo, garantizando la integridad de datos y una carga ultra-rápida de documentos científicos."
technologies:
  - "Python"
  - "Django"
  - "PostgreSQL"
  - "JavaScript"
  - "HTML5/CSS3"
  - "Automatización Editorial"
  - "Git"
---

## Visión del Proyecto y Contexto

Como **Cofundador y Desarrollador Full Stack** en **The Green Economics Journal**, lideré el desarrollo técnico de una plataforma digital dedicada a la divulgación académica e investigación rigurosa en economía verde, sostenibilidad y políticas medioambientales.

El desafío central consistió en transformar los procesos tradicionales de publicación científica (a menudo lentos, manuales y propensos a inconsistencias en la indexación) en una experiencia ágil, confiable y abierta.

## Arquitectura de Software & Base de Datos

* **Backend en Django**: Arquitectura limpia orientada a dominios independientes (`articles`, `authors`, `peer_review`, `analytics`).
* **Modelado en PostgreSQL**: Esquema relacional con soporte de búsqueda textual ponderada (*Full-Text Search*) sobre resúmenes y títulos de papers.
* **Procesamiento de Documentos**: Integración de almacenamiento de archivos PDF con verificación de hashes criptográficos para garantizar la inmutabilidad de las versiones publicadas.

```
[Autores / Editores] ---> [Panel Editorial Intuitivo] ---> [Módulo de Validación]
                                                                  |
                                       +--------------------------+--------------------------+
                                       |                                                     |
                         [Asignación de Identificadores]                        [Extracción de Metadatos]
                                       |                                                     |
                         [PostgreSQL (Índices FTS)]                            [Almacenamiento de Papers]
```

## Automatización Editorial

1. **Generación Automatizada de Identificadores**: Implementación de algoritmos deterministas para la creación de identificadores únicos por artículo, garantizando trazabilidad y preparación para indexación académica estándar.
2. **Panel de Control para Editores**: Interfaz web intuitiva que permitió al equipo editorial no técnico gestionar el flujo de recepción, revisión y publicación sin requerir soporte de ingeniería.
3. **Carga Rápida & Optimización Web**: Caché en capas y compresión de activos para asegurar tiempos de respuesta por debajo de los 200ms en lectores de escritorio y dispositivos móviles.
