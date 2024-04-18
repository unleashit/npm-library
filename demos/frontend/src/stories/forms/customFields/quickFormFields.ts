import { z } from 'zod';
import { type CustomField } from '@unleashit/common';

export const qfSurveyFields: CustomField[] = [
  {
    element: 'input',
    type: 'text',
    name: 'first_name',
    label: 'First Name',
    focus: true,
  },
  {
    element: 'input',
    type: 'text',
    name: 'last_name',
    label: 'Last Name',
  },
  {
    element: 'input',
    type: 'email',
    name: 'email',
    label: 'Email',
  },
  {
    element: 'select',
    type: 'text',
    name: 'favorite_author',
    label: 'Who is your favorite author?',
    options: [
      ['-- select --', ''],
      ['James Joyce', 'James Joyce'],
      ['Mary Shelly', 'Mary Shelly'],
      ['Herman Melville', 'Herman Melville'],
      ['Ursula Leguin', 'Ursula Leguin'],
      ['JK Rowling', 'JK Rowling'],
      ['Leo Tolstoy', 'Leo Tolstoy'],
      ['Lewis Caroll', 'Lewis Caroll'],
      ['Other', 'Other'],
    ],
  },
  {
    element: 'input',
    type: 'checkbox',
    name: 'timezone',
    label: 'Please confirm you are in the UTC-12:00 time zone?',
  },
  {
    element: 'input',
    type: 'checkbox',
    name: 'chocolate',
    label: 'Do you like chocolate?',
  },
  {
    element: 'input',
    type: 'text',
    name: 'feel',
    label: 'How do you feel?',
  },
];

export const qfSurveySchema = z.object({
  first_name: z.string().max(50, { message: 'Name is too long' }).default(''),
  last_name: z.string().max(50, { message: 'Name is too long' }).default(''),
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
  favorite_author: z.string().nonempty({ message: 'Please select an author' }),
  timezone: z.boolean(),
  chocolate: z.boolean(),
  feel: z.string().nonempty({ message: 'How do you feel?' }).max(50),
});

export const qfRecipeFields: CustomField[] = [
  {
    element: 'input',
    type: 'text',
    name: 'title',
    label: 'Title',
    focus: true,
  },
  {
    element: 'select',
    type: 'text',
    name: 'category',
    label: 'Category',
    options: [
      ['-- select --', ''],
      ['Appetizer', 'Appetizer'],
      ['Soup', 'soup'],
      ['Salad', 'salad'],
      ['Entree', 'entree'],
      ['Dessert', 'dessert'],
    ],
  },
  {
    element: 'textarea',
    type: 'text',
    name: 'description',
    label: 'Short description of the dish',
  },
  {
    element: 'textarea',
    type: 'text',
    name: 'ingredients',
    label: 'Ingredients',
  },
  {
    element: 'textarea',
    type: 'text',
    name: 'instructions',
    label: 'Preparation Instructions',
  },
];

export const qfRecipeSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Please enter a title' })
    .min(5, { message: 'Title is too short' })
    .max(50, { message: 'Title is too long' })
    .default(''),
  category: z.string().nonempty({ message: 'Please select a category' }),
  description: z
    .string()
    .min(10, { message: 'Description is too short' })
    .max(500, { message: 'Description is too long' })
    .default(''),
  ingredients: z
    .string()
    .min(10, { message: 'Ingredients is too short' })
    .max(800, { message: 'Ingredients is too long' })
    .default(''),
  instructions: z
    .string()
    .min(10, { message: 'Preparation instructions is too short' })
    .max(800, { message: 'Preparation instructions is too long' })
    .default(''),
});
