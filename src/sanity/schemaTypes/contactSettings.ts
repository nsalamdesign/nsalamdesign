import { defineField, defineType } from "sanity";

export const contactSettingsType = defineType({
  name: "contactSettings",
  title: "Contact Settings",
  type: "document",

  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "whatsapp",
      title: "WhatsApp URL",
      type: "url",
    }),

    defineField({
      name: "fiverr",
      title: "Fiverr URL",
      type: "url",
    }),

    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),

    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),

    defineField({
      name: "behance",
      title: "Behance URL",
      type: "url",
    }),
  ],
});