/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "foods",
  title: "Foods",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "coverImage",
      title: "CoverImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "categories" } }],
    },
  ],
};
