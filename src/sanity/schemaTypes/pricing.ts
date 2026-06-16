import {defineField, defineType} from "sanity";

export const pricingType = defineType({
  name: "pricing",
  title: "Pricing Plan",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Plan Name",
      type: "string",
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),

    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{type: "string"}],
    }),
  ],
});