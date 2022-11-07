export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 90,
      },
    },
    {
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "categoryType" }],
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "cloudinary.asset",
      options: {
        hotspot: true,
      },
    },
  ],
};
