---
title: "Lideresas"
description: "Plataforma web y API para gestión financiera y presupuestaria de organizaciones y microempresas"
date: "2023-03-25"
tags: ["Fintech", "Backend", "Django", "PostgreSQL", "Cloud Storage"]
technologies: ["Python", "Django", "PostgreSQL", "TailwindCSS"]
results:
  - "Seguimiento financiero en tiempo real de ingresos, egresos y balances de caja"
  - "Almacenamiento de comprobantes de pago respaldado en S3 compatible"
  - "Generación automatizada de balances contables mensuales"
link: "https://github.com/DiegoRiveraEstefano/lideresas"
archived: false
featured: false
---

## Visión General

Plataforma de gestión contable simplificada para microempresas, talleres y grupos comunitarios que necesitan un control riguroso de sus flujos de caja, arqueos diarios y comprobantes de compras sin la complejidad de sistemas ERP corporativos.

## Arquitectura de Backend & Archivos

* **Módulo Contable Transaccional**: Arquitectura de partida doble simplificada con validaciones matemáticas en cada asiento para garantizar que el balance de caja cuadre permanentemente.
* **Integración con Almacenamiento en la Nube**: Almacenamiento seguro de imágenes de boletas y facturas en buckets compatibles con AWS S3 / MinIO, utilizando URLs firmadas temporales para descargas autorizadas.
* **Exportación de Reportes**: Módulo en Python para exportación de resúmenes financieros mensuales en formato PDF y hojas de cálculo para rendición de cuentas.
