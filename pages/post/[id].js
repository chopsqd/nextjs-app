import {useRouter} from "next/router";
import {MainLayout} from "../../layout/MainLayout";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Post({post: serverPost}) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:9999/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }

        if(!serverPost) {
            load()
        }
    }, [])

    if(!post) {
        return <MainLayout>
            <h3>Loading...</h3>
        </MainLayout>
    }

    return (
        <MainLayout title={"Post"}>
            <h1>{post.title}</h1>
            <hr/>
            <p>{post.body}</p>
            <Link href={"/posts"}>Back to all posts</Link>
        </MainLayout>
    )
}

Post.getInitialProps = async (context) => {
    if(!context.req) {
        return {post: null}
    }
    const response = await fetch(`http://localhost:9999/posts/${context.query.id}`)
    const post = await response.json()

    return {
        post
    }
}