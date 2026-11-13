---
title: "MockHavoc"
description: "Proxy inverso local en Go sin dependencias externas para simular inestabilidad de red, latencia, errores HTTP y caídas TCP"
date: "2026-11-12"
tags: ["Go", "CLI", "DevTools", "Testing", "Chaos Engineering", "Hexagonal Architecture"]
technologies: ["Go", "Net/HTTP", "CLI", "Reverse Proxy", "Hexagonal Architecture"]
results:
  - "Cero dependencias externas utilizando exclusivamente la biblioteca estándar de Go"
  - "Inyección probabilística y determinista por headers X-Havoc-* para suites de pruebas automatizadas"
  - "Simulación de cortes abruptos TCP RST, jitter de latencia y respuestas HTTP configurables"
link: "https://github.com/DiegoRiveraEstefano/MockHavoc"
archived: false
featured: true
showOnHome: true
---

## Visión General

**MockHavoc** es un proxy inverso ligero de ingeniería del caos diseñado para simular condiciones reales de inestabilidad de red, degradación de latencia y fallos de servicios entre clientes locales y backends en desarrollo.

Construido completamente con la biblioteca estándar de **Go** sin dependencias externas, permite validar la resiliencia, políticas de *retry*, *timeouts* y *circuit breakers* en entornos locales y pipelines de QA.

## Arquitectura Hexagonal (Ports & Adapters)

* **Domain (`internal/core/domain`)**: Entidades centrales, modelos de configuración, reglas de interrupción y validación estricta.
* **Ports (`internal/core/ports`)**: Interfaces primarias y secundarias (`HavocService`, `Disruptor`, `Forwarder`, `ConnectionDropper`).
* **Inbound Adapters**: CLI basada en flags, servidor HTTP con `http.Hijacker` para cierres TCP abruptos (`TCP RST`) y endpoint `/_mockhavoc/status` para diagnóstico en tiempo real.
* **Outbound Adapters**: Motor probabilístico de caos con soporte de overrides por request (`X-Havoc-*`) y proxy inverso con apagado elegante (*graceful shutdown* ante `SIGINT`/`SIGTERM`).

```
[Cliente / Test Suite] ---> [MockHavoc (:9000)] ---> [Chaos Engine (PRNG / Headers)] ---> [Upstream Backend]
                                  |
                         [/_mockhavoc/status]
```
