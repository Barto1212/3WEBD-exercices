import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Posts } from "./Posts";
export type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type Posts = {
  datas: PostData[];
  state: "loading" | "successs" | "error";
};

function App() {
  const [posts, setPosts] = useState<Posts>({ datas: [], state: "loading" });
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const buffer = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const datas = (await buffer.json()) as PostData[];
        setPosts({ datas, state: "successs" });
      } catch (error) {
        setPosts((p) => ({ ...p, state: "error" }));
      }
    };
    fetchPosts();
  }, []);
  if (posts.state === "loading") {
    return <Loading />;
  }
  if (posts.state === "error") {
    return <h1>Une erreur s'est produite</h1>;
  }
  return <Posts posts={posts.datas} />;
}

export default App;
