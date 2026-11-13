---
title: "NanoStock"
description: "Sistema modular de gestión de inventario doméstico, control FEFO y planificación alimentaria con Spring Boot"
date: "2026-11-12"
tags: ["Java", "Spring Boot", "ERP", "Self-Hosted", "Modular Monolith"]
technologies: ["Java", "Spring Boot", "Spring Modulith", "SQLite", "JTE", "HTMX", "OpenTelemetry"]
results:
  - "Seguimiento por lotes con consumo FEFO (First-Expired-First-Out) y alertas de vencimiento"
  - "Arquitectura Modular Monolith con Spring Modulith, Flyway y soporte Spring Batch/Shell"
  - "Observabilidad integrada con OpenTelemetry, Micrometer y stack Grafana LGTM"
link: "https://github.com/DiegoRiveraEstefano/NanoStock"
archived: false
featured: true
showOnHome: true
---

## Visión General

**NanoStock** es un sistema ligero y *self-hosted* de gestión de inventario, despensa y planificación de compras construido sobre **Java 21**, **Spring Boot 4** y **Spring Modulith**, diseñado para maximizar la trazabilidad de lotes y reducir el desperdicio.

## Arquitectura y Stack Tecnológico

* **Backend Modular**: Java 21, Spring Boot 4, Spring Modulith, Spring Security, Spring Batch y Spring Shell.
* **Persistencia & Migraciones**: SQLite con Spring Data JPA y migraciones versionadas mediante **Flyway**.
* **Frontend Hipermedia**: Plantillas **JTE (Java Template Engine)**, Bulma CSS, **HTMX** y Web Components nativos sin sobrecarga de SPA.
* **Observabilidad**: Telemetría completa mediante OpenTelemetry, Micrometer y stack Grafana LGTM vía Docker Compose.

## Funcionalidades Principales

1. **Catálogo & Escaneo**: Registro canónico de productos con soporte de escáner óptico de códigos de barras.
2. **Motor FEFO & Recetas**: Deducción automática de stock por fecha de vencimiento más próxima y análisis de viabilidad de recetas.
3. **Gestión Masiva de Datos**: Importación y exportación en formatos CSV, Excel (`.xlsx`) y JSON con validación *dry-run*.
