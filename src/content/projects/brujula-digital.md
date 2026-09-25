---
title: "Brújula Digital Profesional"
description: "Plataforma de e-learning con gestión de contenidos, seguimiento de progreso y foros técnicos"
date: "2023-01-15"
tags: ["E-Learning", "Django", "PostgreSQL", "Backend"]
technologies: ["Python", "Django", "PostgreSQL", "JavaScript", "TailwindCSS"]
results:
  - "Más de 500 usuarios activos registrados durante su despliegue"
  - "Sistema de seguimiento de progreso de lecciones y emisión de certificados"
  - "Integración optimizada de video con carga diferida y bajo consumo de ancho de banda"
link: "https://github.com/DiegoRiveraEstefano/brujula_digital_profesional"
archived: false
featured: false
showOnHome: true
---

## Visión General

Plataforma educativa para la impartición de cursos técnicos y talleres prácticos en línea. El proyecto resuelve la administración de rutas formativas compuestas por módulos, lecciones con contenido multimedia interactivo, evaluaciones periódicas y foros de discusión moderados.

## Decisiones Técnicas Clave

* **Métricas de Progreso en Tiempo Real**: Modelado de estados de lección (*completed*, *in-progress*, *locked*) con disparadores de eventos para desbloqueo automático de módulos subsiguientes.
* **Optimización de Reproductores Multimedia**: Embebidor liviano de video (*Lite YouTube Embed*) que solo carga recursos pesados cuando el usuario hace clic deliberadamente en reproducir, reduciendo el peso de la página inicial en más de un 80%.
* **Generación de Certificados Criptográficos**: Servicio en backend para emitir constancias de aprobación en PDF con códigos hash verificables públicamente vía URL.
