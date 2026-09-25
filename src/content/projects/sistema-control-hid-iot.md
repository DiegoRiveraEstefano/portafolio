---
title: "Sistema de Control HID & Coprocesamiento IoT"
description: "Sistema de control de dispositivos móviles basado en arquitectura maestro–esclavo"
date: "2025-12-01"
tags: ["IoT", "Embedded Systems", "Python", "CI/CD", "Hardware"]
technologies: ["Python", "Raspberry Pi", "GitHub Actions", "UART/I2C"]
results:
  - "Comunicación hardware robusta y determinista"
  - "Compilación cruzada y pipelines CI/CD automatizados"
  - "Emulación HID de latencia ultrabaja"
link: "https://github.com/DiegoRiveraEstefano"
archived: false
featured: true
showOnHome: true
---

## Visión General del Sistema

Este proyecto implementa una solución de hardware y software para el control programático de dispositivos móviles a través de una arquitectura maestro–esclavo distribuida entre una unidad de procesamiento central (**Raspberry Pi 4**) y un microcontrolador secundario (**Raspberry Pi Pico**).

La necesidad principal radicaba en interactuar con interfaces táctiles y de periféricos en dispositivos móviles sin requerir privilegios de root ni software auxiliar en el dispositivo receptor, garantizando tiempos de respuesta en milisegundos y reproducibilidad en pruebas automatizadas.

## Arquitectura de Hardware & Comunicación

El sistema opera bajo un protocolo de bus serie bidireccional estructurado:

1. **Unidad Maestra (Raspberry Pi 4)**:
   * Ejecuta el orquestador principal en Python.
   * Procesa secuencias de instrucciones de alto nivel, lógica de control y validación de estados.
   * Transmite tramas de bytes encapsuladas con CRC a través de bus **UART / I2C**.
2. **Coprocesador de Entrada (Raspberry Pi Pico)**:
   * Emula un dispositivo USB compuesto estándar (**USB Human Interface Device - HID**).
   * Interpreta comandos de bajo nivel enviados por el maestro y genera eventos de teclado, ratón o puntero absoluto a nivel de firmware.

```
+-------------------+      UART / I2C      +-------------------+      USB HID       +--------------------+
|  Raspberry Pi 4   | -------------------> | Raspberry Pi Pico | -----------------> | Dispositivo Móvil  |
|  (Lógica & Tests) | <------------------- |  (Firmware Emul)  |                    | (Target Device)    |
+-------------------+      Telemetría      +-------------------+                    +--------------------+
```

## Retos Técnicos Superados

* **Sincronización de Buses**: Diseño de un protocolo de tramas con cabecera de sincronismo, payload binario y suma de comprobación para evitar corrupciones por ruido electromagnético en las líneas de datos.
* **Tolerancia a Fallos**: Implementación de un watchdog en el microcontrolador y timeouts estrictos en el orquestador Python para recuperación automática en caso de desbordamiento de búfer.
* **Automatización CI/CD**: Configuración de GitHub Actions con entornos de compilación cruzada hacia arquitecturas ARM64 y pruebas sintéticas de verificación de protocolo.
