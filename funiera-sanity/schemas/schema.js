import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { user, account } from "next-auth-sanity/schemas";

import Product from "./Product";
import Category from "./Category";
import Room from "./Room";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([Product, Room, Category, user, account]),
});
