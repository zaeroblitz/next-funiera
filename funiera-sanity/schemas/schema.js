import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { user, account } from "next-auth-sanity/schemas";

import Product from "./Product";
import Category from "./Category";
import CategoryType from "./CategoryType";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([Product, Category, CategoryType, user, account]),
});
