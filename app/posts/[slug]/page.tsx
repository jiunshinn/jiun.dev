import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const MdxContent = getMDXComponent(post.body.code);

  return (
    <article className="max-w-xl py-8 mx-auto">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <section className="[&>*]:mb-3 [&>*:last-child]:mb-0">
        <MdxContent />
      </section>
    </article>
  );
}
