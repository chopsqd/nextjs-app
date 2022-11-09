import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = 'Next App'}) {
    return (
        <>
            <Head>
                <title>{title} | NextJs App</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="next,react, nextjs, javascript"/>
                <meta name="description" content="NextJs practice application"/>
            </Head>
            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/posts"}>Posts</Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
              nav {
                position: fixed;
                height: 60px;
                top: 0;
                left: 0;
                right: 0;
                background: darkblue;
                display: flex;
                justify-content: space-around;
                align-items: center;
              }

              main {
                margin-top: 60px;
                padding: 1rem;
              }
            `}</style>
        </>
    )
}