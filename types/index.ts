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

export type NavigationType = {
    _id: string;
    navLinks: {
      _type: 'object'; // Specify the _type field here
      navigationTitle: string;
      slug: string;
    }[];
  };
  
