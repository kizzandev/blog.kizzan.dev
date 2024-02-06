---
layout: '@layouts/LayoutMDArticleEn.astro'

status: published

title: Blog Init
description: Comprehensive style reference for the diverse range of formatting in this blog, showcasing the visual representation of each style when rendered.
author: Kevin Zanzi

pubDate: '2024-01-24'
lastMod: '2024-01-24'

image:
  url: '/favicon.svg'
  alt: 'favicon'

tags: [init, blog, blogging]
---

Blogs have articles _-- oh great wisdom --_ and articles have styles. This article is a comprehensive style reference for the diverse range of formatting in this blog, showcasing the visual representation of each style when rendered.

## We start with the most frequent title

The most frequent title is the **H2**, as it divides each section of the article. We can appreciate it just above.

### A title to departmentalize content

An **H3** is a title used to departmentalize content. That is, to divide a section into subsections.

#### Sub-departmentalizing the departmentalization of content

An **H4** is a title used to sub-departmentalize content. That is, to divide a subsection into sub-subsections. It is also the smallest subdivision used in this blog.

## Images and their descriptions

Images are visual tools that help to better understand the content, and may or may not have a description. Below is an image with and without a description.

![Photo of Kevin Zanzi](/me.webp 'Photo of Kevin Zanzi')

![Photo of Kevin Zanzi](/me.webp 'Photo of Kevin Zanzi')
_Photo of Kevin Zanzi_

## Code

There are times when you need to show code, and for that you use a code block.

```js
const toAdd = [1, 2, 3, 4, 5];
const addNums = (nums) => nums.reduce((acc, num) => acc + num, 0);
console.log(addNums(toAdd));
```

## Tables

Tables are a way to show information in an **_ordered_** and **_visual_** way. For example, we can show a table with information about people.

| Name  | Age | Profession         |
| ----- | --- | ------------------ |
| Kevin | 24  | Software Developer |
| John  | 30  | Data Scientist     |
| Mary  | 28  | Graphic Designer   |
| Maria | 28  | Accountant         |

## Shining box

`This is a shining box, it's used to highlight important information. It's a simple way to make the reader focus on a specific part of the content.`

## Blockquote

There are two different styles of blockquotes, one for phrases and another for paragraphs.

> _Whomever gives Kevin a job will be an even greater genius than I <span style="white-space: nowrap;">- Albert Einstein</span>_

And then there's the blockquote for paragraphs, such as emails or letters.

> **Example of email**
>
> **From:** Albert Einstein &lt;albert@mail.mail&gt;
>
> **To:** Kevin Zanzi &lt;hola@mail.mail&gt;
>
> **Subject:** Job
>
> &nbsp;
>
> Hello Kevin, I've already informed them of my opinion about you. Regards, Albert.

## Lists

Lists are a way to show information in an ordered or unordered way; both can be nested.

### Unordered

They can be used, for example, to show a list of tasks.

- Task 1
- Task 2
  - Subtask 1
  - Subtask 2
    - Subsubtask 1
    - Subsubtask 2

### Ordered

They can be used, for example, to show a list of steps.

1. Step 1
2. Step 2
   1. Substep 1
   2. Substep 2
      1. Subsubstep 1
      2. Subsubstep 2

<!-- ## Small boxes

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
</article> -->

## And lastly,

The end
