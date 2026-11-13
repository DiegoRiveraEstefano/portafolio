---
title: "Go-Refinery"
description: "Servicio ETL asíncrono en Go con inferencia automática de esquemas, transformación en streaming y telemetría SSE"
date: "2026-10-24"
tags: ["Go", "ETL", "Data Engineering", "Hexagonal Architecture", "Backend"]
technologies: ["Go", "SQLite", "Server-Sent Events", "Unpoly", "Web Components", "Hexagonal Architecture"]
results:
  - "Ingesta en streaming con memoria acotada para archivos masivos CSV, Excel (.xlsx), JSONL y logs"
  - "Inferencia heurística automática de delimitadores, encabezados y tipos de datos"
  - "Progreso en tiempo real mediante worker pools nativos en Go y Server-Sent Events (SSE)"
link: "https://github.com/DiegoRiveraEstefano/Go-Refinery"
archived: false
featured: true
showOnHome: true
---

## Visión General

**Go-Refinery** es un motor de ingesta, inferencia de esquemas y transformación de datos de alto rendimiento escrito en **Go 1.22+**. Permite subir archivos masivos sin sanitizar (**CSV**, **Excel `.xlsx`**, **JSON/JSONL** o logs de texto plano), inferir su esquema, validar/normalizar registros de forma asíncrona y emitir el progreso en tiempo real vía **Server-Sent Events (SSE)**.

## Arquitectura Hexagonal & Decisiones Técnicas

* **Dominio Puro (`internal/domain`)**: Entidades `Dataset`, `Row`, `ColumnSchema`, reglas de transformación componibles y máquina de estados de trabajos asíncronos sin dependencias externas.
* **Ingesta en Streaming**: Lectura con memoria acotada mediante `encoding/csv`, `encoding/json`, `bufio.Scanner` y `excelize` (`Rows()` iterator) para evitar agotamiento de RAM.
* **Persistencia SQL Pura**: SQLite en modo WAL con `modernc.org/sqlite` (sin CGO), `database/sql` y migraciones versionadas con `goose`, prescindiendo de ORMs.
* **Frontend Hipermedia**: HTML5 semántico, CSS3 *element-first*, **Unpoly** para navegación progresiva y **Web Components** nativos embebidos vía `embed.FS`.
