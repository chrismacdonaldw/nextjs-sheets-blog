import Link from "next/link";

import { fetchBlogPosts } from "../lib/api";
import { Layout } from "../components/Layout";

export default function Home({ posts }) {
  console.log(posts)
  return (
    <Layout>
      yo
    </Layout>
  )
}