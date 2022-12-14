import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../lib/client";

type Data = {
  products: Product[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const query = groq`
  *[_type == "product"] {
    _id, 
    name,
    slug, 
    images,
    price,
    stock,
    description,
    room->{_id, title},
    category->{_id, title},
  }
`;

  const products: Product[] = await client.fetch(query);
  res.status(200).json({ products });
}
