export default {
  name: "room",
  title: "Room",
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
      name: "thumbnail",
      title: "Thumbnail",
      type: "cloudinary.asset",
      options: {
        hotspot: true,
      },
    },
  ],
};
