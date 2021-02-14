import { Layout } from "../../components/Layout";
import { fetchBlogPost } from "../../lib/api";
import { useRouter } from 'next/router';
import postcssConfig from "../../postcss.config";

export default function BlogPost({ post, id }) {
    return (
        <Layout>
            {post.title}
            {post.id}
        </Layout>
    );
}

export async function getServerSideProps(context: any) {
    const post = await fetchBlogPost('1')
    return {
        props: {
            post
        }
    };
}