export const fetchProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);

  const data = await res.json();
  const products: Product[] = data.products;

  return products;
};

export const fetchProductsByCategory = async (category: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/productsByCategory?category=${category}`
  );

  const data = await res.json();
  const products: Product[] = data.products;

  return products;
};
