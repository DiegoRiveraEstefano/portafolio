---
title: "Clasificador de Tickets con ML"
description: "Microservicio para preprocesamiento y clasificación automática de tickets de soporte"
date: "2025-10-15"
tags: ["API", "Python", "FastAPI", "Docker", "Backend"]
technologies: ["Python", "FastAPI", "Pandas", "Docker"]
results:
  - "Reducción significativa de tiempos de enrutamiento manual"
  - "Clasificación con baja latencia en endpoints REST"
  - "Contenedorización lista para producción"
link: "https://github.com/DiegoRiveraEstefano/simple-rrss-ticket-categorizer"
archived: false
featured: true
showOnHome: true
---

## Visión General

Microservicio desarrollado para automatizar la categorización y asignación de tickets de asistencia técnica y soporte en entornos empresariales. El servicio procesa el texto no estructurado enviado por los usuarios, extrae características textuales clave y clasifica la solicitud en colas operativas correspondientes.

## Arquitectura del Servicio

* **Framework de Exposición**: API construida sobre **FastAPI**, aprovechando validación estricta de esquemas de entrada y salida mediante Pydantic y documentación interactiva OpenAPI.
* **Preprocesamiento de Texto**: Pipeline de normalización que elimina ruido, stopwords y normaliza caracteres especiales usando Pandas y expresiones regulares optimizadas.
* **Inferencia Ligera**: Despliegue del clasificador serializado cargado en memoria durante la inicialización del proceso (`lifespan event`) para evitar relecturas de disco en cada petición.

```
[Cliente Web / Webhook] ---> [POST /api/v1/classify]
                                     |
                             [Pydantic Validation]
                                     |
                            [Text Preprocessing]
                                     |
                           [Model Inference Engine]
                                     |
                          [Response: Category + Score]
```

## Beneficios Técnicos

1. **Latencia Predecible**: Tiempo medio de respuesta inferior a 45ms por ticket evaluado.
2. **Despliegue Aislado**: Empaquetado como imagen Docker multi-etapa con usuario no privilegiado y dependencias mínimas de sistema.
