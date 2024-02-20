export type FetchBooks = {
  docs: { title: string }[];
};

export async function getBooksTitle(name: string) {
  const datas = await fetch(
    `https://openlibrary.org/search.json?q=${name}&fields=title,availability&limit=5`
  );
  const response = (await datas.json()) as FetchBooks;
  const books = response.docs;
  return books.map((book) => book.title);
}
