// production URL
// `http://localhost:3000/api/revalidate?path=/&secret=${process.env.MY_SECRET_TOKEN}`;
// `http://localhost:3000/api/revalidate?secret=a72650194a7026644811db3865b43d5f`;

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(404).json({ message: 'Invalid Token' });
  }

  const path = req.query.path as string;

  await res.revalidate(path);

  return res.json({ revalidated: true });
}
