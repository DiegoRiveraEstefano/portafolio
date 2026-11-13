---
title: "Uptime-Monitor"
description: "Monitor de disponibilidad multi-tenant y tolerante a fallos construido con Elixir, Phoenix LiveView y OTP"
date: "2026-07-13"
tags: ["Elixir", "Phoenix", "OTP", "Monitoring", "Multi-Tenant", "Distributed Systems"]
technologies: ["Elixir", "Phoenix LiveView", "OTP", "PostgreSQL", "Ecto", "Tailwind CSS"]
results:
  - "Aislamiento multi-tenant estricto con control de acceso basado en roles (Owner, Admin, Editor, Viewer)"
  - "Supervisión OTP tolerante a fallos con DynamicSupervisor y Task.async_stream con back-pressure"
  - "Dashboard reactivo en tiempo real con Phoenix LiveView sin recargas de página"
link: "https://github.com/DiegoRiveraEstefano/Uptime-Monitor"
archived: false
featured: true
showOnHome: true
---

## Visión General

**Uptime-Monitor** es una plataforma de monitoreo de disponibilidad multi-tenant de alto rendimiento escrita en **Elixir**, construida sobre **Phoenix v1.8** y **Phoenix LiveView v1.2** siguiendo estándares rigurosos de concurrencia y tolerancia a fallos del ecosistema **Elixir/OTP**.

## Arquitectura OTP & Multi-Tenancy

* **Árbol de Supervisión Dinámico**: Cada monitor se ejecuta de forma aislada bajo `UptimeMonitor.Monitors.DynamicSupervisor`, garantizando que un fallo de red catastrófico en un objetivo no afecte al resto del sistema.
* **Ejecución Concurrente**: Planificación eficiente de comprobaciones HTTP/HTTPS con `Task.async_stream/3`, control de *back-pressure* y cliente HTTP resiliente (`Req`).
* **Seguridad Multi-Tenant**: Aislamiento de datos por organización (`tenant_id`) mediante scoping en **Ecto** sobre **PostgreSQL**, índices compuestos y permisos RBAC granulares.
* **Alertas & Tiempo Real**: Actualizaciones instantáneas de estado y latencia en el navegador vía WebSockets (LiveView) junto con notificaciones por correo (Swoosh) y webhooks salientes.
