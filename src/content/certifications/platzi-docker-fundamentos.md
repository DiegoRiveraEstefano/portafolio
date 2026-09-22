---
title: "Curso de Docker: Fundamentos"
platform: "Platzi"
issueDate: "2026-04"
displayDate: "Abril 2026"
credentialId: "3460baf0-746a-46a7-bc23-cf9062e36f40-8caad0a2-27e9-4fde-b41b-b4ecf39f48b2"
credentialUrl: "https://platzi.com/p/diegorivera/curso/docker/diploma/detalle/"
status: "VERIFIED"
topic: "ID_TOPIC: Contenedorización de microservicios, redes virtuales, volúmenes y Docker Compose"
skills: ["Docker", "DevOps", "Linux", "Container Orchestration"]
featured: true
---

## Resumen de la Acreditación

Certificación técnica que acredita el dominio de la tecnología de contenedores **Docker**, abarcando el ciclo de vida completo de imágenes y contenedores, aislamiento de procesos en Linux (namespaces & cgroups), persistencia mediante volúmenes y orquestación multinodo con Docker Compose.

## Competencias Técnicas Dominadas

* **Construcción de Imágenes Optimizadas**: Escritura de `Dockerfile` con compilaciones multi-etapa (*multi-stage builds*) para reducir drásticamente el tamaño final de las imágenes y la superficie de ataque.
* **Aislamiento & Redes**: Configuración de redes virtuales bridge, overlay y host, implementando aislamiento estricto entre capas frontend, backend y almacenamiento.
* **Persistencia & Volúmenes**: Gestión de volúmenes persistentes y montajes bind para bases de datos relacionales (PostgreSQL) y brokers de eventos (Kafka).
* **Orquestación con Docker Compose**: Definición declarativa de stacks de infraestructura con control de dependencias (`depends_on`), comprobaciones de salud (`healthchecks`) y límites de memoria/CPU.

```
+--------------------------------------------------------------+
|                     Docker Host Engine                       |
|  +--------------------+  +--------------------+  +---------+ |
|  | Container: API Go  |  | Container: Kafka   |  | DB: PG  | |
|  | (Alpine Multi-Stg) |  | (Distributed Node) |  | (Volume)| |
|  +---------+----------+  +---------+----------+  +----+----+ |
|            | Bridge Network (172.20.0.0/16)           |      |
+------------+------------------------------------------+------+
```

## Aplicación en Producción

Aplicado directamente en la arquitectura del **Proyecto de Título** para orquestar microservicios en Go, clusters de Kafka y bases de datos PostgreSQL, garantizando reproducibilidad idéntica entre entornos de desarrollo y producción.
