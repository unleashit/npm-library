export const loadBlogData = () => {
  try {
    return fetch(`/dummyBlog.json`).then((resp) =>
      (resp.json() as Promise<{ data: unknown[] }>).then((json) => json),
    );
  } catch (e) {
    console.error(e);
  }
};
