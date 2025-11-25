import { getAllPosts } from "@/lib/posts";
import BlogList from "@/components/BlogList";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <BlogList initialPosts={posts} />
    );
}
