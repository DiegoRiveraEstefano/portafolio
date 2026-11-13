---
title: "JTE Zed Extension"
description: "Extensión de lenguaje para Java Template Engine (JTE) en el editor Zed con Tree-sitter, inyecciones y LSP"
date: "2026-11-13"
tags: ["DevTools", "Editor Extension", "Tree-sitter", "LSP", "Zed"]
technologies: ["JavaScript", "Tree-sitter", "LSP", "Zed", "JTE", "Java"]
results:
  - "Resaltado de sintaxis con gramática Tree-sitter para archivos .jte y .kte"
  - "Inyección multilenguaje integrada para Java, HTML, CSS y JavaScript embebidos"
  - "Autocompletado y formateo automático integrando vscode-html-language-server vía LSP"
link: "https://github.com/DiegoRiveraEstefano/jte-zed-extension"
archived: false
featured: true
showOnHome: true
---

## Visión General

**JTE Zed Extension** añade soporte completo de lenguaje para **Java Template Engine (JTE)** en el editor **Zed**, cubriendo tanto archivos `.jte` como `.kte` (Kotlin).

## Capacidades Técnicas

* **Gramática & Resaltado (Tree-sitter)**: Soporte completo para directivas (`@param`, `@import`, `@template`, `@raw`), estructuras de control (`@if`, `@for`), expresiones (`${...}`, `$unsafe{...}`, `!{...}`) y comentarios JTE.
* **Inyecciones de Lenguaje**: Resaltado contextual embebido de **Java** en expresiones y parámetros, **HTML** en el cuerpo del template, **CSS** dentro de `<style>` y **JavaScript** en bloques `<script>`.
* **Integración LSP & Editor**: Provisión automática de `vscode-html-language-server`, emparejamiento de corchetes, reglas de indentación y atajos de comentarios.
