import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { muxInput } from "sanity-plugin-mux-input";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "sd-photo-web",

  projectId: "00nf1c6w",
  dataset: "production",

  basePath: "/studio",

  plugins: [deskTool(), visionTool(), muxInput({mp4_support: 'standard'})],

  schema: {
    types: schemaTypes,
  },
});
