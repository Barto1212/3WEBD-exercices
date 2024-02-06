import type { FC } from "react";
import type { PostData } from "./App";
type P = {
  posts: PostData[];
};
export const Posts: FC<P> = ({ posts }) => (
  <ul>
    {posts.map((p) => (
      <Post post={p} />
    ))}
  </ul>
);

type PostProp = {
  post: PostData;
};

const Post = ({ post }: PostProp) => (
  <li>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </li>
);
