import { compareDesc } from "date-fns";

import { allPosts } from "contentlayer/generated";
import PostCard from "@/app/components/PostCard";

export default function PostsPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">post</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </section>
  );
}
