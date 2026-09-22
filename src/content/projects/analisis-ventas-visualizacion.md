---
title: "Análisis de Ventas & Evaluación de Visualización de Datos"
description: "Pipeline analítico y procesamiento de grandes volúmenes de datos transaccionales con Polars y Pandas"
date: "2023-08-15"
tags: ["Data Science", "Business Intelligence", "Polars", "Python"]
technologies: ["Python", "Polars", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"]
results:
  - "Procesamiento de datasets transaccionales de alto volumen"
  - "Benchmarks comparativos de rendimiento entre Polars y Pandas"
  - "Generación de tableros de métricas y detección de anomalías"
link: "https://github.com/DiegoRiveraEstefano/analisis-ventas-evaluacion-visualizacion-datos"
archived: true
featured: false
---

## Visión General

Proyecto de ingeniería de datos enfocado en la limpieza, transformación analítica y modelado de datos de ventas de comercio electrónico. Se desarrollaron pipelines de análisis para evaluar patrones temporales de compra, distribución de ingresos por categoría de producto y retención de cohortes de clientes.

## Comparativa Técnica: Polars vs Pandas

Uno de los principales hitos del proyecto consistió en refactorizar las transformaciones analíticas iniciales desde Pandas hacia **Polars**:

* **Procesamiento Multihilo**: Polars aprovecha automáticamente todos los núcleos de la CPU gracias a su motor subyacente en Rust.
* **Evaluación Perezosa (*Lazy Execution*)**: Uso del `LazyFrame` para optimizar automáticamente el grafo de consultas (*query execution plan*) antes de materializar los datos en memoria.
* **Reducción de Tiempo de Ejecución**: Las operaciones de agregación y agrupación sobre millones de registros redujeron su tiempo de procesamiento en más de un 65%.

## Entregables del Análisis

1. Matrices de correlación y visualización de estacionalidad mensual.
2. Segmentación de clientes mediante análisis RFM (Recency, Frequency, Monetary).
3. Pipelines reproducibles exportables a scripts de producción para reporting automatizado.
