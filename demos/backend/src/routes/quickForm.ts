import { Request, Response } from 'express';
import { isValidEmail, ValidationErrors, validator } from '../helpers';

type ContactPostBody = {
  email?: string;
  message?: string;
};

type SurveyPostBody = {
  first_name?: string;
  last_name?: string;
  email?: string;
  favorite_author?: string;
  timezone?: boolean;
  chocolate?: boolean;
  feel?: string;
};

type RecipePostBody = {
  title?: string;
  category?: string;
  description?: string;
  ingredients?: string;
  instructions?: string;
};

export interface QuickFormResponse {
  success: boolean;
  errors: ValidationErrors<ContactPostBody>;
}

function contactValidations({ email, message }: ContactPostBody) {
  const errors: ValidationErrors<ContactPostBody> = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email must be valid';
  }

  if (!message) {
    errors.message = 'Message is required';
  }

  if (message && message.includes('dinosaur')) {
    errors.root = 'Message should not contain dinosaur';
  }

  return errors;
}

function surveyValidations({
  email,
  // eslint-disable-next-line camelcase
  favorite_author,
  chocolate,
  feel,
}: SurveyPostBody) {
  const errors: ValidationErrors<SurveyPostBody> = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email must be valid';
  }
  // eslint-disable-next-line camelcase
  if (!favorite_author) {
    errors.favorite_author = 'Favorite author is required';
  }
  if (!feel) {
    errors.feel = 'You need to tell me how you feel';
  }

  if (!chocolate) {
    errors.root = 'Only chocolate lovers can take the survey';
    errors.chocolate = 'You must like chocolate';
  }

  return errors;
}

function recipeValidations({
  title,
  category,
  description,
  ingredients,
  instructions,
}: RecipePostBody) {
  const errors: ValidationErrors<RecipePostBody> = {};

  if (!title) {
    errors.title = 'Title is required';
  } else if (title.toLowerCase().includes('chocolate')) {
    errors.root = 'Title should not contain chocolate';
    errors.title = 'Title should not contain chocolate';
  }
  if (!category) {
    errors.category = 'Category is required';
  }
  if (!description) {
    errors.description = 'Description is required';
  }
  if (!ingredients) {
    errors.ingredients = 'Ingredients is required';
  }
  if (!instructions) {
    errors.instructions = 'Instructions is required';
  }

  return errors;
}

const quickForm = (req: Request, res: Response<QuickFormResponse>) => {
  const { type } = req.query ?? 'contact';

  let validations: (...args: Record<string, string>[]) => Record<string, any>;
  switch (type) {
    case 'survey':
      validations = surveyValidations;
      break;
    case 'recipe':
      validations = recipeValidations;
      break;
    default:
      validations = contactValidations;
  }

  const { errors, valid } = validator<ContactPostBody>(validations, req.body);

  res.status(valid ? 200 : 401);

  return res.json({
    success: valid,
    errors,
  });
};

export default quickForm;
