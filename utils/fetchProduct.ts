export const fetchProduct = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/?slug=${slug}`
  );

  const data = await res.json();
  const products: Product[] = data.products;

  return products;
};
