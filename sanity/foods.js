/* eslint-disable import/no-anonymous-default-export */
// schemas/food.js

export default {
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    // {
    //   name: 'id',
    //   title: 'ID',
    //   type: 'string',
    //   description: 'The unique ID of the food product',
    // },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the food product',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of the food product',
    },
    {
      name: 'image01',
      title: 'Image 01',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The first image of the food product',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'The category of the food product',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
      description: 'The description of the food product',
    },
  ],
};
