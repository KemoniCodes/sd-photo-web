import { defineField } from "sanity";

const aboutPage = {
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "profileImage",
      title: "Profile Image",
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
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "featuredBrands",
      title: "Featured Brands",
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
    }),
  ],
};

export default aboutPage;
