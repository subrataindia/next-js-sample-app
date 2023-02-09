import Link from "next/link";
import React from "react";
import { server } from "@/config";
import Meta from "@/components/Meta";

const Page = ({ post }) => {
  return (
    <div>
      <Meta title={post.title} />
      <h1>{post.title}</h1>
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default Page;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/posts/${context.params.id}`);
  const post = await res.json();
  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();
  const ids = posts.map((articles) => articles.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false, // if id not exist then redirect to 404 page
  };
};

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://fakestoreapi.com/products/${context.params.id}`
//   );
//   const post = await res.json();
//   return {
//     props: { post },
//   };
// };
