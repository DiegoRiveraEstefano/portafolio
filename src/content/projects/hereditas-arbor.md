---
title: "HereditasArbor"
description: "Plataforma de grafos genealógicos y visualización de datos históricos con optimizaciones numéricas"
date: "2022-09-01"
tags: ["Web App", "Django", "MySQL", "Grafos", "Visualización"]
technologies: ["Python", "Django", "MySQL", "TailwindCSS"]
results:
  - "Modelado de estructuras de datos en grafo para relaciones de parentesco complejas"
  - "Visualización interactiva de linajes familiares"
  - "Importación y exportación de estándares genealógicos GEDCOM"
link: "https://github.com/DiegoRiveraEstefano/HereditasArbor"
archived: true
featured: false
showOnHome: false
---

## Visión General

Aplicación web diseñada para modelar, registrar y visualizar redes genealógicas y relaciones de consanguinidad familiares a gran escala.

El principal reto de ingeniería radicaba en gestionar relaciones recursivas bidireccionales (ascendentes, descendentes y colaterales) sin incurrir en recursiones infinitas ni en el problema de consultas $N+1$ en la base de datos relacional.

## Modelado de Datos y Optimización

* **Estructura de Grafos en SQL**: Implementación de tablas de adyacencia optimizadas con índices compuestos para consultas rápidas de ancestros y descendientes inmediatos.
* **Procesamiento de Linajes**: Lógica en Python para cálculo de grados de consanguinidad y detección de ciclos en árboles genealógicos complejos.
* **Formatos de Intercambio**: Parser para el formato estándar GEDCOM, permitiendo importar y exportar árboles genealógicos existentes con validación estricta de fechas y relaciones.
