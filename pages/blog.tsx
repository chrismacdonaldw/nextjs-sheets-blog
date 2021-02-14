import Link from "next/link";

import { fetchBlogPosts } from "../lib/api";
import { Layout } from "../components/Layout";
import { BlogItem } from "../components/BlogItem";

export default function Home({ posts }) {
    console.log(posts)
    return (
        <Layout>
            <p className="text-5xl text-center">Personal Blog</p>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mb-10 border-t border-b divide-y">
                    {posts.map(({ title, description, date, category }) => (
                        <BlogItem key={title} title={title} description={description} date={date} category={category} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await fetchBlogPosts();

    return {
        props: {
            posts,
        },
        revalidate: 1
    };
}