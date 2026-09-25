---
title: "Scanned PDF to Text"
description: "Pipeline de OCR y visión por computador para digitalización masiva y extracción estructurada de documentos"
date: "2023-05-10"
tags: ["OCR", "OpenCV", "Python", "Document Processing"]
technologies: ["Python", "Tesseract OCR", "OpenCV", "PyPDF2"]
results:
  - "Digitalización masiva de documentos físicos escaneados con alta resolución"
  - "Preprocesamiento de imágenes para reducción de ruido y corrección de rotación"
  - "Exportación estructurada en formatos JSON y texto plano"
link: "https://github.com/DiegoRiveraEstefano/scanned-pdf-to-text"
archived: false
featured: false
showOnHome: false
---

## Visión General

Herramienta especializada en el procesamiento por lotes de archivos PDF escaneados de baja calidad, contratos físicos digitalizados y facturas impresas para convertirlos en texto indexable y estructurado.

## Pipeline de Procesamiento de Imagen con OpenCV

1. **Conversión a Escala de Grises y Binarización Adaptativa**: Aplicación de algoritmos de umbralización (*Otsu Thresholding*) para separar nítidamente los caracteres del fondo.
2. **Corrección de Inclinación (*Deskewing*)**: Detección del ángulo de rotación de las líneas de texto mediante transformadas de Hough y reorientación automática previa al paso de OCR.
3. **Reducción de Ruido**: Filtros morfológicos y de mediana para eliminar motas de escaneo, manchas de tinta y sombras periféricas.
4. **Extracción con Tesseract**: Inferencia de caracteres con soporte de diccionarios en español e inglés, asignando puntuaciones de confianza por bloque de texto.
