export type CollectionType = {
  [x: string]: any;
  _id: string;
  collectionTitle?: string;
  slug: {
    current: string;
  };
  hoverColor?: string;
  mainImage?: {
    image: string;
    alt: string;
  };
  images?: [
    {
      image: string;
      alt: string;
    }
  ];
};

export type AboutType = {
  profileImage: {
    image: string;
    alt: string;
  };
  bio: string;
  email: string;
  featuredBrands: [
    {
      image: string;
      alt: string;
    }
  ]
}

export type HomeType = {
  [x: string]: any;
  homeVideo: {
    video: string;
    alt: string;
  }
}
  
