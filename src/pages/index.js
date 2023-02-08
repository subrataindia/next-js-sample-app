import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Home Page</h1>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
