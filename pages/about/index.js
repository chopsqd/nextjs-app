import Router from 'next/router'

export default function About() {
    return <>
        <h1>About</h1>

        <button onClick={() => Router.push('/')}>Back to home page</button>
    </>
}