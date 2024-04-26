import { Post } from "@/lib/types";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const getPosts = async (): Promise<Post[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return posts;
};

export default async function Posts() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className={inter.className}>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
