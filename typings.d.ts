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

interface Category {
  _id: string;
  title: string;
  slug: Slug;
  thumbnail: Image;
}

interface Room {
  _id: string;
  title: string;
  slug: string;
  thumbnail: Image;
}

interface Product {
  _id: string;
  name: string;
  slug: Slug;
  images: Image[];
  price: number;
  stock: number;
  description: string;
  room: Room;
  category: Category;
}

interface ProductTagProps {
  _id: string;
  title: string;
  slug: string;
}

interface CartItemProps {
  product: Product;
  qty: number;
}

interface CartProps {
  items: CartItemProps[];
}

interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
}
