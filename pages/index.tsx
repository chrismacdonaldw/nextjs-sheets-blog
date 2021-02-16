import Link from "next/link";

import { fetchBlogPosts, fetchBlogPost } from "../lib/api";
import { Layout } from "../components/Layout";
import { BlogItem } from "../components/BlogItem";

export default function Home({ rows, listed }) {
  return (
    <Layout>
      {listed ? (
        <div>
          <p className="text-5xl text-center">Personal Blog</p>
          <p className="text-m text-center">Utilizing Next.JS, Google Sheets, and Tailwind</p>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y">
              {rows.map(({ title, description, date, category, id }) => (
                <BlogItem key={id} title={title} description={description} date={date} category={category} id={id} />
              ))}
            </div>
          </div>
        </div>
      ) : (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
              {rows[0].date}
            </p>
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
              <div className="mb-4">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                >
                  {rows[0].title}
                </a>
              </div>
              <p className="text-base text-gray-700 md:text-lg">
                {rows[0].description}
              </p>
            </div>
            <div className="mb-10 sm:text-center">
              <a href="/" aria-label="Author" className="inline-block mb-1">
                <img
                  alt="avatar"
                  src="https://avatars.githubusercontent.com/u/31731869?s=460&u=74e215d9f7ca4d18d4f6654ee238ab7cf3811592&v=4"
                  className="object-cover w-12 h-12 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  aria-label="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Chris MacDonald
                    </a>
              </div>
            </div>
          </div>
        )}
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const id = (context.query.post === undefined) ? null : context.query.post

  const data = (id === null) ? await fetchBlogPosts() : await fetchBlogPost(id)
  const rows = data['rows']
  const listed = data['listed']

  return {
    props: {
      rows,
      listed
    }
  };
}