---
title: "360° Virtual Tour Demo"
description: "Recorrido virtual 360° interactivo de alto rendimiento construido con Preact, TypeScript, WebGL y Three.js"
date: "2026-11-13"
tags: ["Frontend", "360", "WebGL", "TypeScript", "Preact", "Three.js"]
technologies: ["TypeScript", "Preact", "Three.js", "WebGL", "Vite", "CSS3"]
results:
  - "Proyección equirectangular WebGL fluida con huella mínima (~3KB core con Preact 10)"
  - "Estilos puros en CSS3 sin dependencias de frameworks ni sobrecarga de bundle"
  - "Endurecimiento de seguridad en cadena de suministro npm/pnpm (cooldown de releases y bloqueo de scripts)"
link: "https://github.com/DiegoRiveraEstefano/360-tour-demo"
image: "/images/projects/360-tour-demo/modal-inicio.png"
images:
  - src: "/images/projects/360-tour-demo/modal-inicio.png"
    caption: "Pantalla de bienvenida de la plataforma industrial 360° (8 estaciones, 4K, 60 FPS WebGL)"
  - src: "/images/projects/360-tour-demo/indice-estaciones.png"
    caption: "Panel lateral del Índice del Tour con navegación entre las 8 estaciones registradas"
  - src: "/images/projects/360-tour-demo/visor-taller-central.png"
    caption: "Visor panorámico equirectangular WebGL en Estación 01: Taller Central de Mantención"
  - src: "/images/projects/360-tour-demo/visor-nave-espesamiento.png"
    caption: "Visor 360° con controles flotantes en Estación 04: Nave de Espesamiento y Relaves"
archived: false
featured: false
showOnHome: true
---

## Visión General

**360° Virtual Tour Demo** es una aplicación web ligera e interactiva para recorridos virtuales panorámicos diseñada para instalaciones industriales y entornos de ingeniería, priorizando el rendimiento de renderizado WebGL y la seguridad de dependencias.

## Arquitectura Frontend & Seguridad

* **Motor 360° WebGL**: Basado en `@photo-sphere-viewer/core` y **Three.js** para navegación panorámica fluida con zoom, paneo y transiciones dinámicas.
* **UI Minimalista**: Construida con **Preact 10**, **TypeScript 5** estricto, **Vite 6** y CSS3 puro con variables nativas y transformaciones aceleradas por GPU.
* **Supply Chain Hardening**: Configuración estricta en `pnpm` y `.npmrc` con bloqueo de scripts de ciclo de vida (`ignore-scripts=true`), periodo de cuarentena de 24h (`minimumReleaseAge`) y rechazo de subdependencias exóticas.
