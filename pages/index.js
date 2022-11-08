import Link from 'next/link'
import {MainLayout} from "../layout/MainLayout";

export default function Index() {
    return (
        <MainLayout title={"Home"}>
            <h1>Index</h1>
            <Link href={"/about"}>About</Link>
            <Link href={"/posts"}>Posts</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </MainLayout>
    )
}