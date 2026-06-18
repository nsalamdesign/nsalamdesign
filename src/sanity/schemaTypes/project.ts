import {defineField, defineType} from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",

  fields: [
defineField({
  name: "important",
  title: "Important Project",
  type: "boolean",
  initialValue: false,
}),

defineField({
  name: "industry",
  title: "Industry",
  type: "string",
}),

defineField({
  name: "year",
  title: "Year",
  type: "string",
}),

defineField({
  name: "services",
  title: "Services",
  type: "array",
  of: [{ type: "string" }],
}),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{type: "category"}],
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
    }),

    defineField({
  name: "caseStudy",
  title: "Case Study",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet List", value: "bullet" },
        { title: "Numbered List", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Underline", value: "underline" },
        ],
        annotations: [],
      },
    },
    {
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}),

    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{type: "image"}],
    }),
  ],
});
