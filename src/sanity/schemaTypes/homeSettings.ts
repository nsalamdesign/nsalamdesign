import {defineField, defineType} from "sanity";

export const homeSettingsType = defineType({
  name: "homeSettings",
  title: "Home Settings",
  type: "document",

  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),

    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
    }),

    defineField({
      name: "philosophyTitle",
      title: "Philosophy Title",
      type: "string",
    }),

    defineField({
      name: "philosophyText",
      title: "Philosophy Text",
      type: "text",
    }),

    defineField({
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
    }),

    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
    }),
  ],
});