import BaseLayout from "../../components/layout.tsx"
import Link from "../../components/link.tsx"
import Content from "../../islands/content.tsx";
import Header from "../../islands/header.tsx";

export default function Home() {
  return (
    <>

        <BaseLayout>
            <Header/>
            <section className="mx-auto py-10">
                <h1 className="lg:text-8xl sm:text-5xl">Misc</h1>
                <Content/>
            </section>



            <section id="dustin" className="pt-20 content_section" data-link-title="Quick RenderDoc Tutotial">
                <h2>Quick RenderDoc Tutorial </h2>
                <p>
                    Dustin H Land wrote up a brief tutorial on how to step through RenderDoc when it comes to Vulkan.
                </p>
                <Link url="https://www.fasterthan.life/blog/2017/7/11/i-am-graphics-and-so-can-you-part-2-intuition"/>
            </section>


        </BaseLayout>

    </>
  );
}
