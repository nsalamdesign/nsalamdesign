import {defineField, defineType} from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",

  fields: [
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
     name: "order",
     title: "Display Order",
     type: "number",
     initialValue: 0,
    validation: (Rule) => Rule.required().min(0),
     }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    }),
  ],
});