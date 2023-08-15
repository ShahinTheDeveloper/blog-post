import getSinglePost from "@/lib/getSinglePost";
import React from "react";

const page = async ({ params }) => {
    const id = params.id;
    const post = await getSinglePost(id);
    return (
        <div>
            <section>
                <h1 className="font-bold text-lg">{post.title}</h1>
                <div className="mt-5">{post.body}</div>
            </section>
        </div>
    );
};

export default page;
