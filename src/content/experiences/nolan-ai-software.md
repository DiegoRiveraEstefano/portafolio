---
role: "Programador Full Stack"
company: "Nolan AI Software"
employmentType: "Jornada completa"
location: "En remoto"
period: "ene. 2026 — sept. 2026"
duration: "9 meses"
current: true
summary: "Desarrollo de soluciones de software escalables y profesionalización del ciclo de vida de desarrollo, elevando los estándares de calidad y la madurez de los procesos técnicos del equipo."
highlights:
  - "Diseño y construcción de aplicaciones web, APIs y microservicios robustos utilizando Python (Litestar, SQLAlchemy 2.x, Pydantic) y JavaScript."
  - "Diseño, optimización y mantenimiento de bases de datos relacionales, asegurando integridad transaccional y alto rendimiento."
  - "Implementación de interfaces dinámicas y modulares utilizando Jinja2, HTML5, CSS3 y JavaScript moderno."
  - "Cultura de Ingeniería: Adopción de estándares de codificación, revisiones sistemáticas de código (Code Reviews) y organización de repositorios que redujeron drásticamente la deuda técnica."
  - "Documentación & QA: Elaboración de documentación técnica exhaustiva y adopción de buenas prácticas de ingeniería para garantizar la continuidad operativa de los sistemas."
technologies:
  - "Python"
  - "Litestar"
  - "SQLAlchemy 2.x"
  - "Pydantic"
  - "JavaScript"
  - "LangGraph"
  - "Docker"
  - "Code Reviews"
---

## Resumen del Rol & Alcance

Como **Programador Full Stack** en **Nolan AI Software**, asumí la responsabilidad de diseñar, implementar y mantener arquitecturas de software escalables en un entorno 100% remoto, colaborando activamente en la profesionalización de los flujos de trabajo técnicos y la reducción continua de deuda técnica.

## Arquitectura Backend & Microservicios

* **Framework Litestar**: Adopción de **Litestar** (anteriormente Starlite) como núcleo backend de alto rendimiento, aprovechando su soporte nativo para programación asíncrona (`asyncio`), inyección de dependencias estricta y bajo consumo de memoria.
* **Capa de Persistencia con SQLAlchemy 2.x**: Implementación del nuevo paradigma declarativo 2.0 y uso de sesiones asíncronas (`AsyncSession`), optimizando consultas complejas mediante técnicas de `selectinload` y `joinedload` para eliminar consultas $N+1$.
* **Modelado de Tipos con Pydantic**: Validación rigurosa de entradas y salidas en endpoints REST, garantizando contratos de API estables y serialización eficiente.

```
[Cliente Web / Frontend] ---> [Litestar ASGI Application]
                                      |
                      [Pydantic Contracts & Validation]
                                      |
                       [Domain Services & Business Logic]
                                      |
                    [SQLAlchemy 2.x Async Engine / ORM]
                                      |
                   [Bases de Datos Relacionales Optimizadas]
```

## Frontend & Experiencia de Usuario

* Construcción de interfaces reactivas y modulares integrando **Jinja2**, HTML5 semántico y CSS3 con JavaScript moderno sin dependencias innecesarias.
* Optimización de flujos de interacción para editores y usuarios finales, priorizando la velocidad de carga de pantalla y la accesibilidad.

## Transformación Técnica & Cultura de Ingeniería

1. **Estandarización de Code Reviews**: Introducción de directrices de revisión de código por pares obligatorias previas a cada merge, fomentando el aprendizaje cruzado y detectando cuellos de botella de diseño temprano.
2. **Pipelines de Integración y Calidad**: Configuración de linters, formateadores automáticos (`ruff`, `mypy`) y baterías de pruebas unitarias/integración.
3. **Orquestación con LangGraph**: Experimentación e integración de flujos de agentes y grafos de ejecución dirigidos con **LangGraph** para tareas automatizadas complejas.
