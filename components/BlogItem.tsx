import Link from "next/link";

export const BlogItem = ({ title, description, date, category, id }) => {
    return (
        <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <a
                        className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        aria-label="Category">
                        {category}
                    </a>
                    <p className="text-gray-600">{date}</p>
                </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
                <div className="mb-3">
                    <Link href={{ pathname: '/blog/', query: { post: id } }}>
                        <a
                            aria-label="Article"
                            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                {title}
                            </p>
                        </a>
                    </Link>
                </div>
                <p className="text-gray-700">
                    {description}
                </p>
            </div>
        </div>
    );
};