import {useRouter} from "next/router";
import {MainLayout} from "../../layout/MainLayout";
import Link from "next/link";
import {useEffect, useState} from "react";
import {NextPageContext} from "next";
import {IPost} from "../../interfaces/post";

interface PostProps {
    post: IPost
}

export default function Post({post: serverPost}: PostProps) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:9999/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
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

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

// Frontend + Backend
Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
    if(!req) {
        return {post: null}
    }

    const response = await fetch(`http://localhost:9999/posts/${query.id}`)
    const post: IPost = await response.json()

    return {
        post
    }
}

// Server Side Rendering Only
// export async function getServerSideProps(context) {
//     const response = await fetch(`http://localhost:9999/posts/${context.query.id}`)
//     const post = await response.json()
//
//     return {props: {post}}
// }