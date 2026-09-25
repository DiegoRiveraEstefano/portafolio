---
title: "YML Traductor"
description: "Herramienta CLI para traducción automatizada de archivos de configuración y localización i18n"
date: "2023-02-20"
tags: ["DevOps", "CLI", "Python", "Localización", "Automation"]
technologies: ["Python", "PyYAML", "Google Translate", "Python-fire"]
results:
  - "Preservación estricta de estructura jerárquica de archivos YAML/JSON"
  - "Soporte de traducción masiva para flujos de localización de software"
  - "Integración sin fricciones en pipelines CI/CD automatizados"
link: "https://github.com/DiegoRiveraEstefano/yml-traductor"
archived: false
featured: false
showOnHome: false
---

## Visión General

Utilidad de línea de comandos (**CLI**) concebida para desarrolladores y equipos de producto que necesitan mantener catálogos de cadenas de texto internacionalizadas (`locales/*.yml`, `i18n/*.json`) sincronizados entre múltiples idiomas.

La herramienta recorre recursivamente los árboles de configuración, detecta claves faltantes en los idiomas de destino y traduce automáticamente únicamente los valores de texto, respetando variables interpolated (`%{user}`, `{{count}}`) y anidamientos.

## Características Técnicas

* **Preservación de Estructura**: Lectura y serialización cuidadosa con PyYAML para retener comentarios, anclas y formato de sangría.
* **Interfaz CLI Declarativa**: Construida con Python Fire para admitir ejecución por comandos simples con parámetros como `--src=es`, `--target=en`, `--output=locales/`.
* **Caché de Traducciones**: Mecanismo de hashing para no re-traducir claves cuyos textos no hayan sufrido alteraciones.
