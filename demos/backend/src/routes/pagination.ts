import { Request, Response } from 'express';
import { faker } from '@faker-js/faker';

type QueryString = {
  count?: number;
  offset?: number;
  limit?: number;
};

export interface PaginationResponse {
  count?: number;
  data?: ReturnType<typeof randomBlogPost>[];
  error?: string;
}

const totalPosts = 500;
let data: ReturnType<typeof randomBlogPost>[] = [];

function randomBlogPost() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(Math.floor(Math.random() * 4 + 3)),
    content: faker.lorem.paragraphs(
      {
        min: 1,
        max: 4,
      },
      '<br/ ><br/>',
    ),
    author: faker.person.fullName(),
  };
}

function generateBlogData(total: number) {
  data = Array.from({ length: total }, () => randomBlogPost());
}

generateBlogData(totalPosts);

const pagination = (
  req: Request<QueryString>,
  res: Response<PaginationResponse>,
) => {
  const offset = Number(req.query.offset) || 0;
  const limit = Number(req.query.limit) || 20;
  const count = req.query.count === 'true';

  if (count) {
    return res.json({
      count: totalPosts,
    });
  }

  if (offset < 0) {
    return res.status(400).json({
      error: 'Offset cannot be negative',
    });
  }

  if (offset > totalPosts - 1) {
    return res.status(400).json({
      error: 'Offset is too high',
    });
  }

  if (limit > 50) {
    return res.status(400).json({
      error: 'Limit is too high',
    });
  }

  return res.json({
    data: data.slice(offset, offset + limit),
  });
};

export default pagination;
