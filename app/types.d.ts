export interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  category: string;
  categoryImage: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<{ quantity: number; item: string }>;
  gallery: {
    first: { url: string };
    second: { url: string };
    third: { url: string };
  };
  others: Array<{
    slug: string;
    name: string;
    image: string;
  }>;
}
