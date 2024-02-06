import { useState } from "react";
import { Loading } from "./Loading";

type Posts = {
  datas: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
  state: "loading" | "successs" | "error";
};

function App() {
  const [posts, setPosts] = useState<Posts>({ datas: [], state: "loading" });
  return <Loading />;
}

export default App;
