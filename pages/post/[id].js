import {useRouter} from "next/router";
import {MainLayout} from "../../layout/MainLayout";

export default function Post() {
    const router = useRouter()

    return (
        <MainLayout title={"Post"}>
            <h1>Post {router.query.id}</h1>
        </MainLayout>
    )
}