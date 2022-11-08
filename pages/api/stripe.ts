import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-08-01",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const items: CartItemProps[] = req.body.items;

    const transformedItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.product.name,
          images: [item.product.images[0].url],
        },
        unit_amount: item.product.price * 100,
      },
      quantity: item.qty,
    }));

    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],
        line_items: transformedItems,
        payment_intent_data: {},
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/`,
        metadata: {
          images: JSON.stringify(
            items.map((item) => item.product.images[0].url)
          ),
        },
      };

      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (error) {
      const errMessage =
        error instanceof Error ? error.message : "Internal Server Error";
      res.status(500).json({ statusCode: 500, message: errMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
