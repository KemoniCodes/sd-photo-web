import { defineField } from "sanity";

const collection = {
  name: "collection",
  title: "Collection",
  type: "document",
  fields: [
    defineField({
      name: "collectionTitle",
      title: "Collection Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "collectionTitle",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
  
    defineField({
      name: "hoverColor",
      title: "Hover Color",
      type: "string",
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt",
        },
      ],
      validation: (rule) => rule.required(),
    }),
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt",
            },
          ],
        },
      ],
    },
  ],
};

export default collection;
