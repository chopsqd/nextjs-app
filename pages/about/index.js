import Router from 'next/router'
import {MainLayout} from "../../layout/MainLayout";

export default function About() {
    return (
        <MainLayout title={"About"}>
            <h1>About</h1>

            <button onClick={() => Router.push('/')}>Back to home page</button>
        </MainLayout>
    )
}