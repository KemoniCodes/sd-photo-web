export type CollectionType = {
  _id: string;
  collectionTitle: string;
  slug: string;
  hoverColor: string;
  mainImage: {
    image: string;
    alt: string;
  };
  images: [
    {
      image: string;
      alt: string;
    }
  ];
};
  
