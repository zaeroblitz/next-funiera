interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
  url: string;
}

interface Slug {
  _type: string;
  current: string;
}

interface CategoryType {
  name: string;
}

interface ProductCategory {
  _id: string;
  title: string;
}

interface Product {
  _id: string;
  name: string;
  slug: Slug;
  images: Image[];
  price: number;
  stock: number;
  description: string;
  categories: ProductCategory[];
}

interface Category {
  _id: string;
  title: string;
  slug: string;
  type: CategoryType[];
  thubnail: Image;
}

interface CartItemProps {
  product: Product;
  qty: number;
}

interface CartProps {
  items: CartItemProps[];
}
