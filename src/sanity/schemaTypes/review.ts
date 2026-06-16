import {defineField, defineType} from "sanity";

export const reviewType = defineType({
  name: "review",
  title: "Review",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
    }),

    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),

    defineField({
      name: "review",
      title: "Review",
      type: "text",
    }),

    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
    }),
  ],
});