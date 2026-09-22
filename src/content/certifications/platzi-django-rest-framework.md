---
title: "Curso de Django Rest Framework"
platform: "Platzi"
issueDate: "2026-04"
displayDate: "Abril 2026"
credentialUrl: "https://platzi.com/p/diegorivera/curso/django-rest-framework/diploma/detalle/"
status: "VERIFIED"
topic: "ID_TOPIC: APIs RESTful, Serialización relacional, Autenticación JWT, ViewSets y Routers"
skills: ["Django REST Framework", "Servicios web de RESTful", "JSON Web Token (JWT)", "JSON", "Python", "Backend Development"]
featured: true
---

## Resumen de la Acreditación

Certificación técnica especializada en la arquitectura y desarrollo de APIs RESTful empresariales con **Django REST Framework (DRF)**, abarcando desde serializadores de modelos complejos hasta esquemas de autenticación basada en JSON Web Tokens (JWT) y políticas granulares de permisos.

## Competencias Técnicas Dominadas

* **Serializadores Avanzados**: Validación multinivel de campos, serializadores anidados relacionales e hiperenlazados (*HyperlinkedModelSerializer*).
* **Controladores & ViewSets**: Uso de `GenericAPIView`, mixins y `ModelViewSet` combinados con `DefaultRouter` para generación automática de endpoints canónicos.
* **Seguridad & Autenticación JWT**: Implementación de flujos de emisión, renovación (`refresh tokens`) y expiración de credenciales con validación criptográfica de claims.
* **Paginación & Filtrado**: Paginación por cursor y límite, filtros dinámicos mediante `django-filter` y optimización de consultas SQL subyacentes con `select_related` y `prefetch_related`.

```
[Cliente HTTP / SPA] ---> [JWT Auth Middleware] ---> [DRF ModelViewSet]
                                                             |
                                                   [ModelSerializer Validation]
                                                             |
                                                   [Django ORM (QuerySet)]
                                                             |
                                                   [PostgreSQL DB Engine]
```

## Aplicación en Producción

Estos patrones de arquitectura de API fueron implementados directamente en proyectos para clientes en modalidad **Freelance** y aplicados en servicios de integración de datos en **Nolan AI Software**.
