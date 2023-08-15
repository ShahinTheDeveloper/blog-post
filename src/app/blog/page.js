import getAllPost from "@/lib/getAllPost";
import Link from "next/link";
import React from "react";

const page = async () => {
    const posts = await getAllPost();
    return (
        <div>
            <section>
                <h1>My Blog Posts</h1>
                <div className="mt-5">
                    {posts.map((post) => {
                        return (
                            <h4 className="mb-5" key={post.id}>
                                <Link href={`/blog/${post.id}`}>
                                    {post.id} - {post.title}
                                </Link>
                            </h4>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default page;
