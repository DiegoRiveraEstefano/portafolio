---
title: "LedgerFlow"
description: "Plataforma multi-tenant de conciliación de pagos y facturación automatizada con garantías ACID"
date: "2026-11-12"
tags: ["Fintech", "Full Stack", "TypeScript", "NestJS", "PostgreSQL", "Docker"]
technologies: ["TypeScript", "NestJS", "React", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Docker"]
results:
  - "Aislamiento estricto multi-tenant por tenant_id en consultas, guards HTTP y tokens JWT"
  - "Conciliación bancaria asíncrona mediante colas BullMQ respaldadas por Redis"
  - "Generación atómica de facturas y transacciones mediante transacciones ACID en Prisma"
link: "https://github.com/DiegoRiveraEstefano/LedgerFlow"
archived: false
featured: true
showOnHome: true
---

## Visión General

**LedgerFlow** es una plataforma *full-stack* de conciliación de pagos y motor de facturación automatizada diseñada con arquitectura monorepo (`pnpm`) para operar entornos multi-tenant con alta integridad financiera.

## Arquitectura del Monorepo

* **`apps/api`**: Backend en **NestJS** con **Prisma ORM** sobre **PostgreSQL**, workers asíncronos con **BullMQ + Redis**, documentación OpenAPI/Swagger y autenticación JWT con control de acceso basado en roles (`ADMIN`, `FINANCE_OPERATOR`, `AUDITOR`).
* **`apps/web`**: Dashboard administrativo construido con **React 19**, **Vite**, **Tailwind CSS**, **TanStack Query/Table** y **Zustand**.
* **`packages/types`**: Contratos compartidos, interfaces DTO y enumeraciones compiladas con `tsup` para tipado *end-to-end*.

```
[React 19 Dashboard] ---> [NestJS API + Tenant Guards] ---> [PostgreSQL (ACID)]
                                      |
                             [BullMQ / Redis Workers] ---> [Conciliación Batch]
```

## Capacidades Clave

1. **Conciliación Automatizada**: Procesamiento en segundo plano de extractos bancarios frente a transacciones de pasarela.
2. **Seguridad Multi-Tenant & RBAC**: Segregación lógica estricta en cada capa de persistencia y autorización.
3. **CI & Contenedorización**: Pipeline en GitHub Actions y despliegue reproducible con Docker Compose.
