---
title: "ERP Villa Alemana"
description: "Sistema de gestión escolar integral para instituciones educativas con módulos contables y académicos"
date: "2022-11-30"
tags: ["ERP", "Backend", "Django", "MySQL", "SaaS"]
technologies: ["Python", "Django", "MySQL", "JavaScript", "Pico CSS"]
results:
  - "Automatización completa del ciclo de matrícula y calificaciones"
  - "Reducción de trabajo administrativo manual en más de 60%"
  - "Arquitectura modular y base de datos relacional normalizada"
link: "https://github.com/DiegoRiveraEstefano/erp-villa-alemana-escolares-tecnologicos"
archived: true
featured: false
showOnHome: false
---

## Visión General

Plataforma de planificación de recursos empresariales (**ERP**) diseñada a medida para optimizar los flujos operativos, académicos y administrativos de establecimientos educacionales en Chile.

El sistema unifica la administración de expedientes estudiantiles, nóminas de docentes, control de mensualidades y pagos, asignación de horarios de clases y generación de informes oficiales de rendimiento.

## Arquitectura de Backend & Base de Datos

* **Motor Central**: Desarrollado con **Django**, implementando arquitectura de aplicaciones independientes por dominio (`students`, `academics`, `billing`, `attendance`).
* **Modelado Relacional en MySQL**:
  * Esquema relacional con integridad referencial estricta y transacciones atómicas (`transaction.atomic`) en operaciones financieras.
  * Índices optimizados en claves foráneas y columnas de consulta frecuente para mantener respuestas ágiles frente a consultas complejas.
* **Seguridad & Permisos Granulares**: Sistema de roles y permisos basados en grupos (administradores, profesores, directivos, tutores).
