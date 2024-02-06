import { Loading } from "./Loading";
import { Posts } from "./Posts";
import { useFetch } from "./useFetch";
export type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  const posts = useFetch<PostData>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (posts.state === "loading") {
    return <Loading />;
  }
  if (posts.state === "error") {
    return <h1>Une erreur s'est produite</h1>;
  }
  return <Posts posts={posts.datas} />;
}

export default App;
