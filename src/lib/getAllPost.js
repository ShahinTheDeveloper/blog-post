export default async function getAllPost() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    if (!res.ok) {
        throw new Error("Error Fatching Posts");
    }
    return res.json();
}
