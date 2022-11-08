import Link from 'next/link'

export default function Index() {
    return <>
        <h1>Index</h1>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </>
}