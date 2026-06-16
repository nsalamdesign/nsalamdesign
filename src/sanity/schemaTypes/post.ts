import {defineField, defineType} from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",

  fields: [
    defineField({
  name: "order",
  title: "Display Order",
  type: "number",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),

    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {type: "block"},
        {type: "image"},
      ],
    }),
  ],
});