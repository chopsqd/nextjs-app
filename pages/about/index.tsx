import Router from 'next/router'
import {MainLayout} from "../../layout/MainLayout";

export default function About({description}) {
    return (
        <MainLayout title={"About"}>
            <h1>About</h1>
            <p>{description}</p>

            <button onClick={() => Router.push('/')}>Back to home page</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch(`http://localhost:9999/about`)
    const data = await response.json()

    return {
        description: data.description
    }
}