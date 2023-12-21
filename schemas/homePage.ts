import { defineField } from "sanity";

const homePage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hpVideo",
      title: "Homepage Video",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
  ],
};

export default homePage;
