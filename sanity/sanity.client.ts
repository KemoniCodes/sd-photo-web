import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "00nf1c6w",
  dataset: "production",
  apiVersion: "2023-11-07",
  useCdn: false,
};

const client = createClient(config);

export default client;