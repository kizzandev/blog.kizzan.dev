---
layout: '@layouts/LayoutMDArticle.astro'

status: published

title: Blog Init
description: Referencia de estilo completa para la amplia gama de formatos en este blog, mostrando la representación visual de cada estilo al renderizarlo.
author: Kevin Zanzi

pubDate: '2024-01-24'
lastMod: '2024-01-24'

image:
  url: '/favicon.svg'
  alt: 'favicon'

tags: [init, blog, blogging]
---

Los blogs tienen artículos _-- oh gran sabiduría --_ y los artículos tienen estilos. Este artículo es una referencia de estilo completa para la amplia gama de formatos en este blog, mostrando la representación visual de cada estilo al renderizarlo.

## Empezamos con el título más frecuente

El título más frecuente es el **H2**, pues divide cada sección del artículo. Lo podemos apreciar justo acá arriba.

### Un título para departamentalizar contenido

Un **H3** es un título que se usa para departamentalizar contenido. Es decir, para dividir una sección en subsecciones.

#### Subdepartamentalizando la departamentalización del contenido

Un **H4** es un título que se usa para subdepartamentalizar contenido. Es decir, para dividir una subsección en subsubsecciones. Además el la subdivisión más pequeña que se usa en este blog.

## Las imágenes y sus descripciones

Las imágenes son herramientas visuales que ayudan a entender mejor el contenido, y pueden o no poseer una descripción. A continuación se muestra una imagen con y sin descripción.

![Foto de Kevin Zanzi](/me.webp 'Foto de Kevin Zanzi')

![Foto de Kevin Zanzi](/me.webp 'Foto de Kevin Zanzi')
_Foto de Kevin Zanzi_

## Código

Hay ocasiones en las que se necesita mostrar código, y para eso se usa un bloque de código.

Por un lado tenes el bloque de código, que se usa para mostrar código de una manera más visual.

```js
const toAdd = [1, 2, 3, 4, 5];
const addNums = (nums) => nums.reduce((acc, num) => acc + num, 0);
console.log(addNums(toAdd));
```

## Tablas

Las tablas son una forma de mostrar información de **_manera ordenada_** y **_visual_**. Por ejemplo podemos mostrar una tabla con información de personas.

| Nombre | Edad | Profesión                 |
| ------ | ---- | ------------------------- |
| Kevin  | 24   | Desarrollador de software |
| Juan   | 30   | Diseñador gráfico         |
| María  | 28   | Contadora                 |

## Una caja llamativa

`Las cajas llamativas son una forma de resaltar información importante.`

## Una cita con una pers.. digo, un texto

Existen dos estilos de citas, por un lado se encuentra la citación a una frase o texto.

> _Quien le de un laburo a Kevin será un genio aun mayor que yo <span style="white-space: nowrap;">- Albert Einstein</span>_

Por otro lado, se encuentra la citación en forma de bloque, por ejemplo, a un mail.

> **Ejemplo de email**
>
> **From:** Albert Einstein &lt;albert@kizen.dev&gt;
>
> **To:** Kevin Zanzi &lt;hola@kizen.dev&gt;
>
> **Subject:** Laburo
>
> &nbsp;
>
> Hola Kevin, ya les informé mi opinión sobre vos. Saludos, Albert.

## Listas

Las listas son una forma de mostrar información de manera ordenada o desordenada; ambas pueden ser anidadas.

### Desordenadas

Se pueden utilizar, por ejemplo, para mostrar una lista de tareas.

- Tarea 1
- Tarea 2
  - Subtarea 1
  - Subtarea 2
    - Subsubtarea 1
    - Subsubtarea 2

### Ordenadas

Se pueden utilizar, por ejemplo, para mostrar una lista de pasos.

1. Paso 1
2. Paso 2
   1. Subpaso 1
   2. Subpaso 2
      1. Subsubpaso 1
      2. Subsubpaso 2

## Pequeños cajones

<section class="details-summary" >
  <details>
    <summary>I'm a summary!</summary>
  </details>
  <article>
    <p>I'm a details element! Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
  </article>
</section>

---

<section class="details-summary" >
  <header>
    <span onclick="this.parentElement.toggleAttribute('aria-expanded')" aria-expanded="false">I'm a summary!</span>
  </header>
  <article>
    <p>I'm a details element! Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
  </article>
</section>

---

### Grupos de pequeños cajones

<article class="details-group">
  <section class="details-summary" >
    <details>
      <summary>I'm a summary!</summary>
    </details>
    <article>
      <p>I'm a details element! Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
    </article>
  </section>
  <section class="details-summary" >
    <details>
      <summary>I'm a summary!</summary>
    </details>
    <article>
      <p>I'm a details element! Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
    </article>
  </section>
</article>

## Y por ende,

Fin
