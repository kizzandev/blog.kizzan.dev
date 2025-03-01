---
layout: '@layouts/LayoutMDArticle.astro'

status: published
isArchived: false
isAd: false

title: Blog Init
description: Referencia de estilo completa para la amplia gama de formatos en este blog, mostrando la representación visual de cada estilo al renderizarlo.
author: Kevin Zanzi

pubDate: '2024-02-04'

image:
  url: '/favicon.svg'
  alt: favicon

icon:
  url: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>
  alt: Icono de un lápiz

tags: [init, blog, blogging]
---

Los blogs tienen artículos _-- oh gran sabiduría --_ y los artículos tienen estilos. Este artículo es una referencia de estilo completa para la amplia gama de formatos en este blog, mostrando la representación visual de cada estilo al renderizarlo.

## Empezamos con el título más frecuente

El título más frecuente es el **H2**, pues divide cada sección del artículo. Lo podemos apreciar justo acá arriba.

### Un título para departamentalizar contenido

Un **H3** es un título que se usa para departamentalizar contenido. Es decir, para dividir una sección en subsecciones.

#### Subdepartamentalizando la departamentalización del contenido

Un **H4** es un título que se usa para subdepartamentalizar contenido. Es decir, para dividir una subsección en subsubsecciones. Además es la subdivisión más pequeña que se usa en este blog.

## Las imágenes y sus descripciones

Las imágenes son herramientas visuales que ayudan a entender mejor el contenido, y pueden o no poseer una descripción. A continuación se muestra una imagen con y sin descripción.

![Foto de Kevin Zanzi](/resume-site.png 'Foto de la página "cv.kizzan.dev"')

![Foto de Kevin Zanzi](/resume-site.png 'Foto de la página "cv.kizzan.dev"')
_Foto de la página "cv.kizzan.dev"_

## Código

Hay ocasiones en las que se necesita mostrar código, y para ello, se usa un bloque de código.

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
> **De:** Albert Einstein &lt;albert@mail.mail&gt;
>
> **Para:** Kevin Zanzi &lt;hola@mail.mail&gt;
>
> **Asunto:** Laburo
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

## Cajoncitos

Los cajoncitos permiten mostrar información de manera ordenada y desplegable. Ofrecen un título y un contenido que se muestra al hacer click en el título.

### Cajoncitos Solitarios

Un ejemplo de uso para un cajoncito solitario sería, por ejemplo, mostrar un mensaje de error.

<section class="details-summary" >
  <details>
    <summary>Estoy solito &rpar;:</summary>
  </details>
  <article>
    <p>¡Y así te quedarás!</p>
  </article>
</section>

---

### Cajoncitos en Grupo

Por otro lado, los cajoncitos en grupo permiten, por ejemplo, utilizarlos para mostrar una lista de preguntas frecuentes.

<article class="details-group">
  <section class="details-summary" >
    <details>
      <summary>¿Qué es un cajoncito?</summary>
    </details>
    <article>
      <p>Un cajoncito es un elemento que permite mostrar información de manera ordenada y desplegable. Ofrece un título y un contenido que se muestra al hacer click en el título.</p>
    </article>
  </section>
  <section class="details-summary" >
    <details>
      <summary>¿Cómo se usa un cajoncito?</summary>
    </details>
    <article>
      <p>Para usar un cajoncito, se debe <kbd>click</kbd> en el título. Al hacerlo, se desplegará el contenido del cajoncito.</p>
    </article>
  </section>
  <section class="details-summary" >
    <details>
      <summary>¿Cuántos cajoncitos se pueden usar?</summary>
    </details>
    <article>
      <p>¡La cantidad de cajoncitos que se pueden usar es ilimitada!</p>
    </article>
  </section>
  <section class="details-summary" >
    <details>
      <summary>¿Por qué los cajoncitos parecen ir en escalera?</summary>
    </details>
    <article>
      <p>Los cajoncitos parecen ir en escalera porque cada vez tienen más caracteres. Por ejemplo, esta pregunta tiene más caracteres que la anterior.</p>
    </article>
  </section>
</article>

## Y por ende,

Fin
