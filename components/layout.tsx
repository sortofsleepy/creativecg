import {Head} from "$fresh/src/runtime/head.ts";
import {ComponentChildren} from "https://esm.sh/v104/preact@10.11.0/src/index.d.ts";

export type Props = {
    children: ComponentChildren;
    title?: string;
    name?: string;
    description?: string;
};
export default function ({children}: Props) {
    return (
        <>
            <Head>
                <title>CreativeCG</title>
                <link rel={"stylesheet"} href={"/app.css"}/>
                <meta charSet="utf-8"/>
                <meta name="description"
                      content="CreativeCG is the notebook of Joseph Chow containing links and brief notes about various topics."/>
                <meta name="keywords" content="Joseph Chow, blog, note, houdini, vulkan, unreal"/>
                <meta name="distribution" content="global"/>
                <meta name="author" content="Joseph Chow"/>
                <meta name="viewport" content="width=device-width"/>

                <script type="text/javascript" src={"/mixpanel.js"}></script>
            </Head>
            <main className="container mx-auto px-72 py-10">
                {children}
            </main>

        </>
    )
}