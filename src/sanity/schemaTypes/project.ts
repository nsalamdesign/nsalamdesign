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
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{type: "image"}],
    }),
  ],
});