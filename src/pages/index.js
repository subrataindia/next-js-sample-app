import { Inter } from "@next/font/google";
import Link from "next/link";
import { server } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Home Page</h1>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={`${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
