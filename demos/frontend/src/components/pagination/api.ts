export const getTotalRowsFromDB = async () =>
  fetch(`${process.env.DEMO_URL}/blog?count=true`)
    .then((resp) => resp.json() as Promise<{ count: number }>)
    .then((json) => json.count || 0);

export const getPageFromDB = ({ offset = 0, limit = 20 }) =>
  fetch(`${process.env.DEMO_URL}/blog?offset=${offset}&limit=${limit}`).then(
    (resp) =>
      (resp.json() as Promise<{ data: any[] }>).then((json) => json.data || []),
  );
