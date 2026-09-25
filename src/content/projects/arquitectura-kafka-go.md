---
title: "Arquitectura de Servicios con Kafka y Go"
description: "Backend para ingesta y procesamiento de datos IoT de alta concurrencia"
date: "2025-10-01"
tags: ["Backend", "Go", "Kafka", "Microservices", "Distributed Systems"]
technologies: ["Go", "Apache Kafka", "Docker", "PostgreSQL"]
results:
  - "Procesamiento de eventos en tiempo real con alta concurrencia"
  - "Arquitectura desacoplada y tolerante a fallos"
  - "Ingesta masiva de telemetría IoT con almacenamiento persistente"
link: "https://github.com/DiegoRiveraEstefano"
archived: false
featured: true
showOnHome: false
---

## Visión General

Plataforma backend distribuida diseñada para la ingesta masiva, desacoplamiento y persistencia de eventos de telemetría emitidos por flotas de dispositivos IoT.

El objetivo fue reemplazar un cuello de botella sincrónico HTTP tradicional por una arquitectura orientada a eventos (*Event-Driven Architecture*) basada en **Apache Kafka** y servicios consumidores concurrentes construidos en **Go**.

## Topología del Sistema

```
[Dispositivos IoT] ---> [Gateway API Ingesta] ---> [Kafka Topic: telemetry.events]
                                                           |
                                      +--------------------+--------------------+
                                      |                                         |
                            [Consumer Group A (Go)]                   [Consumer Group B (Go)]
                                      |                                         |
                            [Validación & Métricas]                   [Normalización & Batch]
                                      |                                         |
                              [Redis Stream / Cache]                  [PostgreSQL Persistence]
```

1. **Ingestión**: API Gateway liviana que recibe payloads JSON, valida esquemas y publica asíncronamente en tópicos particionados de Kafka.
2. **Consumo Concurrente**: Trabajadores (*workers*) en Go implementando `sync.WaitGroup`, canales y goroutines para procesar mensajes en paralelo sin bloquear la lectura del broker.
3. **Persistencia Eficiente**: Estrategia de inserción por lotes (*batch inserts*) hacia PostgreSQL, reduciendo la contención de transacciones en un 80%.

## Principales Decisiones de Ingeniería

* **Particionamiento Estratégico**: Uso de identificadores de dispositivo como clave de partición en Kafka para preservar el orden secuencial estricto de eventos por dispositivo individual.
* **Control de Backpressure**: Implementación de límites de búfer interno en los consumidores en Go para proteger la base de datos relacional contra picos imprevistos de tráfico.
* **Contenedorización Modular**: Despliegue reproducible con Docker Compose integrando salud de nodos (`healthchecks`) y migración automatizada de esquemas SQL.
